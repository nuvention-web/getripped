//\nvar args = arguments[0] || {};
var bkBtn = Titanium.UI.createButton({
height: 25,
font:{size:9, fontWeight:'bold'},
width: 50,
backgroundImage: 'back.png',
});

//$.loginWin.setTitleAttributes(color:'blue',font: {fontFamily:'Snell Roundhand', fontSize:36},shadow:{color:'gray', offset:{width:1,height:1}});

bkBtn.addEventListener("click", function(e){
		 var workoutsWin = Alloy.createController("dashboard",{}).getView();
        workoutsWin.open();
	});


var eNames = [];
var eDesc = [];
var imgurl = [];
var index = Alloy.Globals.exCount;
imgurl = Alloy.Globals.images;
eNames = Alloy.Globals.eName;
eDesc = Alloy.Globals.eDescription;
$.eName.text = eNames[index];
var exNum = index + 1;
var imgName = exNum + ".JPG";
$.exImage.image = imgName;
$.workoutTitle.text = "Upper Body workout " + exNum + " of " + "8";
$.txtWeight.keyboardType = Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION;
$.txtSet1.keyboardType = Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION;
$.txtSet2.keyboardType = Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION;
$.txtSet3.keyboardType = Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION;

if(exNum == 1){
	$.exWin.setLeftNavButton(bkBtn);
}
if(exNum == 5 || exNum == 8){
	$.txtWeight.value = "N/A";
	$.txtWeight.editable = "false";
}

/* Code to check if user has attempted the workout previously*/
var uId = Alloy.Globals.userId;
var exAttempt = Titanium.Network.createHTTPClient();		
        exAttempt.open("POST","http://getripped.herokuapp.com/user/"+uId+"/exercise/"+exNum+"/attempt/last");
        var userEx = { 
			password: "gotraingo"
         };
        exAttempt.send(userEx);
        
     exAttempt.onload = function()
	{
		$.maskImg.visible = "true";
    	var json = this.responseText;
    	var response = JSON.parse(json);
    	//alert(response);
    	if(response.weight && response.weight!=0){
    		$.txtWeight.value = response.weight;
    		$.txtWeight.editable = "false";
    		$.weightLabel.text = "Recommended Weight";
    	}
    	else {
    		$.weightLabel.text = "Enter Weight";
    	}
    	$.txtWeight.visible = "true";
    	$.maskImg.visible = "false";
	};


if(exNum == 8)
{
	$.btnNext.title = "Finish";
}
else {
	$.btnNext.title = "Next";
}

function isNumber(n) {
  return !isNaN(parseInt(n)) && isFinite(n) && n.toString().indexOf(".") == -1;
}

function showNext(){
	if(exNum == 8) {
		showAckView();
	}
	else {
	var exId = exNum;
	var uId = Alloy.Globals.userId;
	var weightText = $.txtWeight.value;
	var set1Text = $.txtSet1.value;
	var set2Text = $.txtSet2.value;
	var set3Text = $.txtSet3.value;
	
	if(weightText==""){
		alert("Enter weight used");
		return;
	}
	else if(weightText=="N/A"){
		weightText = 0;
	}
	if(set1Text==""){
		alert("Enter reps completed for Set 1");
		return;
	}
	if(set2Text==""){
		alert("Enter reps completed for Set 2");
		return;
	}
	if(set3Text==""){
		alert("Enter reps completed for Set 3");
		return;
	}
	
	var rep1Input = isNumber(set1Text);
	var rep2Input = isNumber(set2Text);
	var rep3Input = isNumber(set3Text);
	if(rep1Input == 0) {
		alert("Enter only numbers for Set 1 reps");
		return;
	}
	if(rep2Input == 0) {
		alert("Enter only numbers for Set 2 reps");
		return;
	}
	if(rep3Input == 0) {
		alert("Enter only numbers for Set 3 reps");
		return;
	}
	
	var exAttempt = Titanium.Network.createHTTPClient();		
        exAttempt.open("POST","http://getripped.herokuapp.com/exercise/"+exId+"/attempt");
        var userEx = { 
        	user_id: uId,
			weight: weightText,
			reps1: set1Text,
			reps2: set2Text,
			reps3: set3Text 
         };
         //alert(userEx);
        exAttempt.send(userEx);
        
     exAttempt.onload = function()
	{
    	var json = this.responseText;
    	var response = JSON.parse(json);
    	//alert(response);
	};
	
	Alloy.Globals.exCount = Alloy.Globals.exCount + 1;
	var workoutsWin = Alloy.createController("exercise",{}).getView();
    if (OS_IOS) {
        workoutsWin.open();
    }
    if (OS_ANDROID) {
        workouts.open();
    }
   }
}

function skipExercise() {
	if(exNum == 8) {
		showAckView();
	}
	else {
		Alloy.Globals.exCount = Alloy.Globals.exCount + 1;
		var workoutsWin = Alloy.createController("exercise",{}).getView();
   		workoutsWin.open();
   }
}

function showAckView() {
	var completionWin = Alloy.createController("completion",{}).getView();
    if (OS_IOS) {
        completionWin.open();
    }
    if (OS_ANDROID) {
        completionWin.open();
    }
}

function openExDetails(){
	var completionWin = Alloy.createController("exDetails",{}).getView();
    if (OS_IOS) {
        completionWin.open();
    }
    if (OS_ANDROID) {
        completionWin.open();
    }
}

function openLogin(){
	var completionWin = Alloy.createController("login",{}).getView();
    if (OS_IOS) {
        completionWin.open();
    }
    if (OS_ANDROID) {
        completionWin.open();
    }
	
}
