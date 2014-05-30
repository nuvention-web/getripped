Alloy.Globals.workouts;
Alloy.Globals.userId;
Alloy.Globals.flag = 0;
Alloy.Globals.incomplete=[];


//alert(gaModule);
var gaModule = require('analytics');
Ti.include('analytics.js');
//var tracker= gaModule.getTracker("UA-51022220-1");
var tracker = new Analytics("UA-51022220-1");
//tracker.reset();
gaModule.debug=true;
gaModule.trackUncaughtExceptions=true;

//Titanium.include('analytics.js');
alert(tracker); 
 
//gaModule.reset();


 
Ti.App.addEventListener('analytics_trackEvent', function(e){
    alert(e.category);
    tracker.trackEvent(e.category, e.action, e.label, e.value);
});
 
Ti.App.addEventListener('analytics_trackPageview', function(e){
    var pagename = (e.pageUrl);
    alert(pagename);
    tracker.trackPageview(pagename);
});

Ti.App.Analytics = {
    trackPageview:function(pageUrl){
    	alert(pageUrl);
        Ti.App.fireEvent('analytics_trackPageview', {pageUrl:pageUrl});
    },
    trackEvent:function(category, action, label, value){
        Ti.App.fireEvent('analytics_trackEvent', {category:category, action:action, label:label, value:value});
    }
};
 
 
// Function takes an integer which is the dispatch interval in seconds
tracker.start(10);
 
// You don't need to call stop on application close, but this is just to show you can call stop at any time (Basically sets enabled = false)
 Titanium.App.addEventListener('close', function(e){
    tracker.stop();
 });





Alloy.Globals.getSomeData = function() {
	var someWorkoutId;
	var workoutId;
	var setOfWorkouts;
	
	return function(exerciseName) {
		//if(someWorkoutId == undefined) {
			MakeHTTPReqForWorkout(callback);
			function callback(workoutData) {
				for(var i=0; i < workoutData.length ; i++)
				{
					if(workoutData[i][1] == exerciseName)
					{
						workoutId=workoutData[i][0];				
						break;
					}
				}
			}
			
			
			
			//setOfWorkouts = Alloy.Globals.getWorkout(workoutId);
		//}
		return workoutId;
	};
}();

function MakeHTTPReqForWorkout(callback) {
	var url = "http://localhost:3000/workout";
	var response;
	var xhr = Ti.Network.createHTTPClient();
	xhr.open("GET", url);
	xhr.onload = function() {
        var jsonObj = JSON.parse(this.responseText);
        alert(jsonObj);
        callback(jsonObj);
       // Ti.App.Properties.setObject("user2", jsonObj);
        
   }; 
	xhr.send();
	 //response = Ti.App.Properties.getObject("user2");
	 //alert("res" + response);
	 //return response;
}


Alloy.Globals.getWorkout = function(wid,callback) {
var res;
var url = "http://localhost:3000/workout/"+wid+"/exercise";
var jsonObj;
var xhr = Ti.Network.createHTTPClient({
    onload: function(e) {
        Alloy.Globals.workouts = JSON.parse(this.responseText);
         //alert('success');
        callback();
    },
    onerror: function(e) {
        Ti.API.debug(e.error);
        alert('error');
    },
    timeout:5000  /* in milliseconds */
});
xhr.open("GET", url);
xhr.send(); 
//res = Ti.App.Properties.getObject("user1");
//alert("res" + res);
//return res;
};
