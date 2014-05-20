//var args = arguments[0] || {};
var workoutTitles = [];
workoutTitles = Alloy.Globals.workouts.name;
//alert(workoutTitles);
var data = [];
for(var i = 0;  i < Alloy.Globals.workouts.length; i++) {
	data.push(Alloy.createController('completedTable', {
		exNum: i + 1 + ". ",
		name: Alloy.Globals.workouts[i].name
	}).getView());
}
//alert(data.name);
$.workoutsTable.setData(data);


function showDashboard(){
	var isEmpty = true;
	for(var i = 0; i < Alloy.Globals.incomplete.length; i++)
	{
		if(Alloy.Globals.incomplete[i] != null) {
			isEmpty = false;
			break;
		}
	}
	if(isEmpty == true) {
		alert("Great Job!!!");
		var dashboardWin = Alloy.createController("dashboard",{}).getView();
    	dashboardWin.open();
	}
	else{
		alert("Please complete all the exercises");
		return;
	}
}

function logout() {
	Alloy.Globals.userId = 0;
	Alloy.Globals.exCount = 0;
	var compWin = Alloy.createController("login",{}).getView();
    compWin.open();
}
