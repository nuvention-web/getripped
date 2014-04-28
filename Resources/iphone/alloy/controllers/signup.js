function Controller() {
    function signupUser() {
        var fname = $.txtFirstName.value;
        var lname = $.txtLastName.value;
        var email_id = $.txtEmail.value;
        var pass = $.txtPassword.value;
        var loginReq = Titanium.Network.createHTTPClient();
        loginReq.withCredentials = true;
        loginReq.open("POST", "http://getripped.herokuapp.com/user");
        var user = {
            first_name: fname,
            last_name: lname,
            password: pass,
            password_confirmation: pass,
            email: email_id
        };
        alert(user);
        loginReq.send(user);
        loginReq.onload = function() {
            var json = this.responseText;
            var response = JSON.parse(json);
            alert(response.message);
        };
        var workoutsWin = Alloy.createController("exercise", {}).getView();
        $.navGroupWin.openWindow(workoutsWin);
    }
    function openLogin() {
        var loginWin = Alloy.createController("login", {}).getView();
        $.navGroupWin.openWindow(loginWin);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "signup";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.signupWin = Ti.UI.createWindow({
        id: "signupWin",
        backgroundImage: "texture.jpg"
    });
    $.__views.mainView = Ti.UI.createScrollView({
        id: "mainView",
        layout: "vertical",
        scrollingEnabled: "true",
        showVerticalScrollIndicator: "true"
    });
    $.__views.signupWin.add($.__views.mainView);
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        top: "10dp",
        font: {
            fontsize: 16,
            fontWeight: "bold"
        },
        text: "Ready To Get swole? Give us some info",
        id: "label"
    });
    $.__views.mainView.add($.__views.label);
    $.__views.view1 = Ti.UI.createView({
        id: "view1",
        layout: "vertical",
        height: "SIZE"
    });
    $.__views.mainView.add($.__views.view1);
    $.__views.txtFirstName = Ti.UI.createTextField({
        color: "#336699",
        left: 10,
        width: 300,
        height: 40,
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_DEFAULT,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "txtFirstName",
        top: "10",
        hintText: "First Name"
    });
    $.__views.view1.add($.__views.txtFirstName);
    $.__views.txtLastName = Ti.UI.createTextField({
        color: "#336699",
        left: 10,
        width: 300,
        height: 40,
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_DEFAULT,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "txtLastName",
        top: "10",
        hintText: "Last Name"
    });
    $.__views.view1.add($.__views.txtLastName);
    $.__views.txtEmail = Ti.UI.createTextField({
        color: "#336699",
        left: 10,
        width: 300,
        height: 40,
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_DEFAULT,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "txtEmail",
        top: "10",
        hintText: "Email"
    });
    $.__views.view1.add($.__views.txtEmail);
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
        passwordMask: "true",
        hintText: "Password"
    });
    $.__views.view1.add($.__views.txtPassword);
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        layout: "horizontal",
        height: "SIZE",
        top: "10"
    });
    $.__views.mainView.add($.__views.view2);
    $.__views.txtAge = Ti.UI.createTextField({
        width: "120dp",
        height: "35dp",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        backgroundColor: "white",
        color: "black",
        id: "txtAge",
        left: "30",
        hintText: "Age"
    });
    $.__views.view2.add($.__views.txtAge);
    $.__views.txtGender = Ti.UI.createTextField({
        width: "120dp",
        height: "35dp",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        backgroundColor: "white",
        color: "black",
        id: "txtGender",
        left: "10",
        hintText: "Gender(M/F)"
    });
    $.__views.view2.add($.__views.txtGender);
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        layout: "horizontal",
        height: "SIZE",
        top: "10"
    });
    $.__views.mainView.add($.__views.view3);
    $.__views.txtHeight = Ti.UI.createTextField({
        width: "120dp",
        height: "35dp",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        backgroundColor: "white",
        color: "black",
        id: "txtHeight",
        left: "30",
        hintText: "Height"
    });
    $.__views.view3.add($.__views.txtHeight);
    $.__views.txtWeight = Ti.UI.createTextField({
        width: "120dp",
        height: "35dp",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        backgroundColor: "white",
        color: "black",
        id: "txtWeight",
        left: "10",
        hintText: "Weight"
    });
    $.__views.view3.add($.__views.txtWeight);
    $.__views.view4 = Ti.UI.createView({
        id: "view4",
        height: "SIZE",
        top: "20"
    });
    $.__views.mainView.add($.__views.view4);
    $.__views.btnSubmit = Ti.UI.createButton({
        width: "150dp",
        height: "35dp",
        backgroundColor: "red",
        color: "white",
        id: "btnSubmit",
        verticalAlign: "center",
        title: "SignUp"
    });
    $.__views.view4.add($.__views.btnSubmit);
    signupUser ? $.__views.btnSubmit.addEventListener("click", signupUser) : __defers["$.__views.btnSubmit!click!signupUser"] = true;
    $.__views.view5 = Ti.UI.createView({
        id: "view5",
        height: "SIZE",
        top: "20"
    });
    $.__views.mainView.add($.__views.view5);
    $.__views.btnUser = Ti.UI.createButton({
        id: "btnUser",
        title: "Already a user? Sign in here."
    });
    $.__views.view5.add($.__views.btnUser);
    openLogin ? $.__views.btnUser.addEventListener("click", openLogin) : __defers["$.__views.btnUser!click!openLogin"] = true;
    $.__views.navGroupWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.signupWin,
        id: "navGroupWin"
    });
    $.__views.navGroupWin && $.addTopLevelView($.__views.navGroupWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var bkBtn = Titanium.UI.createButton({
        backgroundImage: "back.png"
    });
    $.signupWin.setLeftNavButton(bkBtn);
    bkBtn.addEventListener("click", function() {
        var workoutsWin = Alloy.createController("index", {}).getView();
        $.navGroupWin.openWindow(workoutsWin);
    });
    $.navGroupWin.open();
    __defers["$.__views.btnSubmit!click!signupUser"] && $.__views.btnSubmit.addEventListener("click", signupUser);
    __defers["$.__views.btnUser!click!openLogin"] && $.__views.btnUser.addEventListener("click", openLogin);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;