//var args = arguments[0] || {};
function showWorkout(){
	var dashboardWin = Alloy.createController("exercise",{}).getView();
    dashboardWin.open();
}

function logout() {
	var dashboardWin = Alloy.createController("login",{}).getView();
    dashboardWin.open();
}
