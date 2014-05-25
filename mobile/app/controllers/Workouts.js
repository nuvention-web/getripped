var args = arguments[0];
//alert(args);
var bkBtn = Titanium.UI.createButton({
height: 25,
font:{size:9, fontWeight:'bold'},
width: 60,
backgroundColor: 'transparent',
backgroundImage: 'backBtn.png',
});

bkBtn.addEventListener("click", function(e){
		 var workoutsWin = Alloy.createController("dashboard",{}).getView();
        workoutsWin.open();
	});
$.workoutWinId.setLeftNavButton(bkBtn);


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

alert(args);
if(args == "Upper Body") {
	$.btnUpperWorkout.visible = true;
}
else {
	$.btnLowerWorkout.visible = true;
}

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
