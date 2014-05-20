var args = arguments[0];
//alert(args + " " + Alloy.Globals.incomplete.indexOf(args.exNum - 1));
if(Alloy.Globals.incomplete.indexOf(args.exNum - 1) == -1){
	$.row.backgroundColor = "green";
}
else {
	$.row.backgroundColor = "red";
	$.row.addEventListener("click", function(e){
		var exWin = Alloy.createController("exercise",args.exNum - 1).getView();
    	exWin.open();
	});
}
$.exNum.text = args.exNum;
$.name.text = args.name;