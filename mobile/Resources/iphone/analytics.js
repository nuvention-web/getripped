function StringBuilder(value) {
    this.strings = new Array("");
    this.append(value);
}

(function() {
    var initializing = false, fnTest = /xyz/.test(function() {}) ? /\b_super\b/ : /.*/;
    this.AnalyticsBase = function() {};
    AnalyticsBase.extend = function(prop) {
        function AnalyticsBase() {
            !initializing && this.init && this.init.apply(this, arguments);
        }
        var _super = this.prototype;
        initializing = true;
        var prototype = new this();
        initializing = false;
        for (var name in prop) prototype[name] = "function" == typeof prop[name] && "function" == typeof _super[name] && fnTest.test(prop[name]) ? function(name, fn) {
            return function() {
                var tmp = this._super;
                this._super = _super[name];
                var ret = fn.apply(this, arguments);
                this._super = tmp;
                return ret;
            };
        }(name, prop[name]) : prop[name];
        AnalyticsBase.prototype = prototype;
        AnalyticsBase.constructor = AnalyticsBase;
        AnalyticsBase.extend = arguments.callee;
        return AnalyticsBase;
    };
})();

var Analytics = AnalyticsBase.extend({
    _PAGEVIEW: "__##PAGEVIEW##__",
    _USER_AGENT: "GoogleAnalytics/1.0 (" + Titanium.Platform.username + "; U; CPU " + "iPhone OS" + " " + Titanium.Platform.version + " like Mac OS X; " + Titanium.Platform.locale + "-" + Titanium.Locale.getCurrentCountry() + ")",
    _accountId: void 0,
    _db: void 0,
    _session: void 0,
    _storedEvents: 0,
    _dispatcherIsBusy: false,
    _httpClient: void 0,
    enabled: true,
    init: function(accountId) {
        "android" === Titanium.Platform.osname && (this._USER_AGENT = "GoogleAnalytics/1.0 (Linux; U; Android " + Titanium.Platform.version + "; " + Titanium.Locale.currentLocale + "; " + Titanium.Platform.model + ")");
        this._accountId = accountId;
        this._db = Titanium.Database.open("analytics");
        this._initialize_db();
    },
    start: function(dispatchPeriod, isAsync) {
        this._isAsync = true == isAsync ? true : false;
        if (this.enabled) {
            this._startNewVisit();
            this._httpClient = Titanium.Network.createHTTPClient();
            var context = this;
            setInterval(function() {
                context._dispatchEvents();
            }, 1e3 * dispatchPeriod);
        }
    },
    stop: function() {
        this.enabled = false;
    },
    trackPageview: function(pageUrl) {
        this._session && this.enabled && this._createEvent(this._PAGEVIEW, pageUrl, null, -1);
    },
    trackEvent: function(category, action, label, value) {
        this._session && this.enabled && this._createEvent(category, action, label, value);
    },
    reset: function() {
        Titanium.App.Properties.setString("analytics_session", null);
    },
    _initialize_db: function() {
        this._db.execute("CREATE TABLE IF NOT EXISTS events (event_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, user_id INTEGER NOT NULL, random_val INTEGER NOT NULL, timestamp_first INTEGER NOT NULL, timestamp_previous INTEGER NOT NULL, timestamp_current INTEGER NOT NULL, visits INTEGER NOT NULL, category STRING NOT NULL, action STRING NOT NULL, label STRING NULL, value INTEGER NOT NULL);");
        var rowCount = this._db.execute("SELECT COUNT(*) FROM events");
        while (rowCount.isValidRow()) {
            this._storedEvents = rowCount.field(0);
            rowCount.next();
        }
        rowCount.close();
    },
    _startNewVisit: function() {
        var now = Math.round(new Date().getTime() / 1e3);
        if (Titanium.App.Properties.hasProperty("analytics_session")) {
            var oldSession = JSON.parse(Titanium.App.Properties.getString("analytics_session"));
            this._session = {
                user_id: oldSession.user_id,
                timestamp_first: oldSession.timestamp_first,
                timestamp_previous: oldSession.timestamp_current,
                timestamp_current: now,
                visits: oldSession.visits + 1
            };
        } else this._session = {
            user_id: Math.floor(9999999999 * Math.random()),
            timestamp_first: now,
            timestamp_previous: now,
            timestamp_current: now,
            visits: 1
        };
        Titanium.App.Properties.setString("analytics_session", JSON.stringify(this._session));
    },
    _createEvent: function(category, action, label, value) {
        if (this._storedEvents >= 1e3) {
            Titanium.API.warn("Analytics: Store full, not storing last event");
            return;
        }
        var rnd = Math.floor(999999999 * Math.random());
        this._db.execute("INSERT INTO events (user_id, random_val, timestamp_first, timestamp_previous, timestamp_current, visits, category, action, label, value) VALUES (?,?,?,?,?,?,?,?,?,?)", this._session.user_id, rnd, this._session.timestamp_first, this._session.timestamp_previous, this._session.timestamp_current, this._session.visits, category, action, label, value);
        this._storedEvents++;
    },
    _dispatchEvents: function() {
        if (!this._dispatcherIsBusy && Titanium.Network.online) {
            this._dispatcherIsBusy = true;
            var eventRows = this._db.execute("SELECT * FROM events");
            var eventsToDelete = [];
            while (eventRows.isValidRow()) {
                var event = {
                    event_id: eventRows.fieldByName("event_id"),
                    user_id: eventRows.fieldByName("user_id"),
                    random_val: eventRows.fieldByName("random_val"),
                    timestamp_first: eventRows.fieldByName("timestamp_first"),
                    timestamp_previous: eventRows.fieldByName("timestamp_previous"),
                    timestamp_current: eventRows.fieldByName("timestamp_current"),
                    visits: eventRows.fieldByName("visits"),
                    category: eventRows.fieldByName("category"),
                    action: eventRows.fieldByName("action"),
                    label: eventRows.fieldByName("label"),
                    value: eventRows.fieldByName("value")
                };
                var path = this._constructRequestPath(event);
                this._httpClient.open("GET", "http://www.google-analytics.com" + path, this._isAsync);
                this._httpClient.setRequestHeader("User-Agent", this._USER_AGENT);
                this._httpClient.send();
                eventsToDelete.push(event.event_id);
                eventRows.next();
            }
            eventRows.close();
            for (var i = 0; eventsToDelete.length > i; i++) this._db.execute("DELETE FROM events WHERE event_id = ?", eventsToDelete[i]);
            this._dispatcherIsBusy = false;
        }
    },
    _constructRequestPath: function(event) {
        var path = new StringBuilder("/__utm.gif");
        path.append("?utmwv=4.4mi");
        path.append("&utmn=").append(event.random_val);
        path.append("&utmcs=UTF-8");
        path.append("&utmsr=" + Titanium.Platform.displayCaps.platformWidth + "x" + Titanium.Platform.displayCaps.platformHeight);
        path.append("&utmsc=24-bit");
        path.append("&utmul=" + Titanium.Platform.locale + "-" + Titanium.Platform.countryCode);
        path.append("&utmac=").append(this._accountId);
        if (event.category == this._PAGEVIEW) path.append("&utmp=").append(event.action); else {
            var tmpValue = event.value > 0 ? event.value : 1;
            path.append("&utmt=event");
            path.append("&utme=5(" + event.category + "*" + event.action + "*" + event.label + ")(" + tmpValue + ")");
        }
        path.append("&utmcc=");
        var cookie = new StringBuilder("__utma=");
        cookie.append("737325").append(".");
        cookie.append(event.user_id).append(".");
        cookie.append(event.timestamp_first).append(".");
        cookie.append(event.timestamp_previous).append(".");
        cookie.append(event.timestamp_current).append(".");
        cookie.append(event.visits);
        path.append(cookie.toString());
        return path.toString();
    }
});

StringBuilder.prototype.append = function(value) {
    value && this.strings.push(value);
    return this;
};

StringBuilder.prototype.clear = function() {
    this.strings.length = 1;
};

StringBuilder.prototype.toString = function() {
    return this.strings.join("");
};

var commonJSWrapper = function(key) {
    return new Analytics(key);
};

module.exports = commonJSWrapper;