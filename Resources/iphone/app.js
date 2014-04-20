var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

var url = "https://getripped.herokuapp.com/exercise";

var jsonObj;

var exerciseName;

var exerciseDescription;

var reps;

var sets;

Alloy.Globals.eName = [];

var xhr = Ti.Network.createHTTPClient({
    onload: function() {
        jsonObj = JSON.parse(this.responseText);
        for (var i = 0; jsonObj.length > i; i++) {
            exerciseName = jsonObj[i].name;
            exerciseDescription = jsonObj[i].description;
            reps = jsonObj[i].reps;
            sets = jsonObj[i].sets;
            Alloy.Globals.eName[i] = exerciseName;
        }
        alert("success");
    },
    onerror: function(e) {
        Ti.API.debug(e.error);
        alert("error");
    },
    timeout: 5e3
});

xhr.open("GET", url);

xhr.send();

Alloy.createController("index");