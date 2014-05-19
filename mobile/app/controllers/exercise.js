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
	$.workoutTitle.text = "Upper Body workout " + exNum + " of " + Alloy.Globals.workouts.length;
	$.txtWeight.keyboardType = Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION;
	$.txtSet1.keyboardType = Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION;
	$.txtSet2.keyboardType = Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION;
	$.txtSet3.keyboardType = Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION;
	
	if(exNum == 1){
		$.exWin.setLeftNavButton(bkBtn);
	}
	if(Alloy.Globals.workouts[args].name == "1 mile run on treadmill" || Alloy.Globals.workouts[args].name == "Chinup"){
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
	var flag;
	var exid;
	if(exNum == Alloy.Globals.workouts.length) {
		showAckView();
		flag=1;
	}
	else {
		if(flag==1)
		{
			exid = Alloy.Globals.workouts[Alloy.Globals.incomplete(args)].id;
			
		}
		else 
		{
			exId = Alloy.Globals.workouts[args].id;
		}
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
	if(set1Text=="" && set2Text=="" && set3Text=="") {
		alert("Enter reps completed for Set 1");
		return;
	}
	
	var rep1Input = -1;
	var rep2Input = -1;
	var rep3Input = -1;
	rep1Input  = isNumber(set1Text);
	if(set2Text != ""){
		rep2Input = isNumber(set2Text);
	}
	if(set3Text != ""){
		rep3Input = isNumber(set3Text);
	}
	
	if((set2Text == "" || set3Text == "") && (Alloy.Globals.incomplete.indexOf(args)==-1)) {
		Alloy.Globals.incomplete.push(args);
	}
	
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
        exAttempt.open("POST","http://localhost:3000/exercise/"+exId+"/attempt");
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
	if(Alloy.Globals.incomplete.indexOf(args) != -1){
		Alloy.Globals.incomplete.splice(args,1);
	}
	args = args + 1;
	var workoutsWin = Alloy.createController("exercise",args).getView();
    workoutsWin.open();
   }
}

function skipExercise() {
	if(Alloy.Globals.incomplete.indexOf(args) == -1){
		Alloy.Globals.incomplete.push(args);
	}
	if(exNum == Alloy.Globals.workouts.length) {
		showAckView();
	}
	else {	
		args = args + 1;
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
