function showWorkout(){
	var loginReq = Titanium.Network.createHTTPClient();
        loginReq.withCredentials = true;	
        loginReq.open("POST","http://getripped.herokuapp.com/session");
        var user = {
            password: "1234",
            email: "pri1229@gmail.com"
         };
         
        loginReq.send(user);
        
     loginReq.onload = function()
	{
    	var json = this.responseText;
    	var response = JSON.parse(json);
    	alert(Titanium.App.sessionId);
	}; 
	
	
    var workoutsWin = Alloy.createController("exercise",{}).getView();
    if (OS_IOS) {
        $.navGroupWin.openWindow(workoutsWin);
    }
    if (OS_ANDROID) {
        workouts.open();
    }
}

if(OS_IOS) { 
   $.navGroupWin.open();
} 
if (OS_ANDROID) { 
   $.index.open(); 
}