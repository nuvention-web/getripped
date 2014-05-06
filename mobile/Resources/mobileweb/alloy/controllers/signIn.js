function Controller() {
    function showWorkout() {
        var pass = $.txtPassword.value;
        var uname = $.txtUsername.value;
        var loginReq = Titanium.Network.createHTTPClient();
        loginReq.withCredentials = true;
        loginReq.open("POST", "http://getripped.herokuapp.com/session");
        var user = {
            password: pass,
            email: uname
        };
        loginReq.send(user);
        loginReq.onload = function() {
            var json = this.responseText;
            var response = JSON.parse(json);
            alert(response.message);
        };
        {
            Alloy.createController("exercise", {}).getView();
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "signIn";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId35 = Ti.UI.createWindow({
        backgroundColor: "#bcbcbc",
        backgroundImage: "gym.jpg",
        title: "Swole Trainer",
        id: "__alloyId35"
    });
    $.__views.txtUsername = Ti.UI.createTextField({
        color: "#336699",
        left: 10,
        width: 300,
        height: 40,
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_DEFAULT,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "txtUsername",
        top: "10",
        opacity: "1",
        hintText: "Username"
    });
    $.__views.__alloyId35.add($.__views.txtUsername);
    $.__views.txtPassword = Ti.UI.createTextField({
        color: "#336699",
        left: 10,
        width: 300,
        height: 40,
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_DEFAULT,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "txtPassword",
        top: "60",
        opacity: "1",
        passwordMask: "true",
        hintText: "Password"
    });
    $.__views.__alloyId35.add($.__views.txtPassword);
    $.__views.btnSubmit = Ti.UI.createButton({
        top: 110,
        width: 90,
        height: 35,
        borderRadius: 1,
        backgroundColor: "blue",
        color: "white",
        font: {
            fontFamily: "Arial",
            fontWeight: "bold",
            fontSize: 14
        },
        id: "btnSubmit",
        title: "Login",
        opacity: "1"
    });
    $.__views.__alloyId35.add($.__views.btnSubmit);
    showWorkout ? $.__views.btnSubmit.addEventListener("click", showWorkout) : __defers["$.__views.btnSubmit!click!showWorkout"] = true;
    $.__views.navGroupWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.__alloyId35,
        id: "navGroupWin"
    });
    $.__views.navGroupWin && $.addTopLevelView($.__views.navGroupWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.btnSubmit!click!showWorkout"] && $.__views.btnSubmit.addEventListener("click", showWorkout);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;