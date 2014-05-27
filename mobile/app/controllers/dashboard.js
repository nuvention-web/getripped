//var args = arguments[0] || {};

var url = "http://localhost:3000/dashboard/"+Alloy.Globals.userId;
var jsonObj;
var xhr = Ti.Network.createHTTPClient({
	
    onload: function(e) {
        jsonObj = JSON.parse(this.responseText);
         // $.upperFirstWeight.text = "Initial Average Weight Lifted: "+ jsonObj.weight1 + " lbs";
         // $.upperLastWeight.text = "Current Average Weight Lifted: "+ jsonObj.weight3 + " lbs";
         // $.lowerFirstWeight.text = "Initial Average Weight Lifted: "+ jsonObj.weight2 + " lbs";
         // $.lowerLastWeight.text = "Current Average Weight Lifted: "+ jsonObj.weight4 + " lbs";
         //Ti.App.Properties.setObject("avgWeight", jsonObj);
         $.pbUpper.min = jsonObj.weight1;
         $.pbUpper.value = jsonObj.weight3;
         $.pbLower.min = jsonObj.weight2;
         $.pbLower.value = jsonObj.weight4;
         
         var percentIncreaseUpper;
         var percentIncreaseLower;
         if(jsonObj.weight1 == 0) {
         	percentIncreaseUpper = 0;
         }
         else {         	
         	percentIncreaseUpper = ((jsonObj.weight3 - jsonObj.weight1)/jsonObj.weight1) * 100;
         }
         if(jsonObj.weight2 == 0) {
         	percentIncreaseLower = 0;
         }
         else {
         	percentIncreaseLower = ((jsonObj.weight4 - jsonObj.weight2)/jsonObj.weight2) * 100;
         }
         
         $.pbUpper.text = $.pbUpper.min;
         $.welcomeLabel.text = "Welcome " + jsonObj.username + "!";
		 $.minUpper.text ="Initial: " + $.pbUpper.min;
		 $.currentUpper.text ="Current: " + $.pbUpper.value + "  (" + String.format("%d",percentIncreaseUpper) + "%)";

		$.pbLower.text = $.pbLower.min;
		$.minLower.text ="Initial: " + $.pbLower.min;
		$.currentLower.text ="Current: " + $.pbLower.value + "  (" + String.format("%d",percentIncreaseLower) + "%)";
         
    },
    onerror: function(e) {
        Ti.API.debug(e.error);
        alert('error');
    },
    timeout:5000  /* in milliseconds */
});
xhr.open("GET", url);
xhr.send();


$.pbUpper.show();
$.pbLower.show();


function showUpperBodyWorkout(){
	 Alloy.Globals.startWorkout("Upper Body");
}

function showLowerBodyWorkout(){
	Alloy.Globals.startWorkout("Lower Body");
}

function showUpperBodyExercises(){
	Alloy.Globals.showExercises("Upper Body");
}

function showLowerBodyExercises(){
	Alloy.Globals.showExercises("Lower Body");
}

function showChangePassword(){
	var changePasswordWin = Alloy.createController("changePassword",{}).getView();
    changePasswordWin.open();
}

function logout() {
	Alloy.Globals.userId = 0;
	Alloy.Globals.flag = 0;
	Alloy.Globals.incomplete=[];
	Alloy.Globals.workouts=[];
	var dashboardWin = Alloy.createController("login",{}).getView();
    dashboardWin.open();
}
