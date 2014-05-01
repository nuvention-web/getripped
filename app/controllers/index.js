//alert($.titleLabel.text);
//$.indexWin.setTitle = $.titleLabel.text;

function signupUser(){

    var signUp = Alloy.createController("signup",{}).getView();
    signUp.open();
}

function openLogin() {
	var loginWin = Alloy.createController("login",{}).getView();
	loginWin.open();
    /*if (OS_IOS) {
        $.indexWin.openWindow(loginWin);
    }
    if (OS_ANDROID) {
        loginWin.open();
    }*/
}

if(OS_IOS) { 
   $.indexWin.open();
} 
if (OS_ANDROID) { 
   $.index.open(); 
}