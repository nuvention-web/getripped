Alloy.Globals.workouts;
Alloy.Globals.userId;
Alloy.Globals.flag = 0;
Alloy.Globals.incomplete=[];

Alloy.Globals.startWorkout = function(exerciseName) {
	var someWorkoutId;
	var workoutId;
	var setOfWorkouts;
	
	return function(exerciseName) {
		//if(someWorkoutId == undefined) {
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
	var url = "http://localhost:3000/workout";
	var response;
	var xhr = Ti.Network.createHTTPClient();
	xhr.open("GET", url);
	xhr.onload = function() {
        var jsonObj = JSON.parse(this.responseText);
       // alert(jsonObj);
        callback(jsonObj);       
   }; 
	xhr.send();
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
};
