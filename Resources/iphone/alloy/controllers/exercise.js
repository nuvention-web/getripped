function Controller() {
    function showNext() {
        var exId = exNum;
        var userId = 1;
        var weightText = $.txtWeight.value;
        var set1Text = $.txtSet1.value;
        var set2Text = $.txtSet2.value;
        var set3Text = $.txtSet3.value;
        var exAttempt = Titanium.Network.createHTTPClient();
        exAttempt.open("POST", "http://getripped.herokuapp.com/exercise/" + exId + "/attempt");
        var userEx = {
            user_id: userId,
            weight: weightText,
            reps1: set1Text,
            reps2: set2Text,
            reps3: set3Text
        };
        exAttempt.send(userEx);
        exAttempt.onload = function() {
            var json = this.responseText;
            JSON.parse(json);
        };
        Alloy.Globals.exCount = Alloy.Globals.exCount + 1;
        var workoutsWin = Alloy.createController("exercise", {}).getView();
        workoutsWin.open();
    }
    function showPrev() {
        Alloy.Globals.exCount = Alloy.Globals.exCount - 1;
        var workoutsWin = Alloy.createController("exercise", {}).getView();
        workoutsWin.open();
    }
    function showAckView() {
        var completionWin = Alloy.createController("completion", {}).getView();
        completionWin.open();
    }
    function openExDetails() {
        var completionWin = Alloy.createController("exDetails", {}).getView();
        completionWin.open();
    }
    function openLogin() {
        var completionWin = Alloy.createController("login", {}).getView();
        completionWin.open();
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
        backgroundImage: "texture.jpg"
    });
    $.__views.exWin && $.addTopLevelView($.__views.exWin);
    var __alloyId9 = [];
    $.__views.__alloyId10 = Ti.UI.createButton({
        backgroundImage: "back.png",
        height: "25",
        width: "50",
        id: "__alloyId10"
    });
    __alloyId9.push($.__views.__alloyId10);
    openLogin ? $.__views.__alloyId10.addEventListener("click", openLogin) : __defers["$.__views.__alloyId10!click!openLogin"] = true;
    $.__views.__alloyId11 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId9.push($.__views.__alloyId11);
    $.__views.titleLabel = Ti.UI.createLabel({
        text: "SwoleTrain",
        id: "titleLabel",
        verticalAlign: "center"
    });
    __alloyId9.push($.__views.titleLabel);
    $.__views.__alloyId12 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId9.push($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createButton({
        backgroundImage: "Logout.png",
        height: "25",
        width: "70",
        id: "__alloyId13"
    });
    __alloyId9.push($.__views.__alloyId13);
    $.__views.__alloyId7 = Ti.UI.iOS.createToolbar({
        items: __alloyId9,
        top: "15",
        borderTop: "true",
        borderBottom: "true",
        id: "__alloyId7"
    });
    $.__views.exWin.add($.__views.__alloyId7);
    $.__views.scrollviewId = Ti.UI.createScrollView({
        id: "scrollviewId",
        scrollingEnabled: "true",
        showVerticalScrollIndicator: "true",
        top: "30"
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
        font: {
            fontSize: 10
        },
        text: "",
        id: "workoutTitle",
        top: "10"
    });
    $.__views.viewId.add($.__views.workoutTitle);
    $.__views.eName = Ti.UI.createLabel({
        font: {
            fontSize: 20,
            fontWeight: "bold"
        },
        id: "eName",
        top: "20"
    });
    $.__views.viewId.add($.__views.eName);
    $.__views.exImage = Ti.UI.createImageView({
        id: "exImage",
        top: "30",
        height: "120",
        width: "50%"
    });
    $.__views.viewId.add($.__views.exImage);
    $.__views.detailsBtn = Ti.UI.createButton({
        width: "75%",
        font: {
            fontSize: 10
        },
        id: "detailsBtn",
        title: "Click here to see full sized image and instructions"
    });
    $.__views.viewId.add($.__views.detailsBtn);
    openExDetails ? $.__views.detailsBtn.addEventListener("click", openExDetails) : __defers["$.__views.detailsBtn!click!openExDetails"] = true;
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
    $.__views.__alloyId14 = Ti.UI.createLabel({
        text: "Weight",
        left: "10",
        id: "__alloyId14"
    });
    $.__views.viewId2.add($.__views.__alloyId14);
    $.__views.txtWeight = Ti.UI.createTextField({
        width: 50,
        height: 40,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontWeight: "bold"
        },
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "red",
        id: "txtWeight",
        left: "50",
        value: "40"
    });
    $.__views.viewId2.add($.__views.txtWeight);
    $.__views.viewId3 = Ti.UI.createView({
        id: "viewId3",
        layout: "horizontal",
        height: "SIZE"
    });
    $.__views.mainView.add($.__views.viewId3);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        text: "Recommended",
        left: "20",
        id: "__alloyId15"
    });
    $.__views.viewId3.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        text: "Reps",
        left: "80",
        id: "__alloyId16"
    });
    $.__views.viewId3.add($.__views.__alloyId16);
    $.__views.viewId4 = Ti.UI.createView({
        id: "viewId4",
        layout: "horizontal",
        height: "SIZE"
    });
    $.__views.mainView.add($.__views.viewId4);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        text: "Reps",
        left: "30",
        id: "__alloyId17"
    });
    $.__views.viewId4.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        text: "Completed",
        left: "70",
        id: "__alloyId18"
    });
    $.__views.viewId4.add($.__views.__alloyId18);
    $.__views.viewId5 = Ti.UI.createView({
        id: "viewId5",
        layout: "horizontal",
        height: "SIZE"
    });
    $.__views.mainView.add($.__views.viewId5);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        text: "Set 1",
        left: "30",
        id: "__alloyId19"
    });
    $.__views.viewId5.add($.__views.__alloyId19);
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
    $.__views.viewId5.add($.__views.__alloyId20);
    $.__views.txtSet1 = Ti.UI.createTextField({
        width: 50,
        height: 40,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontWeight: "bold"
        },
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "red",
        id: "txtSet1",
        left: "80"
    });
    $.__views.viewId5.add($.__views.txtSet1);
    $.__views.viewId6 = Ti.UI.createView({
        id: "viewId6",
        layout: "horizontal",
        height: "SIZE",
        backgroundColor: "green"
    });
    $.__views.mainView.add($.__views.viewId6);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        text: "Set 2",
        left: "30",
        id: "__alloyId21"
    });
    $.__views.viewId6.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createLabel({
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
        id: "__alloyId22"
    });
    $.__views.viewId6.add($.__views.__alloyId22);
    $.__views.txtSet2 = Ti.UI.createTextField({
        width: 50,
        height: 40,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontWeight: "bold"
        },
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "red",
        id: "txtSet2",
        left: "80"
    });
    $.__views.viewId6.add($.__views.txtSet2);
    $.__views.viewId7 = Ti.UI.createView({
        id: "viewId7",
        layout: "horizontal",
        height: "SIZE",
        backgroundColor: "yellow"
    });
    $.__views.mainView.add($.__views.viewId7);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        text: "Set 3",
        left: "30",
        id: "__alloyId23"
    });
    $.__views.viewId7.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createLabel({
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
        id: "__alloyId24"
    });
    $.__views.viewId7.add($.__views.__alloyId24);
    $.__views.txtSet3 = Ti.UI.createTextField({
        width: 50,
        height: 40,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontWeight: "bold"
        },
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "red",
        id: "txtSet3",
        left: "80"
    });
    $.__views.viewId7.add($.__views.txtSet3);
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
    var imgName = exNum + ".JPG";
    $.exImage.image = imgName;
    $.workoutTitle.text = "Upper Body workout " + exNum + " of " + "8";
    $.btnPrev.visible = index > 0 ? true : false;
    if (8 == exNum) {
        $.btnFinish.visible = true;
        $.btnNext.visible = false;
    } else {
        $.btnNext.visible = true;
        $.btnFinish.visible = false;
    }
    __defers["$.__views.__alloyId10!click!openLogin"] && $.__views.__alloyId10.addEventListener("click", openLogin);
    __defers["$.__views.detailsBtn!click!openExDetails"] && $.__views.detailsBtn.addEventListener("click", openExDetails);
    __defers["$.__views.btnPrev!click!showPrev"] && $.__views.btnPrev.addEventListener("click", showPrev);
    __defers["$.__views.btnNext!click!showNext"] && $.__views.btnNext.addEventListener("click", showNext);
    __defers["$.__views.btnFinish!click!showAckView"] && $.__views.btnFinish.addEventListener("click", showAckView);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;