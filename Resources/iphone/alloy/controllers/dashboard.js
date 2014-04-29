function Controller() {
    function showWorkout() {
        var dashboardWin = Alloy.createController("exercise", {}).getView();
        dashboardWin.open();
    }
    function logout() {
        var dashboardWin = Alloy.createController("login", {}).getView();
        dashboardWin.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "dashboard";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.dashboardWin = Ti.UI.createWindow({
        id: "dashboardWin",
        backgroundImage: "texture.jpg",
        title: "Get ready to be swolled!!!"
    });
    $.__views.scrollviewId = Ti.UI.createScrollView({
        id: "scrollviewId",
        scrollingEnabled: "true",
        showVerticalScrollIndicator: "true"
    });
    $.__views.dashboardWin.add($.__views.scrollviewId);
    $.__views.mainView = Ti.UI.createView({
        id: "mainView",
        layout: "vertical"
    });
    $.__views.scrollviewId.add($.__views.mainView);
    $.__views.btnLogout = Ti.UI.createButton({
        width: 60,
        height: 30,
        borderRadius: 1,
        backgroundColor: "#3B74F5",
        color: "white",
        font: {
            fontFamily: "Arial",
            fontWeight: "bold",
            fontSize: 14
        },
        id: "btnLogout",
        left: "70%",
        top: "10",
        title: "Logout"
    });
    $.__views.mainView.add($.__views.btnLogout);
    logout ? $.__views.btnLogout.addEventListener("click", logout) : __defers["$.__views.btnLogout!click!logout"] = true;
    $.__views.welcomeLabel = Ti.UI.createLabel({
        font: {
            fontSize: 30,
            fontWeight: "bold"
        },
        text: "Welcome!",
        top: "20",
        id: "welcomeLabel"
    });
    $.__views.mainView.add($.__views.welcomeLabel);
    $.__views.btnWorkout = Ti.UI.createButton({
        width: 200,
        height: 30,
        borderRadius: 1,
        backgroundColor: "#3B74F5",
        color: "white",
        font: {
            fontFamily: "Arial",
            fontWeight: "bold",
            fontSize: 14
        },
        id: "btnWorkout",
        top: "40",
        title: "Start a new workout"
    });
    $.__views.mainView.add($.__views.btnWorkout);
    showWorkout ? $.__views.btnWorkout.addEventListener("click", showWorkout) : __defers["$.__views.btnWorkout!click!showWorkout"] = true;
    $.__views.dashBoardNavWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.dashboardWin,
        id: "dashBoardNavWin"
    });
    $.__views.dashBoardNavWin && $.addTopLevelView($.__views.dashBoardNavWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.btnLogout!click!logout"] && $.__views.btnLogout.addEventListener("click", logout);
    __defers["$.__views.btnWorkout!click!showWorkout"] && $.__views.btnWorkout.addEventListener("click", showWorkout);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;