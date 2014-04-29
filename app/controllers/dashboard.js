//var args = arguments[0] || {};
function showWorkout(){
	var dashboardWin = Alloy.createController("exercise",{}).getView();
    dashboardWin.open();
}

function logout() {
	Alloy.Globals.userId = 0;
	Alloy.Globals.exCount = 0;
	var dashboardWin = Alloy.createController("login",{}).getView();
    dashboardWin.open();
}
