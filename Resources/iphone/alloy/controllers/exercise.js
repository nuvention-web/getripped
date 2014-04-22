function Controller() {
    function showNext() {
        Alloy.Globals.exCount = Alloy.Globals.exCount + 1;
        var workoutsWin = Alloy.createController("exercise", {}).getView();
        $.exNavWin.openWindow(workoutsWin);
    }
    function showPrev() {
        Alloy.Globals.exCount = Alloy.Globals.exCount - 1;
        var workoutsWin = Alloy.createController("exercise", {}).getView();
        $.exNavWin.openWindow(workoutsWin);
    }
    function showAckView() {
        var completionWin = Alloy.createController("completion", {}).getView();
        $.exNavWin.openWindow(completionWin);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "exercise";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.exWin = Ti.UI.createWindow({
        title: "Trainer",
        fullScreen: false,
        exitOnClose: true,
        navBarHidden: true,
        tabBarHidden: true,
        font: {
            fontsize: "32dp",
            fontWeight: "bold"
        },
        id: "exWin",
        backgroundColor: "#bcbcbc"
    });
    $.__views.viewId = Ti.UI.createView({
        id: "viewId"
    });
    $.__views.exWin.add($.__views.viewId);
    $.__views.workoutTitle = Ti.UI.createLabel({
        text: "",
        id: "workoutTitle",
        top: "10"
    });
    $.__views.viewId.add($.__views.workoutTitle);
    $.__views.eName = Ti.UI.createLabel({
        id: "eName",
        top: "30"
    });
    $.__views.viewId.add($.__views.eName);
    $.__views.eDesc = Ti.UI.createLabel({
        id: "eDesc",
        top: "50"
    });
    $.__views.viewId.add($.__views.eDesc);
    $.__views.btnPrev = Ti.UI.createButton({
        id: "btnPrev",
        left: "20",
        bottom: "10",
        title: "Previous",
        visible: "false"
    });
    $.__views.viewId.add($.__views.btnPrev);
    showPrev ? $.__views.btnPrev.addEventListener("click", showPrev) : __defers["$.__views.btnPrev!click!showPrev"] = true;
    $.__views.btnNext = Ti.UI.createButton({
        id: "btnNext",
        right: "20",
        bottom: "10",
        title: "Next"
    });
    $.__views.viewId.add($.__views.btnNext);
    showNext ? $.__views.btnNext.addEventListener("click", showNext) : __defers["$.__views.btnNext!click!showNext"] = true;
    $.__views.btnFinish = Ti.UI.createButton({
        id: "btnFinish",
        right: "20",
        bottom: "10",
        title: "Finish",
        visible: "false"
    });
    $.__views.viewId.add($.__views.btnFinish);
    showAckView ? $.__views.btnFinish.addEventListener("click", showAckView) : __defers["$.__views.btnFinish!click!showAckView"] = true;
    $.__views.exNavWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.exWin,
        id: "exNavWin"
    });
    $.__views.exNavWin && $.addTopLevelView($.__views.exNavWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var eNames = [];
    var eDesc = [];
    var index = Alloy.Globals.exCount;
    eNames = Alloy.Globals.eName;
    eDesc = Alloy.Globals.eDescription;
    $.eName.text = eNames[index];
    $.eDesc.text = "Instructions: " + eDesc[index];
    var exNum = index + 1;
    $.workoutTitle.text = "Upper Body workout " + exNum + " of " + eNames.length;
    $.btnPrev.visible = index > 0 ? true : false;
    if (exNum == eNames.length) {
        $.btnFinish.visible = true;
        $.btnNext.visible = false;
    } else {
        $.btnNext.visible = true;
        $.btnFinish.visible = false;
    }
    __defers["$.__views.btnPrev!click!showPrev"] && $.__views.btnPrev.addEventListener("click", showPrev);
    __defers["$.__views.btnNext!click!showNext"] && $.__views.btnNext.addEventListener("click", showNext);
    __defers["$.__views.btnFinish!click!showAckView"] && $.__views.btnFinish.addEventListener("click", showAckView);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;