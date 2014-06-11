function Controller() {
    function isNumber(n) {
        return !isNaN(parseInt(n)) && isFinite(n) && -1 == n.toString().indexOf(".");
    }
    function showNext() {
        exNum == Alloy.Globals.workouts.length && (Alloy.Globals.flag = 1);
        exId = Alloy.Globals.workouts[args].id;
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
        var weightInput = -1;
        var rep1Input = -1;
        var rep2Input = -1;
        var rep3Input = -1;
        weightInput = isNumber(weightText);
        rep1Input = isNumber(set1Text);
        rep2Input = isNumber(set2Text);
        rep3Input = isNumber(set3Text);
        if (0 == weightInput) {
            alert("Enter only numbers for weight used");
            return;
        }
        if (0 > weightText) {
            alert("Weight used cannot be less than zero");
            return;
        }
        if (0 == rep1Input) {
            alert("Enter only numbers for Set 1 reps");
            return;
        }
        if (0 > set1Text) {
            alert("Set 1 reps cannot be less than zero");
            return;
        }
        if (0 == rep2Input) {
            alert("Enter only numbers for Set 2 reps");
            return;
        }
        if (0 > set2Text) {
            alert("Set 2 reps cannot be less than zero");
            return;
        }
        if (0 == rep3Input) {
            alert("Enter only numbers for Set 3 reps");
            return;
        }
        if (0 > set3Text) {
            alert("Set 3 reps cannot be less than zero");
            return;
        }
        if (set1Text > 12 || set2Text > 12 || set3Text > 12) {
            alert("Reps Completed cannot be greater than Recommended Reps");
            return;
        }
        Ti.App.Analytics.trackEvent("NextExercise", "SaveExercise", Alloy.Globals.workouts[args].name, "");
        var exAttempt = Titanium.Network.createHTTPClient();
        exAttempt.open("POST", "http://swoletrain.herokuapp.com/exercise/" + exId + "/attempt");
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
        var tempArg;
        if (-1 != Alloy.Globals.incomplete.indexOf(args)) {
            if (1 == Alloy.Globals.flag) {
                var tempFlag = 0;
                for (var i = Alloy.Globals.incomplete.indexOf(args), j = 1; Alloy.Globals.incomplete.length > i; i++, 
                j++) if (null != Alloy.Globals.incomplete[Alloy.Globals.incomplete.indexOf(args) + j] && "undefined" != typeof Alloy.Globals.incomplete[Alloy.Globals.incomplete.indexOf(args) + j]) {
                    tempArg = Alloy.Globals.incomplete.indexOf(args) + j;
                    tempFlag = 1;
                    break;
                }
                if (0 == tempFlag) {
                    delete Alloy.Globals.incomplete[Alloy.Globals.incomplete.indexOf(args)];
                    var isEmptyTemp = true;
                    for (var i = 0; Alloy.Globals.incomplete.length > i; i++) if (null != Alloy.Globals.incomplete[i] || "undefined" != typeof Alloy.Globals.incomplete[i]) {
                        isEmptyTemp = false;
                        break;
                    }
                    if (true == isEmptyTemp) {
                        Alloy.Globals.flag = 0;
                        Alloy.Globals.incomplete = [];
                    }
                    showAckView();
                    return;
                }
            }
            delete Alloy.Globals.incomplete[Alloy.Globals.incomplete.indexOf(args)];
            var isEmpty = true;
            for (var i = 0; Alloy.Globals.incomplete.length > i; i++) if (null != Alloy.Globals.incomplete[i]) {
                isEmpty = false;
                break;
            }
            if (true == isEmpty || tempArg - 1 == Alloy.Globals.incomplete.length - 1) {
                if (true == isEmpty) {
                    Alloy.Globals.flag = 0;
                    Alloy.Globals.incomplete = [];
                }
                showAckView();
                return;
            }
        }
        if (exNum == Alloy.Globals.workouts.length) {
            0 == Alloy.Globals.incomplete.length && (Alloy.Globals.flag = 0);
            showAckView();
            return;
        }
        1 == Alloy.Globals.flag ? args = Alloy.Globals.incomplete[tempArg] : args += 1;
        var workoutsWin = Alloy.createController("exercise", args).getView();
        workoutsWin.open();
    }
    function skipExercise() {
        Ti.App.Analytics.trackEvent("SkipExercise", "Skip", Alloy.Globals.workouts[args].name, "");
        -1 == Alloy.Globals.incomplete.indexOf(args) && Alloy.Globals.incomplete.push(args);
        if (exNum == Alloy.Globals.workouts.length) {
            showAckView();
            Alloy.Globals.flag = 1;
        } else {
            if (1 == Alloy.Globals.flag) {
                var tempFlag = 0;
                for (var i = Alloy.Globals.incomplete.indexOf(args), j = 1; Alloy.Globals.incomplete.length > i; i++, 
                j++) if (null != Alloy.Globals.incomplete[Alloy.Globals.incomplete.indexOf(args) + j] && "undefined" != typeof Alloy.Globals.incomplete[Alloy.Globals.incomplete.indexOf(args) + j]) {
                    tempArg = Alloy.Globals.incomplete.indexOf(args) + j;
                    tempFlag = 1;
                    break;
                }
                if (0 == tempFlag) {
                    showAckView();
                    return;
                }
                args = Alloy.Globals.incomplete[tempArg];
            } else args += 1;
            var workoutsWin = Alloy.createController("exercise", args).getView();
            workoutsWin.open();
        }
    }
    function showAckView() {
        var completionWin = Alloy.createController("completion", {}).getView();
        completionWin.open();
    }
    function openExDetails() {
        var openExDetailsWin = Alloy.createController("exDetails", args).getView();
        openExDetailsWin.open();
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
        title: "SwoleTrain",
        fullScreen: false,
        exitOnClose: true,
        tabBarHidden: true,
        font: {
            fontSize: "32dp",
            fontWeight: "bold"
        },
        id: "exWin",
        backgroundColor: "#F6F6F6"
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
        height: "45%",
        bottom: "10"
    });
    $.__views.mainView.add($.__views.viewId);
    $.__views.topView = Ti.UI.createView({
        id: "topView",
        layout: "vertical",
        height: "SIZE",
        backgroundColor: "#3B74F5"
    });
    $.__views.viewId.add($.__views.topView);
    $.__views.workoutTitle = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#ffffff",
        text: "",
        id: "workoutTitle"
    });
    $.__views.topView.add($.__views.workoutTitle);
    $.__views.eName = Ti.UI.createLabel({
        font: {
            fontSize: 20,
            fontWeight: "bold"
        },
        id: "eName",
        top: "5",
        height: "SIZE",
        color: "#F6F6F6"
    });
    $.__views.topView.add($.__views.eName);
    $.__views.exImage = Ti.UI.createImageView({
        id: "exImage",
        top: "10",
        height: "260px",
        width: "260px"
    });
    $.__views.viewId.add($.__views.exImage);
    openExDetails ? $.__views.exImage.addEventListener("click", openExDetails) : __defers["$.__views.exImage!click!openExDetails"] = true;
    $.__views.bottomView = Ti.UI.createView({
        id: "bottomView",
        layout: "vertical",
        backgroundColor: "#2B2B2B"
    });
    $.__views.mainView.add($.__views.bottomView);
    $.__views.viewId2 = Ti.UI.createView({
        id: "viewId2",
        layout: "horizontal",
        height: "SIZE",
        top: "10"
    });
    $.__views.bottomView.add($.__views.viewId2);
    $.__views.weightLabel = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        id: "weightLabel",
        left: "10%",
        color: "#ffffff"
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
        visible: "false",
        maxLength: "3"
    });
    $.__views.viewId2.add($.__views.txtWeight);
    $.__views.viewId3 = Ti.UI.createView({
        id: "viewId3",
        layout: "horizontal",
        height: "SIZE",
        top: "10"
    });
    $.__views.bottomView.add($.__views.viewId3);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#F6F6F6",
        text: "Set",
        left: "40",
        id: "__alloyId7"
    });
    $.__views.viewId3.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#F6F6F6",
        text: "Recommended",
        left: "20",
        id: "__alloyId8"
    });
    $.__views.viewId3.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#F6F6F6",
        text: "Reps",
        left: "40",
        id: "__alloyId9"
    });
    $.__views.viewId3.add($.__views.__alloyId9);
    $.__views.viewId4 = Ti.UI.createView({
        id: "viewId4",
        layout: "horizontal",
        height: "SIZE"
    });
    $.__views.bottomView.add($.__views.viewId4);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#F6F6F6",
        text: "Reps",
        left: "35%",
        id: "__alloyId10"
    });
    $.__views.viewId4.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        font: {
            fontSize: 12
        },
        color: "#F6F6F6",
        text: "Completed",
        left: "50",
        id: "__alloyId11"
    });
    $.__views.viewId4.add($.__views.__alloyId11);
    $.__views.viewId5 = Ti.UI.createView({
        id: "viewId5",
        layout: "horizontal",
        height: "SIZE",
        top: "2"
    });
    $.__views.bottomView.add($.__views.viewId5);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        text: "1",
        left: "45",
        color: "#ffffff",
        id: "__alloyId12"
    });
    $.__views.viewId5.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        width: 50,
        height: 25,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#E9E581",
        left: "14%",
        text: "12",
        id: "__alloyId13"
    });
    $.__views.viewId5.add($.__views.__alloyId13);
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
        left: "15%",
        maxLength: "2"
    });
    $.__views.viewId5.add($.__views.txtSet1);
    $.__views.viewId6 = Ti.UI.createView({
        id: "viewId6",
        layout: "horizontal",
        height: "SIZE",
        top: "3"
    });
    $.__views.bottomView.add($.__views.viewId6);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        text: "2",
        left: "45",
        color: "#ffffff",
        id: "__alloyId14"
    });
    $.__views.viewId6.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        width: 50,
        height: 25,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#E9E581",
        left: "14%",
        text: "12",
        id: "__alloyId15"
    });
    $.__views.viewId6.add($.__views.__alloyId15);
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
        left: "15%",
        maxLength: "2"
    });
    $.__views.viewId6.add($.__views.txtSet2);
    $.__views.viewId7 = Ti.UI.createView({
        id: "viewId7",
        layout: "horizontal",
        height: "SIZE",
        top: "3"
    });
    $.__views.bottomView.add($.__views.viewId7);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        text: "3",
        left: "45",
        color: "#ffffff",
        id: "__alloyId16"
    });
    $.__views.viewId7.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        width: 50,
        height: 25,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#E9E581",
        left: "14%",
        text: "12",
        id: "__alloyId17"
    });
    $.__views.viewId7.add($.__views.__alloyId17);
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
        left: "15%",
        maxLength: "2"
    });
    $.__views.viewId7.add($.__views.txtSet3);
    $.__views.buttonView = Ti.UI.createView({
        id: "buttonView",
        layout: "horizontal",
        height: "SIZE",
        top: "12"
    });
    $.__views.bottomView.add($.__views.buttonView);
    $.__views.btnSkip = Ti.UI.createButton({
        id: "btnSkip",
        left: "30",
        width: "110",
        title: "Jump to Next"
    });
    $.__views.buttonView.add($.__views.btnSkip);
    skipExercise ? $.__views.btnSkip.addEventListener("click", skipExercise) : __defers["$.__views.btnSkip!click!skipExercise"] = true;
    $.__views.btnNext = Ti.UI.createButton({
        id: "btnNext",
        left: "40",
        title: "Save & Next"
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
    var args = arguments[0];
    var bkBtn = Titanium.UI.createButton({
        height: 25,
        font: {
            size: 9,
            fontWeight: "bold"
        },
        width: 60,
        backgroundImage: "backBtn.png"
    });
    bkBtn.addEventListener("click", function() {
        var workoutsWin = Alloy.createController("dashboard", {}).getView();
        workoutsWin.open();
    });
    $.eName.text = Alloy.Globals.workouts[args].name;
    var exNum = parseInt(args) + 1;
    var imgName = Alloy.Globals.workouts[args].image;
    $.exImage.image = imgName;
    $.workoutTitle.text = exNum + " of " + Alloy.Globals.workouts.length;
    $.txtWeight.keyboardType = Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION;
    $.txtSet1.keyboardType = Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION;
    $.txtSet2.keyboardType = Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION;
    $.txtSet3.keyboardType = Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION;
    1 != exNum || 0 != Alloy.Globals.flag && Alloy.Globals.incomplete.length != Alloy.Globals.workouts.length || $.exWin.setLeftNavButton(bkBtn);
    if ("Hip Raises" == Alloy.Globals.workouts[args].name || "Raised Leg Sit Up" == Alloy.Globals.workouts[args].name || "Side Bridge" == Alloy.Globals.workouts[args].name || "Plank" == Alloy.Globals.workouts[args].name || "Dips" == Alloy.Globals.workouts[args].name || "Chinup" == Alloy.Globals.workouts[args].name) {
        $.txtWeight.value = "N/A";
        $.txtWeight.editable = "false";
    }
    var uId = Alloy.Globals.userId;
    var exAttempt = Titanium.Network.createHTTPClient();
    exAttempt.open("POST", "http://swoletrain.herokuapp.com//user/" + uId + "/exercise/" + Alloy.Globals.workouts[args].id + "/attempt/last");
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
    __defers["$.__views.exImage!click!openExDetails"] && $.__views.exImage.addEventListener("click", openExDetails);
    __defers["$.__views.btnSkip!click!skipExercise"] && $.__views.btnSkip.addEventListener("click", skipExercise);
    __defers["$.__views.btnNext!click!showNext"] && $.__views.btnNext.addEventListener("click", showNext);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;