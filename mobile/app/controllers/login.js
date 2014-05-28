var bkBtn = Titanium.UI.createButton({
height: 25,
font:{size:9, fontWeight:'bold'},
width: 60,
backgroundImage: 'backBtn.png',
});
$.loginWin.setLeftNavButton(bkBtn);

bkBtn.addEventListener("click", function(e){
		 var workoutsWin = Alloy.createController("index",{}).getView();
         workoutsWin.open();
	});

function showWorkout(){
	var pass = $.txtPassword.value;
	var uname = $.txtUsername.value;
	if(uname==""){
		alert("Enter Email");
		return;
	}
	if(pass==""){
		alert("Enter Password");
		return;
	}
	var loginReq = Titanium.Network.createHTTPClient();
        loginReq.withCredentials = true;	
        loginReq.open("POST","http://swoletrain.herokuapp.com/session");
        var user = {
            password: pass,
            email: uname
         };
         
        loginReq.send(user);
        
     loginReq.onload = function()
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

if(OS_IOS) { 
   $.navGroupWin.open();
} 
if (OS_ANDROID) { 
   $.index.open(); 
}