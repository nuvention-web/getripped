var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

var url = "https://getripped.herokuapp.com/exercise";

var jsonObj;

var exerciseName;

var exerciseDescription;

Alloy.Globals.reps = [];

Alloy.Globals.sets = [];

Alloy.Globals.eName = [];

Alloy.Globals.images = [];

Alloy.Globals.eDescription = [];

Alloy.Globals.exCount = 0;

Alloy.Globals.userId = 0;

var gaModule = require("analytics");

gaModule.debug = true;

gaModule.trachUncaughtExceptions = true;

Alloy.Globals.analytics = gaModule.getTracker("UA-51022220-1");

Titanium.App.addEventListener("analytics_trackEvent", function(e) {
    Alloy.Golbals.analytics.trackEvent(e.category, e.action, e.label, e.value);
});

Titanium.App.addEventListener("analytics_trackPageview", function(e) {
    var pagename = e.pageUrl;
    Alloy.Globals.analytics.trackPageview(pagename);
});

Titanium.App.Analytics = {
    trackPageview: function(pageUrl) {
        Titanium.App.fireEvent("Alloy.Globals.analytics_trackPageview", {
            pageUrl: pageUrl
        });
    },
    trackEvent: function(category, action, label, value) {
        Titanium.App.fireEvent("Alloy.Globals.analytics_trackEvent", {
            category: category,
            action: action,
            label: label,
            value: value
        });
    }
};

Alloy.Globals.analytics.start(10);

Titanium.App.addEventListener("close", function() {
    Alloy.Globals.analytics.stop();
});

var xhr = Ti.Network.createHTTPClient({
    onload: function() {
        jsonObj = JSON.parse(this.responseText);
        for (var i = 0; jsonObj.length > i; i++) {
            Alloy.Globals.reps = jsonObj[i].reps;
            Alloy.Globals.sets = jsonObj[i].sets;
            Alloy.Globals.eName[i] = jsonObj[i].name;
            Alloy.Globals.images[i] = "images/" + jsonObj[i].image;
            Alloy.Globals.eDescription[i] = jsonObj[i].description;
        }
    },
    onerror: function(e) {
        Ti.API.debug(e.error);
    },
    timeout: 5e3
});

xhr.open("GET", url);

xhr.send();

Alloy.createController("index");