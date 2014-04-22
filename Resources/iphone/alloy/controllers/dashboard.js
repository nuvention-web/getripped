function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "dashboard";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.exWin = Ti.UI.createWindow({
        title: "Trainer",
        fullScreen: false,
        exitOnClose: true,
        navBarHidden: true,
        tabBarHidden: true,
        font: {
            fontsize: "32dp",
            fontWeight: "bold"
        },
        id: "exWin",
        backgroundColor: "#bcbcbc"
    });
    $.__views.viewId = Ti.UI.createView({
        id: "viewId"
    });
    $.__views.exWin.add($.__views.viewId);
    $.__views.workoutTitle = Ti.UI.createLabel({
        text: "Dashboard",
        id: "workoutTitle",
        top: "10"
    });
    $.__views.viewId.add($.__views.workoutTitle);
    $.__views.eName = Ti.UI.createLabel({
        text: "Under Construction!",
        id: "eName",
        top: "30"
    });
    $.__views.viewId.add($.__views.eName);
    $.__views.dashBoardNavWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.exWin,
        id: "dashBoardNavWin"
    });
    $.__views.dashBoardNavWin && $.addTopLevelView($.__views.dashBoardNavWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;