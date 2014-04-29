//var args = arguments[0] || {};
function showDashboard(){
	var dashboardWin = Alloy.createController("dashboard",{}).getView();
    if (OS_IOS) {
        $.compNavWin.openWindow(dashboardWin);
    }
    if (OS_ANDROID) {
        workoutsWin.open();
    }
}

function logout() {
	var dashboardWin = Alloy.createController("login",{}).getView();
    if (OS_IOS) {
        $.compNavWin.openWindow(dashboardWin);
    }
    if (OS_ANDROID) {
        workoutsWin.open();
    }
}
