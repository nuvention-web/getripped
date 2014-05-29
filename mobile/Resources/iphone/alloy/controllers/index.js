function Controller() {
    function signupUser() {
        var signUp = Alloy.createController("signup", {}).getView();
        signUp.open();
    }
    function openLogin() {
        var loginWin = Alloy.createController("login", {}).getView();
        loginWin.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.indexWin = Ti.UI.createWindow({
        fullScreen: false,
        exitOnClose: true,
        tabBarHidden: true,
        font: {
            fontSize: "32",
            fontWeight: "bold"
        },
        id: "indexWin",
        backgroundColor: "#F1F1F1",
        title: "SwoleTrain"
    });
    $.__views.__alloyId25 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId25"
    });
    $.__views.indexWin.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createView({
        layout: "vertical",
        height: "SIZE",
        backgroundColor: "#3B74F5",
        borderWidth: "2",
        borderColor: "#F6F6F6",
        id: "__alloyId26"
    });
    $.__views.__alloyId25.add($.__views.__alloyId26);
    $.__views.topText = Ti.UI.createLabel({
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        text: "SwoleTrain helps you lift more",
        id: "topText",
        color: "#F6F6F6",
        top: "10",
        bottom: "10",
        height: "SIZE"
    });
    $.__views.__alloyId26.add($.__views.topText);
    $.__views.__alloyId27 = Ti.UI.createView({
        layout: "vertical",
        height: "60%",
        backgroundColor: "#F6F6F6",
        borderWidth: "2",
        borderColor: "#F6F6F6",
        id: "__alloyId27"
    });
    $.__views.__alloyId25.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createImageView({
        image: "SwoleTrainLogo.png",
        top: "40",
        width: "80%",
        left: "5",
        id: "__alloyId28"
    });
    $.__views.__alloyId27.add($.__views.__alloyId28);
    $.__views.view4 = Ti.UI.createView({
        id: "view4",
        layout: "vertical",
        backgroundColor: "#2B2B2B",
        borderWidth: "2",
        borderColor: "#F6F6F6"
    });
    $.__views.__alloyId25.add($.__views.view4);
    $.__views.btnSubmit = Ti.UI.createButton({
        width: "150dp",
        height: "35dp",
        backgroundColor: "#3B74F5",
        color: "white",
        id: "btnSubmit",
        top: "25",
        verticalAlign: "center",
        title: "Sign Up"
    });
    $.__views.view4.add($.__views.btnSubmit);
    signupUser ? $.__views.btnSubmit.addEventListener("click", signupUser) : __defers["$.__views.btnSubmit!click!signupUser"] = true;
    $.__views.btnUser = Ti.UI.createButton({
        id: "btnUser",
        top: "10",
        title: "Already a user? Sign in here."
    });
    $.__views.view4.add($.__views.btnUser);
    openLogin ? $.__views.btnUser.addEventListener("click", openLogin) : __defers["$.__views.btnUser!click!openLogin"] = true;
    $.__views.navGroupWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.indexWin,
        id: "navGroupWin"
    });
    $.__views.navGroupWin && $.addTopLevelView($.__views.navGroupWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.navGroupWin.open($.indexWin, {
        animated: true
    });
    __defers["$.__views.btnSubmit!click!signupUser"] && $.__views.btnSubmit.addEventListener("click", signupUser);
    __defers["$.__views.btnUser!click!openLogin"] && $.__views.btnUser.addEventListener("click", openLogin);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;