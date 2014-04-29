function Controller() {
    function showDashboard() {
        var dashboardWin = Alloy.createController("dashboard", {}).getView();
        $.compNavWin.openWindow(dashboardWin);
    }
    function logout() {
        var dashboardWin = Alloy.createController("login", {}).getView();
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
        id: "exWin",
        backgroundImage: "texture.jpg",
        title: "You are swolled!!!"
    });
    $.__views.scrollviewId = Ti.UI.createScrollView({
        id: "scrollviewId",
        scrollingEnabled: "true",
        showVerticalScrollIndicator: "true"
    });
    $.__views.exWin.add($.__views.scrollviewId);
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
    $.__views.congratsLabel = Ti.UI.createLabel({
        font: {
            fontSize: 30,
            fontWeight: "bold"
        },
        text: "Congratulations!",
        top: "20",
        id: "congratsLabel"
    });
    $.__views.mainView.add($.__views.congratsLabel);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        text: "You've completed today's",
        top: "20",
        id: "__alloyId1"
    });
    $.__views.mainView.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        text: "weight training",
        id: "__alloyId2"
    });
    $.__views.mainView.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        text: "Two things left to do:",
        top: "20",
        left: "30",
        id: "__alloyId3"
    });
    $.__views.mainView.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        text: "1. Run 1 Mile",
        top: "5",
        left: "30",
        id: "__alloyId4"
    });
    $.__views.mainView.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        text: "2. Stretch",
        left: "30",
        id: "__alloyId5"
    });
    $.__views.mainView.add($.__views.__alloyId5);
    $.__views.btnDashboard = Ti.UI.createButton({
        width: 150,
        height: 30,
        borderRadius: 1,
        backgroundColor: "#3B74F5",
        color: "white",
        font: {
            fontFamily: "Arial",
            fontWeight: "bold",
            fontSize: 14
        },
        id: "btnDashboard",
        top: "20",
        title: "Go to Dashboard"
    });
    $.__views.mainView.add($.__views.btnDashboard);
    showDashboard ? $.__views.btnDashboard.addEventListener("click", showDashboard) : __defers["$.__views.btnDashboard!click!showDashboard"] = true;
    $.__views.compNavWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.exWin,
        id: "compNavWin"
    });
    $.__views.compNavWin && $.addTopLevelView($.__views.compNavWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.btnLogout!click!logout"] && $.__views.btnLogout.addEventListener("click", logout);
    __defers["$.__views.btnDashboard!click!showDashboard"] && $.__views.btnDashboard.addEventListener("click", showDashboard);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;