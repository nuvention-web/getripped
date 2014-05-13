//var args = arguments[0] || {};

function showUpperBodyWorkout(){
	var arg = 1;
	var dashboardWin = Alloy.createController("exercise",arg).getView();
    dashboardWin.open();
}

function showLowerBodyWorkout(){
	var arg = 2;
	var dashboardWin = Alloy.createController("exercise",arg).getView();
    dashboardWin.open();
}

function logout() {
	Alloy.Globals.userId = 0;
	Alloy.Globals.exCount = 0;
	var dashboardWin = Alloy.createController("login",{}).getView();
    dashboardWin.open();
}
