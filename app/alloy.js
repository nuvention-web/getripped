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
    onload: function(e) {
    	//alert(e);
		// this function is called when data is returned from the server and available for use
        // this.responseText holds the raw text return of the message (used for text/JSON)
        // this.responseXML holds any returned XML (including SOAP)
        // this.responseData holds any returned binary data
        //Ti.API.debug(this.responseText);
        jsonObj = JSON.parse(this.responseText);
       // var nm = json[0].name;
       for (var i = 0; i < jsonObj.length; i++) { 
 		// exerciseName = jsonObj[i].name;
 	//	 exerciseDescription = jsonObj[i].description;
 		 Alloy.Globals.reps = jsonObj[i].reps;
 		 Alloy.Globals.sets = jsonObj[i].sets;
 		 //alert(jsonObj[i].name);
 		 Alloy.Globals.eName[i] = jsonObj[i].name;
 		 Alloy.Globals.images[i] = 'images/' + jsonObj[i].image;
 		// var path = "images" + Alloy.Globals.images[i];
 		 Alloy.Globals.eDescription[i] = jsonObj[i].description;//alert(Alloy.Globals.eName[i]);
		}
        //alert(jsonObj.);
        
        //alert(eName);
        //alert('success');
    },
    onerror: function(e) {
		// this function is called when an error occurs, including a timeout
        Ti.API.debug(e.error);
        alert('error');
    },
    timeout:5000  /* in milliseconds */
});
xhr.open("GET", url);
xhr.send();  // request is actually sent with this statement