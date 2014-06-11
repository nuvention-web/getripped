function Controller() {
    function startWorkout() {
        if ("Upper Body" == args) {
            Ti.App.Analytics.trackEvent("StartUpperBody", "UpperBody", "Upper Body", "");
            Alloy.Globals.startWorkout("Upper Body");
        } else {
            Ti.App.Analytics.trackEvent("StartLowerBody", "LowerBody", "Lower Body", "");
            Alloy.Globals.startWorkout("Lower Body");
        }
    }
    function alertMsg() {
        alert("Please click Start Workout");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Workouts";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.workoutWinId = Ti.UI.createWindow({
        title: "SwoleTrain",
        fullScreen: false,
        exitOnClose: true,
        tabBarHidden: true,
        font: {
            fontsize: "32dp",
            fontWeight: "bold"
        },
        id: "workoutWinId",
        height: "100%",
        backgroundColor: "#F1F1F1"
    });
    $.__views.__alloyId0 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId0"
    });
    $.__views.workoutWinId.add($.__views.__alloyId0);
    $.__views.topView = Ti.UI.createView({
        layout: "vertical",
        height: "SIZE",
        backgroundColor: "#3B74F5",
        id: "topView"
    });
    $.__views.__alloyId0.add($.__views.topView);
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: "SIZE",
        color: "#F6F6F6",
        bottom: "10",
        top: "10",
        text: "Exercises to make you Swole today",
        id: "label"
    });
    $.__views.topView.add($.__views.label);
    $.__views.view1 = Ti.UI.createView({
        layout: "vertical",
        height: "SIZE",
        top: "20",
        bottom: "20",
        id: "view1"
    });
    $.__views.__alloyId0.add($.__views.view1);
    $.__views.workoutsTable = Ti.UI.createTableView({
        height: "SIZE",
        backgroundColor: "transparent",
        id: "workoutsTable"
    });
    $.__views.view1.add($.__views.workoutsTable);
    alertMsg ? $.__views.workoutsTable.addEventListener("click", alertMsg) : __defers["$.__views.workoutsTable!click!alertMsg"] = true;
    $.__views.bottomView = Ti.UI.createView({
        id: "bottomView",
        layout: "vertical",
        backgroundColor: "#2B2B2B"
    });
    $.__views.__alloyId0.add($.__views.bottomView);
    $.__views.startWorkout = Ti.UI.createButton({
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
        id: "startWorkout",
        title: "Start Workout",
        top: "20"
    });
    $.__views.bottomView.add($.__views.startWorkout);
    startWorkout ? $.__views.startWorkout.addEventListener("click", startWorkout) : __defers["$.__views.startWorkout!click!startWorkout"] = true;
    $.__views.exNavWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.workoutWinId,
        id: "exNavWin"
    });
    $.__views.exNavWin && $.addTopLevelView($.__views.exNavWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0];
    var bkBtn = Titanium.UI.createButton({
        height: 25,
        font: {
            size: 9,
            fontWeight: "bold"
        },
        width: 60,
        backgroundColor: "transparent",
        backgroundImage: "backBtn.png"
    });
    bkBtn.addEventListener("click", function() {
        var workoutsWin = Alloy.createController("dashboard", {}).getView();
        workoutsWin.open();
    });
    $.workoutWinId.setLeftNavButton(bkBtn);
    var workoutTitles = [];
    workoutTitles = Alloy.Globals.workouts.name;
    var data = [];
    for (var i = 0; Alloy.Globals.workouts.length > i; i++) data.push(Alloy.createController("row", {
        exNum: i + 1 + ". ",
        name: Alloy.Globals.workouts[i].name
    }).getView());
    $.workoutsTable.setData(data);
    __defers["$.__views.workoutsTable!click!alertMsg"] && $.__views.workoutsTable.addEventListener("click", alertMsg);
    __defers["$.__views.startWorkout!click!startWorkout"] && $.__views.startWorkout.addEventListener("click", startWorkout);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;