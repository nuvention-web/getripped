var bkBtn = Titanium.UI.createButton({
height: 25,
font:{size:9, fontWeight:'bold'},
width: 50,
backgroundImage: 'back.png',
});
$.loginWin.setLeftNavButton(bkBtn);
//$.loginWin.setTitleAttributes(color:'blue',font: {fontFamily:'Snell Roundhand', fontSize:36},shadow:{color:'gray', offset:{width:1,height:1}});

bkBtn.addEventListener("click", function(e){
		 var workoutsWin = Alloy.createController("index",{}).getView();
         workoutsWin.open();
	});


$.loginWin.addEventListener('click', function(e){
    Titanium.App.Alloy.Globals.analytics.trackPageview('login'); // here 'all-listings/list-view' page url, you can use your custom url
});

$.btnSubmit.addEventListener('click', function (e) {
    Titanium.App.Alloy.Globals.analytics.trackEvent('Button','testing','Login','');
    //win.close();
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
        loginReq.open("POST","http://getripped.herokuapp.com/session");
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