var args = arguments[0];
var bkBtn = Titanium.UI.createButton({
height: 25,
font:{size:9, fontWeight:'bold'},
width: 60,
backgroundImage: 'backBtn.png',
});
$.exDetailsWin.setLeftNavButton(bkBtn);

bkBtn.addEventListener("click", function(e){
		 var workoutsWin = Alloy.createController("exercise",args).getView();
         workoutsWin.open();
	});
	
var count = Alloy.Globals.exCount + 1;
var imageName = count + ".JPG";
var exName = Alloy.Globals.workouts[args].name;
var exDesc = Alloy.Globals.workouts[args].description;
$.eName.text = exName;
$.exImage.image = Alloy.Globals.workouts[args].image;
$.exDescription.text = exDesc;

