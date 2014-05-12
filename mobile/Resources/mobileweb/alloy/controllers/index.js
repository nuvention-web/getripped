function Controller() {
    function showWorkout() {
        {
            Alloy.createController("Workouts", {}).getView();
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "grey",
        title: "GetRipped",
        fullScreen: false,
        exitOnClose: true,
        navBarHidden: false,
        tabBarHidden: true,
        font: {
            fontsize: "32dp",
            fontWeight: "bold"
        },
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
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
    $.__views.index.add($.__views.label);
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
    $.__views.index.add($.__views.txtAge);
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
    $.__views.index.add($.__views.txtGender);
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
    $.__views.index.add($.__views.txtGender);
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
    $.__views.index.add($.__views.txtHeight);
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
    $.__views.index.add($.__views.txtWeight);
    $.__views.btnSubmit = Ti.UI.createButton({
        width: "150dp",
        top: "340dp",
        height: "35dp",
        backgroundColor: "red",
        color: "white",
        id: "btnSubmit",
        title: "Get Ripped"
    });
    $.__views.index.add($.__views.btnSubmit);
    showWorkout ? $.__views.btnSubmit.addEventListener("click", showWorkout) : __defers["$.__views.btnSubmit!click!showWorkout"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.btnSubmit!click!showWorkout"] && $.__views.btnSubmit.addEventListener("click", showWorkout);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;