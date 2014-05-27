Alloy.Globals.workouts;
Alloy.Globals.userId;
Alloy.Globals.flag = 0;
Alloy.Globals.incomplete=[];

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
