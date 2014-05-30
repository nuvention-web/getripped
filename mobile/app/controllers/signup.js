var bkBtn = Titanium.UI.createButton({
height: 25,
font:{size:9, fontWeight:'bold'},
width: 60,
backgroundImage: 'backBtn.png',
});
$.signupWin.setLeftNavButton(bkBtn);

bkBtn.addEventListener("click", function(e){
		 var workoutsWin = Alloy.createController("index",{}).getView();
         workoutsWin.open();
	});

function signupUser(){

	var fname = $.txtFirstName.value;
	var lname = $.txtLastName.value;
	var email_id = $.txtEmail.value;
	var pass = $.txtPassword.value;
	
	if(fname=="") {
		alert("Enter First Name");
		return;
	}
	if(lname=="") {
		alert("Enter Last Name");
		return;
	}
	if(email_id=="") {
		alert("Enter Email");
		return;
	}
	if(pass=="") {
		alert("Enter Password");
		return;
	}
	var isValidEmail = validateEmail(email_id);
	if(isValidEmail == false){
		alert("Not a valid e-mail address");
		return;
	}
	Ti.App.Analytics.trackEvent('New User','Signup','Sign Up','');
	var loginReq = Titanium.Network.createHTTPClient();	
        loginReq.withCredentials = true;	
        loginReq.open("POST","http://swoletrain.herokuapp.com/user");
        var user = { 
        	first_name: fname,
        	last_name: lname,     	 		
            password: pass,
            password_confirmation: pass,
            email: email_id
         };
        loginReq.send(user);
        
     loginReq.onload = function()
	{
    	var json = this.responseText;
    	var response = JSON.parse(json);
    	//alert(response.message);
    	if(response.message == "succeeded") {
    		var loginRequest = Titanium.Network.createHTTPClient();
        	loginRequest.withCredentials = true;	
        	loginRequest.open("POST","http://swoletrain.herokuapp.com/session");
        	var userLogin = {
            	password: $.txtPassword.value,
            	email: $.txtEmail.value
         	};
         
        	loginRequest.send(userLogin);
        
     		loginRequest.onload = function()
	 		{
	 			$.maskImg.visible = "true";
    			var json = this.responseText;
    			var response = JSON.parse(json);
    			if(response.message!= "succeeded"){
    				alert("Invalid email/password");
    			}
    			else{
    				Alloy.Globals.userId = response.user_id;
    				var workoutsWin = Alloy.createController("dashboard",{}).getView();
    				workoutsWin.open();
    			}
    			$.maskImg.visible = "false";
			};
    	}
    	else if(response.message == "failed"){
    		alert("Username already exists!!!");
    	}
    	else {
    		alert("Unexpected error. Please try again.");
    	}
	}; 
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


function validateEmail(email)
{
var atpos=email.indexOf("@");
var dotpos=email.lastIndexOf(".");
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
  {
  	return false;
  }
 else{
 	return true;
 }
}

if(OS_IOS) { 
   $.navGroupWin.open();
} 
if (OS_ANDROID) { 
   $.index.open(); 
}