//var args = arguments[0] || {};

function showUpperBodyWorkout(){
	var wid = Alloy.Globals.getSomeData("Upper Body");
	getworkout(wid);	 
}

function showLowerBodyWorkout(){
	var wid = Alloy.Globals.getSomeData("Lower Body");
	getworkout(wid);
}

function getworkout(wid) {
	Alloy.Globals.getWorkout(wid, function navigateTo(){
	 	var index = 0;
		//var dashboardWin = Alloy.createController("exercise",index).getView();
    	//dashboardWin.open();
    	var workouts = Alloy.createController("Workouts",{}).getView();
    	workouts.open();
	});
}

function logout() {
	Alloy.Globals.userId = 0;
	Alloy.Globals.exCount = 0;
	var dashboardWin = Alloy.createController("login",{}).getView();
    dashboardWin.open();
}
