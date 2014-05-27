//var args = arguments[0] || {};
var bkBtn = Titanium.UI.createButton({
height: 25,
font:{size:9, fontWeight:'bold'},
width: 50,
backgroundImage: 'back.png',
});
$.changePasswordWin.setLeftNavButton(bkBtn);

bkBtn.addEventListener("click", function(e){
		 var dashboardWin = Alloy.createController("dashboard",{}).getView();
         dashboardWin.open();
	});

function changePassword(){
	
var pass = $.newPassword.value;
var confirmPass = $.confirmPassword.value;

if(pass != confirmPass) {
	alert("Passwords do not match");
	return;
}
var changeReq = Titanium.Network.createHTTPClient();	
        changeReq.open("POST","http://localhost:3000/user/changePassword/" + Alloy.Globals.userId);
        var user = {
            password: pass,
            password_confirmation: pass
         };
         
        changeReq.send(user);
        
     changeReq.onload = function()
	 {
    	var json = this.responseText;
    	var response = JSON.parse(json);
    	if(response.message== "succeeded"){
    		alert("Password changed successfully");
    		var dashboardWin = Alloy.createController("dashboard",{}).getView();
    		dashboardWin.open();
    	}
    	else{
    		alert("Unknown error occured. Please try again.");
    		return;
    	}
	};
}