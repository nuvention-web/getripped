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
        backgroundColor: "#F6F6F6",
        title: "SwoleTrain"
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
    $.__views.topView = Ti.UI.createView({
        id: "topView",
        layout: "vertical",
        height: "SIZE",
        backgroundColor: "#DE1B1B"
    });
    $.__views.mainView.add($.__views.topView);
    $.__views.topLabel = Ti.UI.createLabel({
        id: "topLabel",
        bottom: "10",
        height: "SIZE",
        color: "#F6F6F6",
        top: "10"
    });
    $.__views.topView.add($.__views.topLabel);
    $.__views.view1 = Ti.UI.createView({
        id: "view1",
        layout: "vertical",
        height: "SIZE",
        top: "20",
        bottom: "20"
    });
    $.__views.mainView.add($.__views.view1);
    $.__views.workoutsTable = Ti.UI.createTableView({
        id: "workoutsTable",
        height: "SIZE",
        backgroundColor: "transparent"
    });
    $.__views.view1.add($.__views.workoutsTable);
    $.__views.bottomView = Ti.UI.createView({
        id: "bottomView",
        layout: "vertical",
        backgroundColor: "#2B2B2B"
    });
    $.__views.mainView.add($.__views.bottomView);
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
    $.__views.bottomView.add($.__views.btnDashboard);
    showDashboard ? $.__views.btnDashboard.addEventListener("click", showDashboard) : __defers["$.__views.btnDashboard!click!showDashboard"] = true;
    $.__views.compNavWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.exWin,
        id: "compNavWin"
    });
    $.__views.compNavWin && $.addTopLevelView($.__views.compNavWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.topLabel.text = "" == Alloy.Globals.incomplete ? "Great Job!!!" : "Please complete all the exercises";
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