function MakeHTTPReqForWorkout() {
    var url = "http://localhost:3000/workout";
    var response;
    var xhr = Ti.Network.createHTTPClient();
    xhr.open("GET", url);
    xhr.onlaod = function() {
        var jsonObj = JSON.parse(this.responseText);
        Ti.App.Properties.setObject("user", jsonObj);
    };
    xhr.send();
    response = Ti.App.Properties.getObject("user");
    return response;
}

var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.workouts;

Alloy.Globals.userId;

Alloy.Globals.complete = [];

Alloy.Globals.incomplete = [];

Alloy.Globals.getSomeData = function() {
    var someWorkoutId;
    var workoutId;
    return function(exerciseName) {
        someWorkoutId = MakeHTTPReqForWorkout();
        for (var i = 0; someWorkoutId.length > i; i++) if (someWorkoutId[i][1] == exerciseName) {
            workoutId = someWorkoutId[i][0];
            break;
        }
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