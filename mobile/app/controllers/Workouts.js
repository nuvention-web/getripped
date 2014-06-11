var args = arguments[0];
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
var data = [];
for(var i = 0;  i < Alloy.Globals.workouts.length; i++) {
	data.push(Alloy.createController('row', {
		exNum: i + 1 + ". ",
		name: Alloy.Globals.workouts[i].name
	}).getView());
}
$.workoutsTable.setData(data);


function startWorkout(){
	if(args == "Upper Body") {
	Ti.App.Analytics.trackEvent('StartUpperBody','UpperBody','Upper Body','');
	 Alloy.Globals.startWorkout("Upper Body");
	}
	else {
		Ti.App.Analytics.trackEvent('StartLowerBody','LowerBody','Lower Body','');
		Alloy.Globals.startWorkout("Lower Body");
	}
}

function alertMsg(){
	alert("Please click Start Workout");
}

