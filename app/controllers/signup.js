var bkBtn = Titanium.UI.createButton({
backgroundImage: 'back.png',
});
$.signupWin.setLeftNavButton(bkBtn);

bkBtn.addEventListener("click", function(e){
		 var workoutsWin = Alloy.createController("index",{}).getView();
    if (OS_IOS) {
        $.navGroupWin.openWindow(workoutsWin);
    }
    if (OS_ANDROID) {
        workouts.open();
    }
	});

function signupUser(){

	var fname = $.txtFirstName.value;
	var lname = $.txtLastName.value;
	var email_id = $.txtEmail.value;
	var pass = $.txtPassword.value;
	var loginReq = Titanium.Network.createHTTPClient();	
        loginReq.withCredentials = true;	
        loginReq.open("POST","http://getripped.herokuapp.com/user");
        var user = { 
        	first_name: fname,
        	last_name: lname,     	 		
            password: pass,
            email: email_id
         };
         alert(user);
        loginReq.send(user);
        
     loginReq.onload = function()
	{
    	var json = this.responseText;
    	var response = JSON.parse(json);
    	alert(response.message);
	}; 
	
	
    var workoutsWin = Alloy.createController("exercise",{}).getView();
    if (OS_IOS) {
        $.navGroupWin.openWindow(workoutsWin);
    }
    if (OS_ANDROID) {
        workouts.open();
    }
}

function openLogin() {
	var loginWin = Alloy.createController("login",{}).getView();
    if (OS_IOS) {
        $.navGroupWin.openWindow(loginWin);
    }
    if (OS_ANDROID) {
        loginWin.open();
    }
}

if(OS_IOS) { 
   $.navGroupWin.open();
} 
if (OS_ANDROID) { 
   $.index.open(); 
}