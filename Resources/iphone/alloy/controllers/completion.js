function Controller() {
    function showDashboard() {
        alert("yaay");
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
        id: "exWin",
        backgroundColor: "#bcbcbc"
    });
    $.__views.viewId = Ti.UI.createView({
        id: "viewId"
    });
    $.__views.exWin.add($.__views.viewId);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        text: "Congratulations!",
        top: "40",
        font: "30",
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
        top: "70",
        id: "__alloyId3"
    });
    $.__views.viewId.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        text: "Two things left to do:",
        top: "90",
        left: "30",
        id: "__alloyId4"
    });
    $.__views.viewId.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        text: "1. Run 1 Mile",
        top: "110",
        left: "30",
        id: "__alloyId5"
    });
    $.__views.viewId.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        text: "2. Stretch",
        top: "130",
        left: "30",
        id: "__alloyId6"
    });
    $.__views.viewId.add($.__views.__alloyId6);
    $.__views.btnDashboard = Ti.UI.createButton({
        id: "btnDashboard",
        bottom: "30",
        title: "Go to Dashboard"
    });
    $.__views.viewId.add($.__views.btnDashboard);
    showDashboard ? $.__views.btnDashboard.addEventListener("click", showDashboard) : __defers["$.__views.btnDashboard!click!showDashboard"] = true;
    $.__views.compNavWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.exWin,
        id: "compNavWin"
    });
    $.__views.compNavWin && $.addTopLevelView($.__views.compNavWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.btnDashboard!click!showDashboard"] && $.__views.btnDashboard.addEventListener("click", showDashboard);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;