function MakeHTTPReqForWorkout(callback) {
    var url = "http://localhost:3000/workout";
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