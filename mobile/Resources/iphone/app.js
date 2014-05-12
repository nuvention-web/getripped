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