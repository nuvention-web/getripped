var bkBtn = Titanium.UI.createButton({
height: 25,
font:{size:9, fontWeight:'bold'},
width: 50,
backgroundImage: 'back.png',
});
$.signupWin.setLeftNavButton(bkBtn);
//$.loginWin.setTitleAttributes(color:'blue',font: {fontFamily:'Snell Roundhand', fontSize:36},shadow:{color:'gray', offset:{width:1,height:1}});

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
	
	
	var loginReq = Titanium.Network.createHTTPClient();	
        loginReq.withCredentials = true;	
        loginReq.open("POST","http://localhost:3000/user");
        var user = { 
        	first_name: fname,
        	last_name: lname,     	 		
            password: pass,
            password_confirmation: pass,
            email: email_id
         };
         //alert(user);
        loginReq.send(user);
        
     loginReq.onload = function()
	{
    	var json = this.responseText;
    	var response = JSON.parse(json);
    	//alert(response.message);
    	if(response.message == "succeeded") {
    		var loginRequest = Titanium.Network.createHTTPClient();
        	loginRequest.withCredentials = true;	
        	loginRequest.open("POST","http://localhost:3000/session");
        	var userLogin = {
            	password: $.txtPassword.value,
            	email: $.txtEmail.value
         	};
         
        	loginRequest.send(userLogin);
        
     		loginRequest.onload = function()
	 		{
    			var json = this.responseText;
    			var response = JSON.parse(json);
    			//alert(response.message);
    			if(response.message!= "succeeded"){
    				alert("Invalid email/password");
    			}
    			else{
    				//alert(response.user_id);
    				Alloy.Globals.userId = response.user_id;
    				var workoutsWin = Alloy.createController("dashboard",{}).getView();
    				workoutsWin.open();
    			}
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

if(OS_IOS) { 
   $.navGroupWin.open();
} 
if (OS_ANDROID) { 
   $.index.open(); 
}