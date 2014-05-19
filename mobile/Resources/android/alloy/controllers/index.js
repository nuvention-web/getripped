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
        id: "indexWin",
        backgroundColor: "white",
        backgroundImage: "texture.jpg"
    });
    $.__views.indexWin && $.addTopLevelView($.__views.indexWin);
    $.__views.__alloyId22 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId22"
    });
    $.__views.indexWin.add($.__views.__alloyId22);
    var __alloyId28 = [];
    $.__views.view1 = Ti.UI.createView({
        id: "view1",
        height: "100%",
        width: "100%"
    });
    __alloyId28.push($.__views.view1);
    $.__views.__alloyId29 = Ti.UI.createImageView({
        image: "img1.png",
        id: "__alloyId29"
    });
    $.__views.view1.add($.__views.__alloyId29);
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        height: "100%",
        width: "100%"
    });
    __alloyId28.push($.__views.view2);
    $.__views.__alloyId30 = Ti.UI.createImageView({
        image: "img2.png",
        id: "__alloyId30"
    });
    $.__views.view2.add($.__views.__alloyId30);
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        height: "100%",
        width: "100%"
    });
    __alloyId28.push($.__views.view3);
    $.__views.__alloyId31 = Ti.UI.createImageView({
        image: "img3.png",
        id: "__alloyId31"
    });
    $.__views.view3.add($.__views.__alloyId31);
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        height: "100%",
        width: "100%"
    });
    __alloyId28.push($.__views.view3);
    $.__views.__alloyId32 = Ti.UI.createImageView({
        image: "img4.png",
        id: "__alloyId32"
    });
    $.__views.view3.add($.__views.__alloyId32);
    $.__views.mainView = Ti.UI.createScrollableView({
        views: __alloyId28,
        id: "mainView",
        height: "70%",
        width: "100%",
        showPagingControl: "true",
        top: "15"
    });
    $.__views.__alloyId22.add($.__views.mainView);
    $.__views.view4 = Ti.UI.createView({
        id: "view4",
        height: "SIZE",
        top: "5"
    });
    $.__views.__alloyId22.add($.__views.view4);
    $.__views.btnSubmit = Ti.UI.createButton({
        width: "150dp",
        height: "35dp",
        backgroundColor: "#3B74F5",
        color: "white",
        id: "btnSubmit",
        verticalAlign: "center",
        title: "Sign Up"
    });
    $.__views.view4.add($.__views.btnSubmit);
    signupUser ? $.__views.btnSubmit.addEventListener("click", signupUser) : __defers["$.__views.btnSubmit!click!signupUser"] = true;
    $.__views.view5 = Ti.UI.createView({
        id: "view5",
        height: "SIZE"
    });
    $.__views.__alloyId22.add($.__views.view5);
    $.__views.btnUser = Ti.UI.createButton({
        id: "btnUser",
        title: "Already a user? Sign in here."
    });
    $.__views.view5.add($.__views.btnUser);
    openLogin ? $.__views.btnUser.addEventListener("click", openLogin) : __defers["$.__views.btnUser!click!openLogin"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.btnSubmit!click!signupUser"] && $.__views.btnSubmit.addEventListener("click", signupUser);
    __defers["$.__views.btnUser!click!openLogin"] && $.__views.btnUser.addEventListener("click", openLogin);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;