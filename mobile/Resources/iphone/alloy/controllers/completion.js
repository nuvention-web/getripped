function Controller() {
    function showDashboard() {
        var isEmpty = true;
        for (var i = 0; Alloy.Globals.incomplete.length > i; i++) if (null != Alloy.Globals.incomplete[i]) {
            isEmpty = false;
            break;
        }
        if (true != isEmpty) {
            alert("Please complete all the exercises");
            return;
        }
        alert("Great Job!!!");
        var dashboardWin = Alloy.createController("dashboard", {}).getView();
        dashboardWin.open();
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
        title: "You are so Swole!"
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
    $.__views.workoutsTable = Ti.UI.createTableView({
        id: "workoutsTable",
        height: "SIZE",
        backgroundColor: "transparent"
    });
    $.__views.mainView.add($.__views.workoutsTable);
    $.__views.__alloyId2 = Ti.UI.createView({
        layout: "horizontal",
        top: "10",
        height: "SIZE",
        id: "__alloyId2"
    });
    $.__views.mainView.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        color: "green",
        left: "10",
        text: "Completed Exercises",
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createView({
        layout: "horizontal",
        top: "10",
        height: "SIZE",
        id: "__alloyId4"
    });
    $.__views.mainView.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        color: "red",
        left: "10",
        text: "Incomplete Exercises",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
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
        top: "10",
        title: "Submit Workout"
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
    var workoutTitles = [];
    workoutTitles = Alloy.Globals.workouts.name;
    var data = [];
    for (var i = 0; Alloy.Globals.workouts.length > i; i++) data.push(Alloy.createController("completedTable", {
        exNum: i + 1 + ". ",
        name: Alloy.Globals.workouts[i].name
    }).getView());
    $.workoutsTable.setData(data);
    __defers["$.__views.btnDashboard!click!showDashboard"] && $.__views.btnDashboard.addEventListener("click", showDashboard);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;