function Controller() {
    function signupUser() {
        var fname = $.txtFirstName.value;
        var lname = $.txtLastName.value;
        var email_id = $.txtEmail.value;
        var pass = $.txtPassword.value;
        if ("" == fname) {
            alert("Enter First Name");
            return;
        }
        if ("" == lname) {
            alert("Enter Last Name");
            return;
        }
        if ("" == email_id) {
            alert("Enter Email");
            return;
        }
        if ("" == pass) {
            alert("Enter Password");
            return;
        }
        var isValidEmail = validateEmail(email_id);
        if (false == isValidEmail) {
            alert("Not a valid e-mail address");
            return;
        }
        var loginReq = Titanium.Network.createHTTPClient();
        loginReq.withCredentials = true;
        loginReq.open("POST", "http://localhost:3000/user");
        var user = {
            first_name: fname,
            last_name: lname,
            password: pass,
            password_confirmation: pass,
            email: email_id
        };
        loginReq.send(user);
        loginReq.onload = function() {
            var json = this.responseText;
            var response = JSON.parse(json);
            if ("succeeded" == response.message) {
                var loginRequest = Titanium.Network.createHTTPClient();
                loginRequest.withCredentials = true;
                loginRequest.open("POST", "http://localhost:3000/session");
                var userLogin = {
                    password: $.txtPassword.value,
                    email: $.txtEmail.value
                };
                loginRequest.send(userLogin);
                loginRequest.onload = function() {
                    var json = this.responseText;
                    var response = JSON.parse(json);
                    if ("succeeded" != response.message) alert("Invalid email/password"); else {
                        Alloy.Globals.userId = response.user_id;
                        var workoutsWin = Alloy.createController("dashboard", {}).getView();
                        workoutsWin.open();
                    }
                };
            } else "failed" == response.message ? alert("Username already exists!!!") : alert("Unexpected error. Please try again.");
        };
    }
    function validateEmail(email) {
        var atpos = email.indexOf("@");
        var dotpos = email.lastIndexOf(".");
        return 1 > atpos || atpos + 2 > dotpos || dotpos + 2 >= email.length ? false : true;
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
        backgroundImage: "texture.jpg",
        title: "SwoleTrain"
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
        top: "10",
        font: {
            fontsize: 18,
            fontWeight: "bold"
        },
        text: "Ready to get swole? Give us some info.",
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
        hintText: "Email",
        autocapitalization: "false"
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
    $.__views.view4 = Ti.UI.createView({
        id: "view4",
        height: "SIZE",
        top: "20",
        layout: "vertical"
    });
    $.__views.mainView.add($.__views.view4);
    $.__views.btnSubmit = Ti.UI.createButton({
        width: "150dp",
        height: "35dp",
        backgroundColor: "#3B74F5",
        color: "white",
        id: "btnSubmit",
        verticalAlign: "center",
        title: "Get Swole"
    });
    $.__views.view4.add($.__views.btnSubmit);
    signupUser ? $.__views.btnSubmit.addEventListener("click", signupUser) : __defers["$.__views.btnSubmit!click!signupUser"] = true;
    $.__views.__alloyId44 = Ti.UI.createImageView({
        image: "SwoleTrainLogo.png",
        top: "5",
        width: "50%",
        height: "55%",
        id: "__alloyId44"
    });
    $.__views.view4.add($.__views.__alloyId44);
    $.__views.navGroupWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.signupWin,
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
    $.signupWin.setLeftNavButton(bkBtn);
    bkBtn.addEventListener("click", function() {
        var workoutsWin = Alloy.createController("index", {}).getView();
        workoutsWin.open();
    });
    $.navGroupWin.open();
    __defers["$.__views.btnSubmit!click!signupUser"] && $.__views.btnSubmit.addEventListener("click", signupUser);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;