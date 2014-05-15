// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
var url = "http://localhost:3000/workout/1/exercise";
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
    onload: function(e) {
        jsonObj = JSON.parse(this.responseText);
       for (var i = 0; i < jsonObj.length; i++) { 
 		 Alloy.Globals.reps = jsonObj[i].reps;
 		 Alloy.Globals.sets = jsonObj[i].sets;
 		 Alloy.Globals.eName[i] = jsonObj[i].name;
 		 Alloy.Globals.images[i] = 'images/' + jsonObj[i].image;
 		 Alloy.Globals.eDescription[i] = jsonObj[i].description;
		}
        //alert('success');
    },
    onerror: function(e) {
		// this function is called when an error occurs, including a timeout
        Ti.API.debug(e.error);
        //alert('error');
    },
    timeout:5000  /* in milliseconds */
});
xhr.open("GET", url);
xhr.send();  // request is actually sent with this statement