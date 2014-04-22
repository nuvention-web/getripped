function Controller() {
    function showDashboard() {
        var dashboardWin = Alloy.createController("dashboard", {}).getView();
        $.compNavWin.openWindow(dashboardWin);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "completion";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
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
    $.__views.__alloyId1 = Ti.UI.createLabel({
        text: "Congratulations!",
        top: "20",
        id: "__alloyId1"
    });
    $.__views.viewId.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        text: "You've completed today's",
        top: "60",
        id: "__alloyId2"
    });
    $.__views.viewId.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        text: "weight training",
        top: "80",
        id: "__alloyId3"
    });
    $.__views.viewId.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        text: "Two things left to do:",
        top: "100",
        left: "30",
        id: "__alloyId4"
    });
    $.__views.viewId.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        text: "1. Run 1 Mile",
        top: "120",
        left: "30",
        id: "__alloyId5"
    });
    $.__views.viewId.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        text: "2. Stretch",
        top: "140",
        left: "30",
        id: "__alloyId6"
    });
    $.__views.viewId.add($.__views.__alloyId6);
    $.__views.bnDashboard = Ti.UI.createButton({
        id: "bnDashboard",
        bottom: "50",
        title: "Go to Dashboard"
    });
    $.__views.viewId.add($.__views.bnDashboard);
    showDashboard ? $.__views.bnDashboard.addEventListener("click", showDashboard) : __defers["$.__views.bnDashboard!click!showDashboard"] = true;
    $.__views.compNavWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.exWin,
        id: "compNavWin"
    });
    $.__views.compNavWin && $.addTopLevelView($.__views.compNavWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.bnDashboard!click!showDashboard"] && $.__views.bnDashboard.addEventListener("click", showDashboard);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;