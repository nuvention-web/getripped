//var args = arguments[0] || {};
function showDashboard(){
	Alloy.Globals.exCount = 0;
	var compWin = Alloy.createController("exercise",{}).getView();
    compWin.open();
}

function logout() {
	Alloy.Globals.userId = 0;
	Alloy.Globals.exCount = 0;
	var compWin = Alloy.createController("login",{}).getView();
    compWin.open();
}
