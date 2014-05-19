var workoutTitles = [];
workoutTitles = Alloy.Globals.workouts.name;
//alert(workoutTitles);
var data = [];
for(var i = 0;  i < Alloy.Globals.workouts.length; i++) {
	data.push(Alloy.createController('row', {
		exNum: i + 1 + ". ",
		name: Alloy.Globals.workouts[i].name
	}).getView());
}
//alert(data.name);
$.workoutsTable.setData(data);

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
		var dashboardWin = Alloy.createController("exercise",index).getView();
    	dashboardWin.open();
	});
}
