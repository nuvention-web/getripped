//\nvar args = arguments[0] || {};
var eNames = [];
var eDesc = [];
var imgurl = [];
var index = Alloy.Globals.exCount;
imgurl = Alloy.Globals.images;
eNames = Alloy.Globals.eName;
eDesc = Alloy.Globals.eDescription;
$.eName.text = eNames[index];
$.eDesc.text = "Instructions: " + eDesc[index];
$.imgId.image = imgurl[index];
var exNum = index + 1;
$.workoutTitle.text = "Upper Body workout " + exNum + " of " + "8";

alert(imgurl[index]);
if (index > 0) {
	$.btnPrev.visible = true;
}
else {
	$.btnPrev.visible = false;
}
if(exNum == 8)
{
	$.btnFinish.visible = true;
	$.btnNext.visible = false;
}
else {
	$.btnNext.visible = true;
	$.btnFinish.visible = false;
}

//alert(eNames[0]);
//for(var i = 0;  i < eNames.length; i++) {
	
//}
function showNext(){
	//alert(Alloy.Globals.exCount);
	var exId = exNum;
	var userId = 1;
	var weightText = $.txtWeight.value;
	var set1Text = $.txtSet1.value;
	var set2Text = $.txtSet2.value;
	var set3Text = $.txtSet3.value;
	
	var exAttempt = Titanium.Network.createHTTPClient();		
        exAttempt.open("POST","http://getripped.herokuapp.com/exercise/"+exId+"/attempt");
        var userEx = { 
        	user_id: userId,
			weight: weightText,
			reps1: set1Text,
			reps2: set2Text,
			reps3: set3Text 
         };
         alert(userEx);
        exAttempt.send(userEx);
        
     exAttempt.onload = function()
	{
    	var json = this.responseText;
    	var response = JSON.parse(json);
    	alert(response.message);
	};
	
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
        workoutsWin.open();
    }
}

function showAckView() {
	var completionWin = Alloy.createController("completion",{}).getView();
    if (OS_IOS) {
        $.exNavWin.openWindow(completionWin);
    }
    if (OS_ANDROID) {
        completionWin.open();
    }
}
