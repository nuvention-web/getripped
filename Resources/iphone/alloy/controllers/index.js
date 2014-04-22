function Controller() {
    function showWorkout() {
        var workoutsWin = Alloy.createController("exercise", {}).getView();
        $.navGroupWin.openWindow(workoutsWin);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId1 = Ti.UI.createWindow({
        backgroundColor: "#bcbcbc",
        title: "Swole Trainer",
        id: "__alloyId1"
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
        hintText: "Username"
    });
    $.__views.__alloyId1.add($.__views.txtUsername);
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
        passwordMask: "true",
        hintText: "Password"
    });
    $.__views.__alloyId1.add($.__views.txtPassword);
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
        title: "Login"
    });
    $.__views.__alloyId1.add($.__views.btnSubmit);
    showWorkout ? $.__views.btnSubmit.addEventListener("click", showWorkout) : __defers["$.__views.btnSubmit!click!showWorkout"] = true;
    $.__views.navGroupWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.__alloyId1,
        id: "navGroupWin"
    });
    $.__views.navGroupWin && $.addTopLevelView($.__views.navGroupWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.navGroupWin.open();
    __defers["$.__views.btnSubmit!click!showWorkout"] && $.__views.btnSubmit.addEventListener("click", showWorkout);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;