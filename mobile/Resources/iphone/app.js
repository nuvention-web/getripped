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