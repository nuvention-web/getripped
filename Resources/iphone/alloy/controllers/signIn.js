function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "signIn";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId23 = Ti.UI.createWindow({
        title: "GetRipped",
        backgroundColor: "grey",
        exitOnClose: true,
        font: {
            fontsize: "32dp",
            fontWeight: "bold"
        },
        id: "__alloyId23"
    });
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        top: "10dp",
        font: {
            fontsize: 16,
            fontWeight: "bold"
        },
        text: "Ready To Get Ripped? Give us some info",
        id: "label"
    });
    $.__views.__alloyId23.add($.__views.label);
    $.__views.txtAge = Ti.UI.createTextField({
        width: "150dp",
        height: "35dp",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        backgroundColor: "white",
        color: "black",
        id: "txtAge",
        hintText: "Age",
        top: "80dp"
    });
    $.__views.__alloyId23.add($.__views.txtAge);
    $.__views.txtGender = Ti.UI.createTextField({
        width: "150dp",
        height: "35dp",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        backgroundColor: "white",
        color: "black",
        id: "txtGender",
        hintText: "Gender(M or F)",
        top: "150dp"
    });
    $.__views.__alloyId23.add($.__views.txtGender);
    $.__views.txtGender = Ti.UI.createTextField({
        width: "150dp",
        height: "35dp",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        backgroundColor: "white",
        color: "black",
        id: "txtGender",
        hintText: "Gender(M or F)",
        top: "150dp"
    });
    $.__views.__alloyId23.add($.__views.txtGender);
    $.__views.txtHeight = Ti.UI.createTextField({
        width: "150dp",
        height: "35dp",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        backgroundColor: "white",
        color: "black",
        id: "txtHeight",
        hintText: "Height(e.g 6.4 feet)",
        top: "200dp"
    });
    $.__views.__alloyId23.add($.__views.txtHeight);
    $.__views.txtWeight = Ti.UI.createTextField({
        width: "150dp",
        height: "35dp",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        backgroundColor: "white",
        color: "black",
        id: "txtWeight",
        hintText: "Weight(in Lb)",
        top: "260dp"
    });
    $.__views.__alloyId23.add($.__views.txtWeight);
    $.__views.btnSubmit = Ti.UI.createButton({
        width: "150dp",
        top: "340dp",
        height: "35dp",
        backgroundColor: "red",
        color: "white",
        id: "btnSubmit",
        title: "Get Ripped"
    });
    $.__views.__alloyId23.add($.__views.btnSubmit);
    showWorkout ? $.__views.btnSubmit.addEventListener("click", showWorkout) : __defers["$.__views.btnSubmit!click!showWorkout"] = true;
    $.__views.navGroupWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.__alloyId23,
        id: "navGroupWin"
    });
    $.__views.navGroupWin && $.addTopLevelView($.__views.navGroupWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.btnSubmit!click!showWorkout"] && $.__views.btnSubmit.addEventListener("click", showWorkout);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;