//alert("wk" + Alloy.Globals.workouts.name);
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

	$.eName.text = Alloy.Globals.workouts[args].name;
	var exNum = parseInt(args) + 1;
	var imgName = Alloy.Globals.workouts[args].image;
	$.exImage.image = imgName;
	$.workoutTitle.text = exNum + " of " + Alloy.Globals.workouts.length;
	$.txtWeight.keyboardType = Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION;
	$.txtSet1.keyboardType = Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION;
	$.txtSet2.keyboardType = Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION;
	$.txtSet3.keyboardType = Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION;
	
	if((exNum == 1) && (Alloy.Globals.flag == 0 || Alloy.Globals.incomplete.length == Alloy.Globals.workouts.length)){
		$.exWin.setLeftNavButton(bkBtn);
	}
	if(Alloy.Globals.workouts[args].name == "Hip Raises" || Alloy.Globals.workouts[args].name == "Raised Leg Sit Up" ||
		 Alloy.Globals.workouts[args].name == "Side Bridge" || Alloy.Globals.workouts[args].name == "Plank" ||
		Alloy.Globals.workouts[args].name == "Dips" ||  Alloy.Globals.workouts[args].name == "Chinup"){
		$.txtWeight.value = "N/A";
		$.txtWeight.editable = "false";
	}
	
	/* Code to check if user has attempted the workout previously*/
	var uId = Alloy.Globals.userId;
	var exAttempt = Titanium.Network.createHTTPClient();		
	        exAttempt.open("POST","http://localhost:3000/user/"+uId+"/exercise/"+Alloy.Globals.workouts[args].id+"/attempt/last");
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
	    		$.txtWeight.value = response.next_weight;
	    		$.txtWeight.editable = "false";
	    		$.weightLabel.text = "Recommended Weight";
	    	}
	    	else {
	    		$.weightLabel.text = "Enter Weight";
	    	}
	    	$.txtWeight.visible = "true";
	    	$.maskImg.visible = "false";
		};


function isNumber(n) {
  return !isNaN(parseInt(n)) && isFinite(n) && n.toString().indexOf(".") == -1;
}

function showNext(){
	var exid;
	if(exNum == Alloy.Globals.workouts.length) {
		//showAckView();
		Alloy.Globals.flag = 1;
	}
	//else {
	exId = Alloy.Globals.workouts[args].id;
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
	if(set1Text=="") {
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
	
	var weightInput = -1;
	var rep1Input = -1;
	var rep2Input = -1;
	var rep3Input = -1;
	weightInput = isNumber(weightText);
	rep1Input = isNumber(set1Text);
	rep2Input = isNumber(set2Text);
	rep3Input = isNumber(set3Text);
	
	if(weightInput == 0) {
		alert("Enter only numbers for weight used");
		return;
	}
	else if(weightText < 0) {
		alert("Weight used cannot be less than zero");
		return;
	}
		
	if(rep1Input == 0) {
		alert("Enter only numbers for Set 1 reps");
		return;
	}
	else if(set1Text < 0) {
		alert("Set 1 reps cannot be less than zero");
		return;
	}
	
	if(rep2Input == 0) {
		alert("Enter only numbers for Set 2 reps");
		return;
	}
	else if(set2Text < 0) {
		alert("Set 2 reps cannot be less than zero");
		return;
	}
	
	if(rep3Input == 0) {
		alert("Enter only numbers for Set 3 reps");
		return;
	}
	else if(set3Text < 0) {
		alert("Set 3 reps cannot be less than zero");
		return;
	}
	
	if(set1Text > 12 || set2Text > 12 || set3Text > 12){
		alert("Reps Completed cannot be greater than Recommended Reps");
		return;
	}
	
	
	var exAttempt = Titanium.Network.createHTTPClient();		
        exAttempt.open("POST","http://localhost:3000/exercise/"+exId+"/attempt");
        var userEx = { 
        	user_id: uId,
			weight: weightText,
			reps1: set1Text,
			reps2: set2Text,
			reps3: set3Text 
         };
        exAttempt.send(userEx);
        
     exAttempt.onload = function()
	{
    	var json = this.responseText;
    	var response = JSON.parse(json);
	};
	var tempArg;
	if(Alloy.Globals.incomplete.indexOf(args) != -1){
		
		if(Alloy.Globals.flag == 1) {
			var tempFlag = 0;
			for(var i = Alloy.Globals.incomplete.indexOf(args), j = 1; i < Alloy.Globals.incomplete.length; i++, j++)
			{
				if((Alloy.Globals.incomplete[Alloy.Globals.incomplete.indexOf(args) + j] != null) && (typeof Alloy.Globals.incomplete[Alloy.Globals.incomplete.indexOf(args) + j] != 'undefined')){
					tempArg = Alloy.Globals.incomplete.indexOf(args) + j;
					tempFlag = 1;
					break;		
				} 
			}
			if(tempFlag == 0){
				delete Alloy.Globals.incomplete[Alloy.Globals.incomplete.indexOf(args)];
				var isEmptyTemp = true;
				for(var i = 0; i < Alloy.Globals.incomplete.length; i++)
				{
					if((Alloy.Globals.incomplete[i] != null) || (typeof Alloy.Globals.incomplete[i]  != 'undefined')) {
						isEmptyTemp = false;
						break;
					}
				}
				if(isEmptyTemp == true)
				{
					Alloy.Globals.flag = 0;
					Alloy.Globals.incomplete = [];
				}
				showAckView();
				return;
			}
		}
		
		delete Alloy.Globals.incomplete[Alloy.Globals.incomplete.indexOf(args)];
		
		var isEmpty = true;
		for(var i = 0; i < Alloy.Globals.incomplete.length; i++)
		{
			if(Alloy.Globals.incomplete[i] != null) {
				isEmpty = false;
				break;
			}
		}
		if(isEmpty == true || (tempArg-1) == (Alloy.Globals.incomplete.length-1) ) {
			if(isEmpty == true)
				{
					Alloy.Globals.flag = 0;
					Alloy.Globals.incomplete = [];
				}
			showAckView();
			return;
		}
	}
	
	if(exNum == Alloy.Globals.workouts.length) {
		if(Alloy.Globals.incomplete.length == 0){
			Alloy.Globals.flag = 0;
		}
		showAckView();
		return;
	}
	if(Alloy.Globals.flag == 1) {
		args = 	Alloy.Globals.incomplete[tempArg];
	}
	else {
	args = args + 1;
	}
	var workoutsWin = Alloy.createController("exercise",args).getView();
    workoutsWin.open();
   //}
}

function skipExercise() {
	//alert(Alloy.Globals.incomplete);
	if(Alloy.Globals.incomplete.indexOf(args) == -1){
		Alloy.Globals.incomplete.push(args);
	}
	if(exNum == Alloy.Globals.workouts.length) {
		showAckView();
		Alloy.Globals.flag = 1;
	}
	else {	
		if(Alloy.Globals.flag == 1) {
			var tempFlag = 0;
			for(var i = Alloy.Globals.incomplete.indexOf(args), j = 1; i < Alloy.Globals.incomplete.length; i++, j++)
			{
				if((Alloy.Globals.incomplete[Alloy.Globals.incomplete.indexOf(args) + j] != null) && (typeof Alloy.Globals.incomplete[Alloy.Globals.incomplete.indexOf(args) + j] != 'undefined')){
					tempArg = Alloy.Globals.incomplete.indexOf(args) + j;
					tempFlag = 1;
					break;		
				}
			}
			if(tempFlag == 0){
				showAckView();
				return;
			}
			else {
				args = 	Alloy.Globals.incomplete[tempArg];
			}
		}
		else {
			args = args + 1;
		}
		var workoutsWin = Alloy.createController("exercise",args).getView();
   		workoutsWin.open();
   }
}

function showPrevious() {
	args = args - 1;
	var workoutWin = Alloy.createController("exercise",args).getView();
    workoutWin.open();
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
	var openExDetailsWin = Alloy.createController("exDetails",args).getView();
    openExDetailsWin.open();
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
