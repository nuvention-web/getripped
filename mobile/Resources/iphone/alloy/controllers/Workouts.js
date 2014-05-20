function Controller() {
    function showUpperBodyWorkout() {
        var wid = Alloy.Globals.getSomeData("Upper Body");
        getworkout(wid);
    }
    function showLowerBodyWorkout() {
        var wid = Alloy.Globals.getSomeData("Lower Body");
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
    $.__views.btnUpperWorkout = Ti.UI.createButton({
        id: "btnUpperWorkout",
        top: "10",
        title: "Start Upper Body Workout",
        visible: "false"
    });
    $.__views.__alloyId0.add($.__views.btnUpperWorkout);
    showUpperBodyWorkout ? $.__views.btnUpperWorkout.addEventListener("click", showUpperBodyWorkout) : __defers["$.__views.btnUpperWorkout!click!showUpperBodyWorkout"] = true;
    $.__views.btnLowerWorkout = Ti.UI.createButton({
        id: "btnLowerWorkout",
        top: "10",
        title: "Start Lower Body Workout",
        visible: "false"
    });
    $.__views.__alloyId0.add($.__views.btnLowerWorkout);
    showLowerBodyWorkout ? $.__views.btnLowerWorkout.addEventListener("click", showLowerBodyWorkout) : __defers["$.__views.btnLowerWorkout!click!showLowerBodyWorkout"] = true;
    $.__views.exNavWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.workoutWinId,
        id: "exNavWin"
    });
    $.__views.exNavWin && $.addTopLevelView($.__views.exNavWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0];
    alert(args);
    var workoutTitles = [];
    workoutTitles = Alloy.Globals.workouts.name;
    var data = [];
    for (var i = 0; Alloy.Globals.workouts.length > i; i++) data.push(Alloy.createController("row", {
        exNum: i + 1 + ". ",
        name: Alloy.Globals.workouts[i].name
    }).getView());
    $.workoutsTable.setData(data);
    "Upper" == args ? $.btnUpperWorkout.visible = true : $.btnLowerWorkout.visible = true;
    __defers["$.__views.btnUpperWorkout!click!showUpperBodyWorkout"] && $.__views.btnUpperWorkout.addEventListener("click", showUpperBodyWorkout);
    __defers["$.__views.btnLowerWorkout!click!showLowerBodyWorkout"] && $.__views.btnLowerWorkout.addEventListener("click", showLowerBodyWorkout);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;