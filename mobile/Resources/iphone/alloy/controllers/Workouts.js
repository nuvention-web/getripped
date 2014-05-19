function Controller() {
    function showUpperBodyWorkout() {
        var wid = Alloy.Globals.getSomeData("Upper Body");
        getworkout(wid);
    }
    function getworkout(wid) {
        Alloy.Globals.getWorkout(wid, function() {
            var index = 0;
            var dashboardWin = Alloy.createController("exercise", index).getView();
            dashboardWin.open();
        });
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
        backgroundImage: "texture.jpg"
    });
    $.__views.__alloyId0 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId0"
    });
    $.__views.workoutWinId.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        text: "Exercises to make you Swole today",
        bottom: "20",
        top: "5",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.workoutsTable = Ti.UI.createTableView({
        id: "workoutsTable",
        height: "SIZE",
        backgroundColor: "transparent"
    });
    $.__views.__alloyId0.add($.__views.workoutsTable);
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
        title: "Start Upper Body Workout"
    });
    $.__views.__alloyId0.add($.__views.btnWorkout);
    showUpperBodyWorkout ? $.__views.btnWorkout.addEventListener("click", showUpperBodyWorkout) : __defers["$.__views.btnWorkout!click!showUpperBodyWorkout"] = true;
    $.__views.exNavWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.workoutWinId,
        id: "exNavWin"
    });
    $.__views.exNavWin && $.addTopLevelView($.__views.exNavWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var workoutTitles = [];
    workoutTitles = Alloy.Globals.workouts.name;
    var data = [];
    for (var i = 0; Alloy.Globals.workouts.length > i; i++) data.push(Alloy.createController("row", {
        exNum: i + 1 + ". ",
        name: Alloy.Globals.workouts[i].name
    }).getView());
    $.workoutsTable.setData(data);
    __defers["$.__views.btnWorkout!click!showUpperBodyWorkout"] && $.__views.btnWorkout.addEventListener("click", showUpperBodyWorkout);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;