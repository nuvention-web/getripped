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
        loginReq.open("POST","http://getripped.herokuapp.com/user");
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
    	alert(response.message);
    	if(response.message == "succeeded") {
    		alert("yes");
    	}
	}; 
	
	
    var workoutsWin = Alloy.createController("dashboard",{}).getView();
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