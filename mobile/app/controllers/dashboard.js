//var args = arguments[0] || {};
var url = "http://localhost:3000/dashboard/"+Alloy.Globals.userId;
var jsonObj;
var xhr = Ti.Network.createHTTPClient({
	
    onload: function(e) {
        jsonObj = JSON.parse(this.responseText);
         $.upperFirstWeight.text = jsonObj[0];
         //Ti.App.Properties.setObject("avgWeight", jsonObj);
    },
    onerror: function(e) {
        Ti.API.debug(e.error);
        alert('error');
    },
    timeout:5000  /* in milliseconds */
});
xhr.open("GET", url);
xhr.send();

function showUpperBodyWorkout(){
	var wid = Alloy.Globals.getSomeData("Upper Body");
	getworkout(wid, "Upper");	 
}

function showLowerBodyWorkout(){
	var wid = Alloy.Globals.getSomeData("Lower Body");
	getworkout(wid, "Lower");
}

function getworkout(wid, wName) {
	Alloy.Globals.getWorkout(wid, function navigateTo(){
	 	var index = 0;
    	var workouts = Alloy.createController("Workouts",wName).getView();
    	workouts.open();
	});
}

function logout() {
	Alloy.Globals.userId = 0;
	Alloy.Globals.exCount = 0;
	var dashboardWin = Alloy.createController("login",{}).getView();
    dashboardWin.open();
}
