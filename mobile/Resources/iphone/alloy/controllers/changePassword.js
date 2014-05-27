function Controller() {
    function changePassword() {
        var pass = $.newPassword.value;
        var confirmPass = $.confirmPassword.value;
        if (pass != confirmPass) {
            alert("Passwords do not match");
            return;
        }
        var changeReq = Titanium.Network.createHTTPClient();
        changeReq.open("POST", "http://localhost:3000/user/changePassword/" + Alloy.Globals.userId);
        var user = {
            password: pass,
            password_confirmation: pass
        };
        changeReq.send(user);
        changeReq.onload = function() {
            var json = this.responseText;
            var response = JSON.parse(json);
            if ("succeeded" != response.message) {
                alert("Unknown error occured. Please try again.");
                return;
            }
            alert("Password changed successfully");
            var dashboardWin = Alloy.createController("dashboard", {}).getView();
            dashboardWin.open();
        };
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "changePassword";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.changePasswordWin = Ti.UI.createWindow({
        id: "changePasswordWin",
        backgroundColor: "#F1F1F1",
        title: "SwoleTrain"
    });
    $.__views.mainView = Ti.UI.createScrollView({
        id: "mainView",
        layout: "vertical",
        scrollingEnabled: "true",
        showVerticalScrollIndicator: "true"
    });
    $.__views.changePasswordWin.add($.__views.mainView);
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
        text: "Change Password",
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
    $.__views.newPassword = Ti.UI.createTextField({
        color: "#336699",
        left: 10,
        width: 300,
        height: 40,
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_DEFAULT,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "newPassword",
        top: "10",
        passwordMask: "true",
        hintText: "Enter New Password"
    });
    $.__views.middleView.add($.__views.newPassword);
    $.__views.confirmPassword = Ti.UI.createTextField({
        color: "#336699",
        left: 10,
        width: 300,
        height: 40,
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_DEFAULT,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "confirmPassword",
        top: "10",
        bottom: "30",
        passwordMask: "true",
        hintText: "Re-enter New Password"
    });
    $.__views.middleView.add($.__views.confirmPassword);
    $.__views.bottomView = Ti.UI.createView({
        id: "bottomView",
        layout: "vertical",
        top: "30",
        backgroundColor: "#F1F1F1"
    });
    $.__views.view1.add($.__views.bottomView);
    $.__views.btnSubmit = Ti.UI.createButton({
        top: "20",
        width: 200,
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
        title: "Change Password"
    });
    $.__views.bottomView.add($.__views.btnSubmit);
    changePassword ? $.__views.btnSubmit.addEventListener("click", changePassword) : __defers["$.__views.btnSubmit!click!changePassword"] = true;
    $.__views.navGroupWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.changePasswordWin,
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
    $.changePasswordWin.setLeftNavButton(bkBtn);
    bkBtn.addEventListener("click", function() {
        var dashboardWin = Alloy.createController("dashboard", {}).getView();
        dashboardWin.open();
    });
    __defers["$.__views.btnSubmit!click!changePassword"] && $.__views.btnSubmit.addEventListener("click", changePassword);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;