function MakeHTTPReqForWorkout(callback) {
    var url = "http://swoletrain.herokuapp.com/workout";
    var xhr = Ti.Network.createHTTPClient();
    xhr.open("GET", url);
    xhr.onload = function() {
        var jsonObj = JSON.parse(this.responseText);
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

Ti.App.addEventListener("analytics_trackEvent", function(e) {
    tracker.trackEvent(e.category, e.action, e.label, e.value);
});

Ti.App.addEventListener("analytics_trackPageview", function(e) {
    var pagename = e.pageUrl;
    tracker.trackPageview(pagename);
});

Ti.App.Analytics = {
    trackPageview: function(pageUrl) {
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

tracker.start(1);

Titanium.App.addEventListener("close", function() {
    tracker.stop();
});

Alloy.Globals.startWorkout = function() {
    var workoutId;
    return function(exerciseName) {
        function callback(workoutData, cback) {
            function cback(workoutId) {
                Alloy.Globals.getWorkout(workoutId, function() {
                    var index = 0;
                    var workouts = Alloy.createController("exercise", index).getView();
                    workouts.open();
                });
            }
            for (var i = 0; workoutData.length > i; i++) if (workoutData[i][1] == exerciseName) {
                workoutId = workoutData[i][0];
                cback(workoutId);
                break;
            }
        }
        MakeHTTPReqForWorkout(callback);
    };
}();

Alloy.Globals.showExercises = function() {
    var workoutId;
    return function(workoutName) {
        function callback(workoutData) {
            function cback(workoutId, workoutName) {
                Alloy.Globals.getWorkout(workoutId, function() {
                    var workouts = Alloy.createController("Workouts", workoutName).getView();
                    workouts.open();
                });
            }
            for (var i = 0; workoutData.length > i; i++) if (workoutData[i][1] == workoutName) {
                workoutId = workoutData[i][0];
                workoutName = workoutData[i][1];
                cback(workoutId, workoutName);
                break;
            }
        }
        MakeHTTPReqForWorkout(callback);
    };
}();

Alloy.Globals.getWorkout = function(wid, callback) {
    var url = "http://swoletrain.herokuapp.com/workout/" + wid + "/exercise";
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