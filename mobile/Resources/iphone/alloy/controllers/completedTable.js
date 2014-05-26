function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "completedTable";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.__alloyId1 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        id: "__alloyId1"
    });
    $.__views.row.add($.__views.__alloyId1);
    $.__views.exNum = Ti.UI.createLabel({
        id: "exNum",
        left: "10"
    });
    $.__views.__alloyId1.add($.__views.exNum);
    $.__views.name = Ti.UI.createLabel({
        id: "name",
        left: "20",
        width: "80%"
    });
    $.__views.__alloyId1.add($.__views.name);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0];
    if (-1 == Alloy.Globals.incomplete.indexOf(args.exNum - 1)) $.row.backgroundColor = "green"; else {
        $.row.backgroundColor = "red";
        $.row.addEventListener("click", function() {
            var exWin = Alloy.createController("exercise", args.exNum - 1).getView();
            exWin.open();
        });
    }
    $.exNum.text = args.exNum;
    $.name.text = args.name;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;