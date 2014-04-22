function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Workouts";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.Workouts = Ti.UI.createWindow({
        id: "Workouts"
    });
    $.__views.Workouts && $.addTopLevelView($.__views.Workouts);
    $.__views.__alloyId0 = Ti.UI.createView({
        id: "__alloyId0"
    });
    $.__views.Workouts.add($.__views.__alloyId0);
    $.__views.workoutsTable = Ti.UI.createTableView({
        title: "Workouts",
        top: 0,
        height: Ti.UI.FILL,
        backgroundColor: "grey",
        id: "workoutsTable"
    });
    $.__views.__alloyId0.add($.__views.workoutsTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var workoutTitles = [];
    workoutTitles = Alloy.Globals.eName;
    var data = [];
    for (var i = 0; workoutTitles.length > i; i++) data.push(Alloy.createController("row", {
        name: workoutTitles[i]
    }).getView());
    $.workoutsTable.setData(data);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;