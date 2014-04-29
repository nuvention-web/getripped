var bkBtn = Titanium.UI.createButton({
height: 25,
font:{size:9, fontWeight:'bold'},
width: 50,
backgroundImage: 'back.png',
});
$.exDetailsWin.setLeftNavButton(bkBtn);
//$.loginWin.setTitleAttributes(color:'blue',font: {fontFamily:'Snell Roundhand', fontSize:36},shadow:{color:'gray', offset:{width:1,height:1}});

bkBtn.addEventListener("click", function(e){
		 var workoutsWin = Alloy.createController("exercise",{}).getView();
    if (OS_IOS) {
        $.navGroupWin.openWindow(workoutsWin);
    }
    if (OS_ANDROID) {
        workouts.open();
    }
	});
	
var count = Alloy.Globals.exCount + 1;
var imageName = count + ".JPG";
var exName = Alloy.Globals.eName[Alloy.Globals.exCount];
var exDesc = Alloy.Globals.eDescription[Alloy.Globals.exCount];
$.eName.text = exName;
$.exImage.image = imageName;
$.exDescription.text = "Instructions: " + exDesc;
//alert(exDesc);
