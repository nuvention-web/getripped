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
    $.__views.viewId = Ti.UI.createView({
        id: "viewId",
        layout: "vertical",
        height: "SIZE"
    });
    $.__views.mainView.add($.__views.viewId);
    $.__views.workoutTitle = Ti.UI.createLabel({
        text: "",
        id: "workoutTitle",
        font: "20",
        top: "10"
    });
    $.__views.viewId.add($.__views.workoutTitle);
    $.__views.eName = Ti.UI.createLabel({
        id: "eName",
        left: "5",
        top: "40"
    });
    $.__views.viewId.add($.__views.eName);
    $.__views.eDesc = Ti.UI.createLabel({
        id: "eDesc",
        font: "30",
        top: "60"
    });
    $.__views.viewId.add($.__views.eDesc);
    $.__views.viewId2 = Ti.UI.createView({
        id: "viewId2",
        layout: "horizontal",
        height: "SIZE"
    });
    $.__views.mainView.add($.__views.viewId2);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        text: "Weight",
        left: "10",
        id: "__alloyId7"
    });
    $.__views.viewId2.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createTextField({
        width: 50,
        height: 40,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontWeight: "bold"
        },
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "red",
        left: "50",
        value: "40",
        id: "__alloyId8"
    });
    $.__views.viewId2.add($.__views.__alloyId8);
    $.__views.viewId3 = Ti.UI.createView({
        id: "viewId3",
        layout: "horizontal",
        height: "SIZE"
    });
    $.__views.mainView.add($.__views.viewId3);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        text: "Recommended",
        left: "20",
        id: "__alloyId9"
    });
    $.__views.viewId3.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        text: "Reps",
        left: "80",
        id: "__alloyId10"
    });
    $.__views.viewId3.add($.__views.__alloyId10);
    $.__views.viewId4 = Ti.UI.createView({
        id: "viewId4",
        layout: "horizontal",
        height: "SIZE"
    });
    $.__views.mainView.add($.__views.viewId4);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        text: "Reps",
        left: "30",
        id: "__alloyId11"
    });
    $.__views.viewId4.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        text: "Completed",
        left: "70",
        id: "__alloyId12"
    });
    $.__views.viewId4.add($.__views.__alloyId12);
    $.__views.viewId5 = Ti.UI.createView({
        id: "viewId5",
        layout: "horizontal",
        height: "SIZE"
    });
    $.__views.mainView.add($.__views.viewId5);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        text: "Set 1",
        left: "30",
        id: "__alloyId13"
    });
    $.__views.viewId5.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        width: 50,
        height: 40,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontWeight: "bold"
        },
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "red",
        left: "40",
        text: "12",
        id: "__alloyId14"
    });
    $.__views.viewId5.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createTextField({
        width: 50,
        height: 40,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontWeight: "bold"
        },
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "red",
        left: "80",
        id: "__alloyId15"
    });
    $.__views.viewId5.add($.__views.__alloyId15);
    $.__views.viewId6 = Ti.UI.createView({
        id: "viewId6",
        layout: "horizontal",
        height: "SIZE"
    });
    $.__views.mainView.add($.__views.viewId6);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        text: "Set 1",
        left: "30",
        id: "__alloyId16"
    });
    $.__views.viewId6.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        width: 50,
        height: 40,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontWeight: "bold"
        },
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "red",
        left: "40",
        text: "12",
        id: "__alloyId17"
    });
    $.__views.viewId6.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createTextField({
        width: 50,
        height: 40,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontWeight: "bold"
        },
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "red",
        left: "80",
        id: "__alloyId18"
    });
    $.__views.viewId6.add($.__views.__alloyId18);
    $.__views.viewId7 = Ti.UI.createView({
        id: "viewId7",
        layout: "horizontal",
        height: "SIZE"
    });
    $.__views.mainView.add($.__views.viewId7);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        text: "Set 1",
        left: "30",
        id: "__alloyId19"
    });
    $.__views.viewId7.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        width: 50,
        height: 40,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontWeight: "bold"
        },
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "red",
        left: "40",
        text: "12",
        id: "__alloyId20"
    });
    $.__views.viewId7.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createTextField({
        width: 50,
        height: 40,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontWeight: "bold"
        },
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "red",
        left: "80",
        id: "__alloyId21"
    });
    $.__views.viewId7.add($.__views.__alloyId21);
    $.__views.buttonView = Ti.UI.createView({
        id: "buttonView",
        layout: "horizontal",
        backgroundColor: "yellow",
        bottom: "20"
    });
    $.__views.mainView.add($.__views.buttonView);
    $.__views.btnPrev = Ti.UI.createButton({
        id: "btnPrev",
        left: "20",
        bottom: "20",
        title: "Previous",
        visible: "false"
    });
    $.__views.buttonView.add($.__views.btnPrev);
    showPrev ? $.__views.btnPrev.addEventListener("click", showPrev) : __defers["$.__views.btnPrev!click!showPrev"] = true;
    $.__views.btnNext = Ti.UI.createButton({
        id: "btnNext",
        right: "20",
        bottom: "20",
        title: "Next"
    });
    $.__views.buttonView.add($.__views.btnNext);
    showNext ? $.__views.btnNext.addEventListener("click", showNext) : __defers["$.__views.btnNext!click!showNext"] = true;
    $.__views.btnFinish = Ti.UI.createButton({
        id: "btnFinish",
        right: "20",
        bottom: "20",
        title: "Finish",
        visible: "false"
    });
    $.__views.buttonView.add($.__views.btnFinish);
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
    var imgurl = [];
    var index = Alloy.Globals.exCount;
    imgurl = Alloy.Globals.images;
    eNames = Alloy.Globals.eName;
    eDesc = Alloy.Globals.eDescription;
    $.eName.text = eNames[index];
    $.eDesc.text = "Instructions: " + eDesc[index];
    var exNum = index + 1;
    $.workoutTitle.text = "Upper Body workout " + exNum + " of " + "8";
    $.btnPrev.visible = index > 0 ? true : false;
    if (8 == exNum) {
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