var args = arguments[0];
//alert(args + " " + Alloy.Globals.incomplete.indexOf(args.exNum - 1));
if(Alloy.Globals.incomplete.indexOf(args.exNum - 1) == -1){
	$.exImg.image = "tick.png";
}
else {
	$.exImg.image = "cross.png";
	$.row.addEventListener("click", function(e){
		var exWin = Alloy.createController("exercise",args.exNum - 1).getView();
    	exWin.open();
	});
}
$.name.text = args.name;