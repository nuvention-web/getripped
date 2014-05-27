//var args = arguments[0] || {};
$.dashBoardNavWin.titleImage = "titleBackground.png";
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
         $.pb.min = jsonObj.weight1;
         $.pb.value = jsonObj.weight3;
         $.pb1.min = jsonObj.weight2;
         $.pb1.value = jsonObj.weight4;
         $.pb.text = $.pb.min;
         $.welcomeLabel.text = "Welcome " + jsonObj.username + "!";
		 $.minUpper.text ="Initial: " + $.pb.min;
		 $.currentUpper.text ="Current: " + $.pb.value;

		$.pb1.text = $.pb1.min;
		$.minLower.text ="Initial: " + $.pb1.min;
		$.currentLower.text ="Current: " + $.pb1.value;
         
    },
    onerror: function(e) {
        Ti.API.debug(e.error);
        alert('error');
    },
    timeout:5000  /* in milliseconds */
});
xhr.open("GET", url);
xhr.send();


$.pb.show();
$.pb1.show();


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
