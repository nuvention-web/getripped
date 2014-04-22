//\nvar args = arguments[0] || {};
var eNames = [];
var eDesc = [];
var index = Alloy.Globals.exCount;
eNames = Alloy.Globals.eName;
eDesc = Alloy.Globals.eDescription;
$.eName.text = eNames[index];
$.eDesc.text = "Instructions: " + eDesc[index];
var exNum = index + 1;
$.workoutTitle.text = "Upper Body workout " + exNum + " of " + eNames.length;

if (index > 0) {
	$.btnPrev.visible = true;
}
else {
	$.btnPrev.visible = false;
}
//alert(eNames[0]);
//for(var i = 0;  i < eNames.length; i++) {
	
//}
function showNext(){
	//alert(Alloy.Globals.exCount);
	Alloy.Globals.exCount = Alloy.Globals.exCount + 1;
	var workoutsWin = Alloy.createController("exercise",{}).getView();
    if (OS_IOS) {
        $.exNavWin.openWindow(workoutsWin);
    }
    if (OS_ANDROID) {
        workouts.open();
    }
}

function showPrev() {
	Alloy.Globals.exCount = Alloy.Globals.exCount - 1;
	var workoutsWin = Alloy.createController("exercise",{}).getView();
    if (OS_IOS) {
        $.exNavWin.openWindow(workoutsWin);
    }
    if (OS_ANDROID) {
        workouts.open();
    }
}
