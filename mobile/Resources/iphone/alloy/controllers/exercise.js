function Controller() {
    function isNumber(n) {
        return !isNaN(parseInt(n)) && isFinite(n) && -1 == n.toString().indexOf(".");
    }
    function showNext() {
        if (8 == exNum) showAckView(); else {
            var exId = exNum;
            var uId = Alloy.Globals.userId;
            var weightText = $.txtWeight.value;
            var set1Text = $.txtSet1.value;
            var set2Text = $.txtSet2.value;
            var set3Text = $.txtSet3.value;
            if ("" == weightText) {
                alert("Enter weight used");
                return;
            }
            "N/A" == weightText && (weightText = 0);
            if ("" == set1Text) {
                alert("Enter reps completed for Set 1");
                return;
            }
            if ("" == set2Text) {
                alert("Enter reps completed for Set 2");
                return;
            }
            if ("" == set3Text) {
                alert("Enter reps completed for Set 3");
                return;
            }
            var rep1Input = isNumber(set1Text);
            var rep2Input = isNumber(set2Text);
            var rep3Input = isNumber(set3Text);
            if (0 == rep1Input) {
                alert("Enter only numbers for Set 1 reps");
                return;
            }
            if (0 == rep2Input) {
                alert("Enter only numbers for Set 2 reps");
                return;
            }
            if (0 == rep3Input) {
                alert("Enter only numbers for Set 3 reps");
                return;
            }
            var exAttempt = Titanium.Network.createHTTPClient();
            exAttempt.open("POST", "http://localhost:3000/exercise/" + exId + "/attempt");
            var userEx = {
                user_id: uId,
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
            var args = 1;
            var workoutsWin = Alloy.createController("exercise", args).getView();
            workoutsWin.open();
        }
    }
    function skipExercise() {
        if (8 == exNum) showAckView(); else {
            Alloy.Globals.exCount = Alloy.Globals.exCount + 1;
            var args = 1;
            var workoutsWin = Alloy.createController("exercise", args).getView();
            workoutsWin.open();
        }
    }
    function showAckView() {
        var completionWin = Alloy.createController("completion", {}).getView();
        completionWin.open();
    }
    function openExDetails() {
        var completionWin = Alloy.createController("exDetails", {}).getView();
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
        title: "Workout",
        fullScreen: false,
        exitOnClose: true,
        tabBarHidden: true,
        font: {
            fontsize: "32dp",
            fontWeight: "bold"
        },
        id: "exWin",
        backgroundImage: "texture.jpg"
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
        font: {
            fontSize: 12
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
        top: "10"
    });
    $.__views.viewId.add($.__views.eName);
    $.__views.exImage = Ti.UI.createImageView({
        id: "exImage",
        top: "10",
        height: "120",
        width: "50%"
    });
    $.__views.viewId.add($.__views.exImage);
    openExDetails ? $.__views.exImage.addEventListener("click", openExDetails) : __defers["$.__views.exImage!click!openExDetails"] = true;
    $.__views.viewId2 = Ti.UI.createView({
        id: "viewId2",
        layout: "horizontal",
        height: "SIZE",
        top: "10"
    });
    $.__views.mainView.add($.__views.viewId2);
    $.__views.weightLabel = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        id: "weightLabel",
        left: "10%"
    });
    $.__views.viewId2.add($.__views.weightLabel);
    $.__views.txtWeight = Ti.UI.createTextField({
        width: 50,
        height: 25,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "red",
        id: "txtWeight",
        left: "10%",
        visible: "false"
    });
    $.__views.viewId2.add($.__views.txtWeight);
    $.__views.viewId3 = Ti.UI.createView({
        id: "viewId3",
        layout: "horizontal",
        height: "SIZE",
        top: "10"
    });
    $.__views.mainView.add($.__views.viewId3);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        text: "Recommended",
        left: "30%",
        id: "__alloyId11"
    });
    $.__views.viewId3.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        text: "Reps",
        left: "10%",
        id: "__alloyId12"
    });
    $.__views.viewId3.add($.__views.__alloyId12);
    $.__views.viewId4 = Ti.UI.createView({
        id: "viewId4",
        layout: "horizontal",
        height: "SIZE"
    });
    $.__views.mainView.add($.__views.viewId4);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        text: "Reps",
        left: "40%",
        id: "__alloyId13"
    });
    $.__views.viewId4.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        text: "Completed",
        left: "12%",
        id: "__alloyId14"
    });
    $.__views.viewId4.add($.__views.__alloyId14);
    $.__views.viewId5 = Ti.UI.createView({
        id: "viewId5",
        layout: "horizontal",
        height: "SIZE",
        top: "2"
    });
    $.__views.mainView.add($.__views.viewId5);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        text: "Set 1",
        left: "30",
        id: "__alloyId15"
    });
    $.__views.viewId5.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        width: 50,
        height: 25,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "red",
        left: "14%",
        text: "12",
        id: "__alloyId16"
    });
    $.__views.viewId5.add($.__views.__alloyId16);
    $.__views.txtSet1 = Ti.UI.createTextField({
        width: 50,
        height: 25,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "red",
        id: "txtSet1",
        left: "12%"
    });
    $.__views.viewId5.add($.__views.txtSet1);
    $.__views.viewId6 = Ti.UI.createView({
        id: "viewId6",
        layout: "horizontal",
        height: "SIZE",
        top: "3"
    });
    $.__views.mainView.add($.__views.viewId6);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        text: "Set 2",
        left: "30",
        id: "__alloyId17"
    });
    $.__views.viewId6.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        width: 50,
        height: 25,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "red",
        left: "14%",
        text: "12",
        id: "__alloyId18"
    });
    $.__views.viewId6.add($.__views.__alloyId18);
    $.__views.txtSet2 = Ti.UI.createTextField({
        width: 50,
        height: 25,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "red",
        id: "txtSet2",
        left: "12%"
    });
    $.__views.viewId6.add($.__views.txtSet2);
    $.__views.viewId7 = Ti.UI.createView({
        id: "viewId7",
        layout: "horizontal",
        height: "SIZE",
        top: "3"
    });
    $.__views.mainView.add($.__views.viewId7);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        text: "Set 3",
        left: "30",
        id: "__alloyId19"
    });
    $.__views.viewId7.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        width: 50,
        height: 25,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "red",
        left: "14%",
        text: "12",
        id: "__alloyId20"
    });
    $.__views.viewId7.add($.__views.__alloyId20);
    $.__views.txtSet3 = Ti.UI.createTextField({
        width: 50,
        height: 25,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "red",
        id: "txtSet3",
        left: "12%"
    });
    $.__views.viewId7.add($.__views.txtSet3);
    $.__views.buttonView = Ti.UI.createView({
        id: "buttonView",
        layout: "horizontal",
        height: "SIZE",
        top: "12"
    });
    $.__views.mainView.add($.__views.buttonView);
    $.__views.btnSkip = Ti.UI.createButton({
        width: 70,
        height: 30,
        borderRadius: 1,
        backgroundColor: "#3B74F5",
        color: "white",
        font: {
            fontFamily: "Arial",
            fontWeight: "bold",
            fontSize: 14
        },
        id: "btnSkip",
        left: "20",
        title: "Skip"
    });
    $.__views.buttonView.add($.__views.btnSkip);
    skipExercise ? $.__views.btnSkip.addEventListener("click", skipExercise) : __defers["$.__views.btnSkip!click!skipExercise"] = true;
    $.__views.btnNext = Ti.UI.createButton({
        width: 70,
        height: 30,
        borderRadius: 1,
        backgroundColor: "#3B74F5",
        color: "white",
        font: {
            fontFamily: "Arial",
            fontWeight: "bold",
            fontSize: 14
        },
        id: "btnNext",
        left: "140",
        title: "Next"
    });
    $.__views.buttonView.add($.__views.btnNext);
    showNext ? $.__views.btnNext.addEventListener("click", showNext) : __defers["$.__views.btnNext!click!showNext"] = true;
    $.__views.maskImg = Ti.UI.createMaskedImage({
        id: "maskImg",
        mask: "loading-icon.png",
        height: "30",
        width: "30",
        visible: "false"
    });
    $.__views.scrollviewId.add($.__views.maskImg);
    $.__views.exNavWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.exWin,
        id: "exNavWin"
    });
    $.__views.exNavWin && $.addTopLevelView($.__views.exNavWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var bkBtn = Titanium.UI.createButton({
        height: 25,
        font: {
            size: 9,
            fontWeight: "bold"
        },
        width: 50,
        backgroundImage: "back.png"
    });
    bkBtn.addEventListener("click", function() {
        var workoutsWin = Alloy.createController("dashboard", {}).getView();
        workoutsWin.open();
    });
    if (1 == args) {
        var eNames = [];
        var eDesc = [];
        var imgurl = [];
        var index = Alloy.Globals.exCount;
        imgurl = Alloy.Globals.images;
        eNames = Alloy.Globals.eName;
        eDesc = Alloy.Globals.eDescription;
        $.eName.text = eNames[index];
        var exNum = index + 1;
        var imgName = exNum + ".JPG";
        $.exImage.image = imgName;
        $.workoutTitle.text = "Upper Body workout " + exNum + " of " + "8";
        $.txtWeight.keyboardType = Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION;
        $.txtSet1.keyboardType = Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION;
        $.txtSet2.keyboardType = Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION;
        $.txtSet3.keyboardType = Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION;
        1 == exNum && $.exWin.setLeftNavButton(bkBtn);
        if (5 == exNum || 8 == exNum) {
            $.txtWeight.value = "N/A";
            $.txtWeight.editable = "false";
        }
        var uId = Alloy.Globals.userId;
        var exAttempt = Titanium.Network.createHTTPClient();
        exAttempt.open("POST", "http://localhost:3000/user/" + uId + "/exercise/" + exNum + "/attempt/last");
        var userEx = {
            password: "gotraingo"
        };
        exAttempt.send(userEx);
        exAttempt.onload = function() {
            $.maskImg.visible = "true";
            var json = this.responseText;
            var response = JSON.parse(json);
            if (response.weight && 0 != response.weight) {
                $.txtWeight.value = response.next_weight;
                $.txtWeight.editable = "false";
                $.weightLabel.text = "Recommended Weight";
            } else $.weightLabel.text = "Enter Weight";
            $.txtWeight.visible = "true";
            $.maskImg.visible = "false";
        };
        $.btnNext.title = 8 == exNum ? "Finish" : "Next";
    } else {
        var eNamesLower = [];
        var eDescLower = [];
        var imgurlLower = [];
        Alloy.Globals.exCount;
        imgurlLower = Alloy.Globals.images;
        eNamesLower = Alloy.Globals.eName;
        eDescLower = Alloy.Globals.eDescription;
        $.eName.text = eNames[index];
        var exNum = index + 1;
        $.exImage.image = imgName;
        $.workoutTitle.text = "Upper Body workout " + exNumLower + " of " + "8";
        $.txtWeight.keyboardType = Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION;
        $.txtSet1.keyboardType = Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION;
        $.txtSet2.keyboardType = Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION;
        $.txtSet3.keyboardType = Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION;
        1 == exNumLower && $.exWin.setLeftNavButton(bkBtn);
        if (5 == exNumLower || 8 == exNumLower) {
            $.txtWeight.value = "N/A";
            $.txtWeight.editable = "false";
        }
        var uId = Alloy.Globals.userId;
        var exAttempt = Titanium.Network.createHTTPClient();
        exAttempt.open("POST", "http://localhost:3000/user/" + uId + "/exercise/" + exNum + "/attempt/last");
        var userEx = {
            password: "gotraingo"
        };
        exAttempt.send(userEx);
        exAttempt.onload = function() {
            $.maskImg.visible = "true";
            var json = this.responseText;
            var response = JSON.parse(json);
            if (response.weight && 0 != response.weight) {
                $.txtWeight.value = response.next_weight;
                $.txtWeight.editable = "false";
                $.weightLabel.text = "Recommended Weight";
            } else $.weightLabel.text = "Enter Weight";
            $.txtWeight.visible = "true";
            $.maskImg.visible = "false";
        };
        $.btnNext.title = 8 == exNum ? "Finish" : "Next";
    }
    __defers["$.__views.exImage!click!openExDetails"] && $.__views.exImage.addEventListener("click", openExDetails);
    __defers["$.__views.btnSkip!click!skipExercise"] && $.__views.btnSkip.addEventListener("click", skipExercise);
    __defers["$.__views.btnNext!click!showNext"] && $.__views.btnNext.addEventListener("click", showNext);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;