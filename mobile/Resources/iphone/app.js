function MakeHTTPReqForWorkout(callback) {
    var url = "http://localhost:3000/workout";
    var xhr = Ti.Network.createHTTPClient();
    xhr.open("GET", url);
    xhr.onload = function() {
        var jsonObj = JSON.parse(this.responseText);
        alert(jsonObj);
        callback(jsonObj);
    };
    xhr.send();
}

var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.workouts;

Alloy.Globals.userId;

Alloy.Globals.flag = 0;

Alloy.Globals.incomplete = [];

var gaModule = require("analytics");

Ti.include("analytics.js");

var tracker = new Analytics("UA-51022220-1");

gaModule.debug = true;

gaModule.trackUncaughtExceptions = true;

alert(tracker);

Ti.App.addEventListener("analytics_trackEvent", function(e) {
    alert(e.category);
    tracker.trackEvent(e.category, e.action, e.label, e.value);
});

Ti.App.addEventListener("analytics_trackPageview", function(e) {
    var pagename = e.pageUrl;
    alert(pagename);
    tracker.trackPageview(pagename);
});

Ti.App.Analytics = {
    trackPageview: function(pageUrl) {
        alert(pageUrl);
        Ti.App.fireEvent("analytics_trackPageview", {
            pageUrl: pageUrl
        });
    },
    trackEvent: function(category, action, label, value) {
        Ti.App.fireEvent("analytics_trackEvent", {
            category: category,
            action: action,
            label: label,
            value: value
        });
    }
};

tracker.start(10);

Titanium.App.addEventListener("close", function() {
    tracker.stop();
});

Alloy.Globals.getSomeData = function() {
    var workoutId;
    return function(exerciseName) {
        function callback(workoutData) {
            for (var i = 0; workoutData.length > i; i++) if (workoutData[i][1] == exerciseName) {
                workoutId = workoutData[i][0];
                break;
            }
        }
        MakeHTTPReqForWorkout(callback);
        return workoutId;
    };
}();

Alloy.Globals.getWorkout = function(wid, callback) {
    var url = "http://localhost:3000/workout/" + wid + "/exercise";
    var xhr = Ti.Network.createHTTPClient({
        onload: function() {
            Alloy.Globals.workouts = JSON.parse(this.responseText);
            callback();
        },
        onerror: function(e) {
            Ti.API.debug(e.error);
            alert("error");
        },
        timeout: 5e3
    });
    xhr.open("GET", url);
    xhr.send();
};

Alloy.createController("index");