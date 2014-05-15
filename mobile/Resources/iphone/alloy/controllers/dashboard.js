function Controller() {
    function showUpperBodyWorkout() {
        var arg = 1;
        var dashboardWin = Alloy.createController("exercise", arg).getView();
        dashboardWin.open();
    }
    function showLowerBodyWorkout() {
        var arg = 2;
        var dashboardWin = Alloy.createController("exercise", arg).getView();
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
        title: "SwoleTrain"
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
    $.__views.__alloyId6 = Ti.UI.createLabel({
        text: "SwoleTrain is ready to help you",
        top: "20",
        id: "__alloyId6"
    });
    $.__views.mainView.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        text: "get swole.",
        id: "__alloyId7"
    });
    $.__views.mainView.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        text: "Just enter what you can do",
        id: "__alloyId8"
    });
    $.__views.mainView.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        text: "for each exercise.",
        id: "__alloyId9"
    });
    $.__views.mainView.add($.__views.__alloyId9);
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
        top: "20",
        title: "Upper Body"
    });
    $.__views.mainView.add($.__views.btnWorkout);
    showUpperBodyWorkout ? $.__views.btnWorkout.addEventListener("click", showUpperBodyWorkout) : __defers["$.__views.btnWorkout!click!showUpperBodyWorkout"] = true;
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
        top: "10",
        title: "Lower Body & Core"
    });
    $.__views.mainView.add($.__views.btnWorkout);
    showLowerBodyWorkout ? $.__views.btnWorkout.addEventListener("click", showLowerBodyWorkout) : __defers["$.__views.btnWorkout!click!showLowerBodyWorkout"] = true;
    $.__views.__alloyId10 = Ti.UI.createImageView({
        image: "SwoleTrainLogo.png",
        top: "10",
        width: "40%",
        height: "30%",
        id: "__alloyId10"
    });
    $.__views.mainView.add($.__views.__alloyId10);
    $.__views.dashBoardNavWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.dashboardWin,
        id: "dashBoardNavWin"
    });
    $.__views.dashBoardNavWin && $.addTopLevelView($.__views.dashBoardNavWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.btnWorkout!click!showUpperBodyWorkout"] && $.__views.btnWorkout.addEventListener("click", showUpperBodyWorkout);
    __defers["$.__views.btnWorkout!click!showLowerBodyWorkout"] && $.__views.btnWorkout.addEventListener("click", showLowerBodyWorkout);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;