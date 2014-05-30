$.navGroupWin.open($.indexWin, {animated : true});


function signupUser(){

    var signUp = Alloy.createController("signup",{}).getView();
    signUp.open();
}

function openLogin() {
	var loginWin = Alloy.createController("login",{}).getView();
	loginWin.open();
}
