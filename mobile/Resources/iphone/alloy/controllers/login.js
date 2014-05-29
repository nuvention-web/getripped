function Controller() {
    function showWorkout() {
        var pass = $.txtPassword.value;
        var uname = $.txtUsername.value;
        if ("" == uname) {
            alert("Enter Email");
            return;
        }
        if ("" == pass) {
            alert("Enter Password");
            return;
        }
        var loginReq = Titanium.Network.createHTTPClient();
        loginReq.withCredentials = true;
        loginReq.open("POST", "http://swoletrain.herokuapp.com/session");
        var user = {
            password: pass,
            email: uname
        };
        loginReq.send(user);
        loginReq.onload = function() {
            var json = this.responseText;
            var response = JSON.parse(json);
            if ("succeeded" != response.message) alert("Invalid email/password"); else {
                Alloy.Globals.userId = response.user_id;
                var workoutsWin = Alloy.createController("dashboard", {}).getView();
                workoutsWin.open();
            }
        };
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.loginWin = Ti.UI.createWindow({
        id: "loginWin",
        backgroundColor: "#F1F1F1",
        title: "SwoleTrain"
    });
    $.__views.mainView = Ti.UI.createScrollView({
        id: "mainView",
        layout: "vertical",
        scrollingEnabled: "true",
        showVerticalScrollIndicator: "true"
    });
    $.__views.loginWin.add($.__views.mainView);
    $.__views.view1 = Ti.UI.createView({
        id: "view1",
        layout: "vertical",
        top: "20%"
    });
    $.__views.mainView.add($.__views.view1);
    $.__views.topView = Ti.UI.createView({
        id: "topView",
        layout: "vertical",
        height: "SIZE",
        backgroundColor: "#DE1B1B",
        borderWidth: "2",
        borderColor: "#F6F6F6"
    });
    $.__views.view1.add($.__views.topView);
    $.__views.loginLabel = Ti.UI.createLabel({
        font: {
            fontSize: 20,
            fontWeight: "bold"
        },
        color: "#F6F6F6",
        text: "Sign in to continue",
        id: "loginLabel",
        top: "10",
        bottom: "10",
        height: "SIZE"
    });
    $.__views.topView.add($.__views.loginLabel);
    $.__views.middleView = Ti.UI.createView({
        id: "middleView",
        layout: "vertical",
        height: "SIZE",
        backgroundColor: "#2B2B2B",
        borderWidth: "2",
        borderColor: "#F6F6F6"
    });
    $.__views.view1.add($.__views.middleView);
    $.__views.txtUsername = Ti.UI.createTextField({
        color: "#336699",
        left: 10,
        width: 300,
        height: 40,
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_DEFAULT,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "txtUsername",
        top: "30",
        hintText: "Email",
        autocapitalization: "false",
        value: "lee@gmail.com"
    });
    $.__views.middleView.add($.__views.txtUsername);
    $.__views.txtPassword = Ti.UI.createTextField({
        color: "#336699",
        left: 10,
        width: 300,
        height: 40,
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_DEFAULT,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "txtPassword",
        top: "10",
        bottom: "30",
        passwordMask: "true",
        hintText: "Password",
        value: "1234"
    });
    $.__views.middleView.add($.__views.txtPassword);
    $.__views.bottomView = Ti.UI.createView({
        id: "bottomView",
        layout: "vertical",
        top: "30",
        backgroundColor: "#F1F1F1"
    });
    $.__views.view1.add($.__views.bottomView);
    $.__views.btnSubmit = Ti.UI.createButton({
        top: "20",
        width: 90,
        height: 35,
        borderRadius: 1,
        backgroundColor: "#3B74F5",
        color: "white",
        font: {
            fontFamily: "Arial",
            fontWeight: "bold",
            fontSize: 14
        },
        id: "btnSubmit",
        title: "Login"
    });
    $.__views.bottomView.add($.__views.btnSubmit);
    showWorkout ? $.__views.btnSubmit.addEventListener("click", showWorkout) : __defers["$.__views.btnSubmit!click!showWorkout"] = true;
    $.__views.navGroupWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.loginWin,
        id: "navGroupWin"
    });
    $.__views.navGroupWin && $.addTopLevelView($.__views.navGroupWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var bkBtn = Titanium.UI.createButton({
        height: 25,
        font: {
            size: 9,
            fontWeight: "bold"
        },
        width: 50,
        backgroundImage: "back.png"
    });
    $.loginWin.setLeftNavButton(bkBtn);
    bkBtn.addEventListener("click", function() {
        var workoutsWin = Alloy.createController("index", {}).getView();
        workoutsWin.open();
    });
    $.navGroupWin.open();
    __defers["$.__views.btnSubmit!click!showWorkout"] && $.__views.btnSubmit.addEventListener("click", showWorkout);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;