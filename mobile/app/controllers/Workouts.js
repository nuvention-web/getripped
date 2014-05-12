var workoutTitles = [];
workoutTitles = Alloy.Globals.eName;
//alert(workoutTitles);
var data = [];
for(var i = 0;  i < workoutTitles.length; i++) {
	data.push(Alloy.createController('row', {
		name: workoutTitles[i]
	}).getView());
}
//alert(data.name);
$.workoutsTable.setData(data);
