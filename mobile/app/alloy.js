Alloy.Globals.workouts;
Alloy.Globals.userId;
Alloy.Globals.flag = 0;
Alloy.Globals.incomplete=[];


var gaModule = require('analytics');
Ti.include('analytics.js');
var tracker = new Analytics("UA-51022220-1");
gaModule.debug=true;
gaModule.trackUncaughtExceptions=true;

Ti.App.addEventListener('analytics_trackEvent', function(e){
    tracker.trackEvent(e.category, e.action, e.label, e.value);
});
 
Ti.App.addEventListener('analytics_trackPageview', function(e){
    var pagename = (e.pageUrl);
    tracker.trackPageview(pagename);
});

Ti.App.Analytics = {
    trackPageview:function(pageUrl){
        Ti.App.fireEvent('analytics_trackPageview', {pageUrl:pageUrl});
    },
    trackEvent:function(category, action, label, value){
        Ti.App.fireEvent('analytics_trackEvent', {category:category, action:action, label:label, value:value});
    }
};
 
 
// Function takes an integer which is the dispatch interval in seconds
tracker.start(1);
 
// You don't need to call stop on application close, but this is just to show you can call stop at any time (Basically sets enabled = false)
 Titanium.App.addEventListener('close', function(e){
    tracker.stop();
 });


Alloy.Globals.startWorkout = function(exerciseName) {
	var someWorkoutId;
	var workoutId;
	var setOfWorkouts;
	
	return function(exerciseName) {
			MakeHTTPReqForWorkout(callback);
			function callback(workoutData,cback) {
				for(var i=0; i < workoutData.length ; i++)
				{
					if(workoutData[i][1] == exerciseName)
					{
						workoutId=workoutData[i][0];	
						cback(workoutId);			
						break;
					}
					
					function cback(workoutId){
						Alloy.Globals.getWorkout(workoutId, function navigateTo(){
					 	var index = 0;
    					var workouts = Alloy.createController("exercise",index).getView();
    					workouts.open();
					});
					}
				}	
					
				}
	};
}();


Alloy.Globals.showExercises = function(workoutName){
	
	var workoutId;
	var workoutName;
	return function(workoutName) {
		MakeHTTPReqForWorkout(callback);
		function callback(workoutData){
			for(var i=0; i < workoutData.length ; i++)
				{
					if(workoutData[i][1] == workoutName)
					{
						workoutId=workoutData[i][0];
						workoutName = workoutData[i][1];	
						cback(workoutId,workoutName);			
						break;
					}
					
					function cback(workoutId,workoutName){
						Alloy.Globals.getWorkout(workoutId, function navigateTo(){
    					var workouts = Alloy.createController("Workouts",workoutName).getView();
    					workouts.open();
					});
					}
				}
		}
	};
}();


function MakeHTTPReqForWorkout(callback) {
	var url = "http://swoletrain.herokuapp.com/workout";
	var response;
	var xhr = Ti.Network.createHTTPClient();
	xhr.open("GET", url);
	xhr.onload = function() {
        var jsonObj = JSON.parse(this.responseText);
        callback(jsonObj);       
   }; 
	xhr.send();
}


Alloy.Globals.getWorkout = function(wid,callback) {
var res;
var url = "http://swoletrain.herokuapp.com/workout/"+wid+"/exercise";
var jsonObj;
var xhr = Ti.Network.createHTTPClient({
    onload: function(e) {
        Alloy.Globals.workouts = JSON.parse(this.responseText);
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
};
