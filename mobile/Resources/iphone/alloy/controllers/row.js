function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "row";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.__alloyId30 = Ti.UI.createView({
        layout: "horizontal",
        height: "30",
        id: "__alloyId30"
    });
    $.__views.row.add($.__views.__alloyId30);
    $.__views.exNum = Ti.UI.createLabel({
        id: "exNum",
        left: "10"
    });
    $.__views.__alloyId30.add($.__views.exNum);
    $.__views.name = Ti.UI.createLabel({
        id: "name",
        left: "20",
        width: "80%"
    });
    $.__views.__alloyId30.add($.__views.name);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.exNum.text = args.exNum;
    $.name.text = args.name;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;