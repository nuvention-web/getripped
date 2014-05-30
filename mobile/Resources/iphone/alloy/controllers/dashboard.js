function Controller() {
    function showUpperBodyWorkout() {
        Ti.App.Analytics.trackEvent("StartWorkout", "UpperBody", "Upper Body", "");
        Alloy.Globals.startWorkout("Upper Body");
    }
    function showLowerBodyWorkout() {
        Ti.App.Analytics.trackEvent("StartWorkout", "LowerBody", "Lower Body", "");
        Alloy.Globals.startWorkout("Lower Body");
    }
    function showUpperBodyExercises() {
        Ti.App.Analytics.trackEvent("ShowExercises", "UpperBody", "UpperBodyExercises", "");
        Alloy.Globals.showExercises("Upper Body");
    }
    function showLowerBodyExercises() {
        Ti.App.Analytics.trackEvent("ShowExercises", "LowerBody", "LowerBodyExercises", "");
        Alloy.Globals.showExercises("Lower Body");
    }
    function logout() {
        Alloy.Globals.userId = 0;
        Alloy.Globals.flag = 0;
        Alloy.Globals.incomplete = [];
        Alloy.Globals.workouts = [];
        Ti.App.Analytics.trackEvent("Logout", "Logout", "Logout", "");
        var dashboardWin = Alloy.createController("login", {}).getView();
        dashboardWin.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "dashboard";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.dashboardWin = Ti.UI.createWindow({
        title: "SwoleTrain",
        navBarHidden: false,
        id: "dashboardWin",
        backgroundColor: "#F1F1F1"
    });
    $.__views.scrollviewId = Ti.UI.createScrollView({
        id: "scrollviewId",
        scrollingEnabled: "true",
        showVerticalScrollIndicator: "true"
    });
    $.__views.dashboardWin.add($.__views.scrollviewId);
    $.__views.mainView = Ti.UI.createView({
        id: "mainView",
        layout: "vertical"
    });
    $.__views.scrollviewId.add($.__views.mainView);
    $.__views.__alloyId2 = Ti.UI.createView({
        top: "0",
        layout: "vertical",
        height: "SIZE",
        backgroundColor: "#3B74F5",
        borderWidth: "3",
        borderColor: "#F6F6F6",
        id: "__alloyId2"
    });
    $.__views.mainView.add($.__views.__alloyId2);
    $.__views.welcomeLabel = Ti.UI.createLabel({
        font: {
            fontSize: 20,
            fontWeight: "bold"
        },
        top: "5",
        bottom: "5",
        id: "welcomeLabel",
        color: "#F6F6F6",
        height: "SIZE"
    });
    $.__views.__alloyId2.add($.__views.welcomeLabel);
    $.__views.upperBodyView = Ti.UI.createView({
        id: "upperBodyView",
        layout: "vertical",
        height: "35%",
        top: "0",
        backgroundColor: "#2B2B2B",
        borderWidth: "2",
        borderColor: "#F6F6F6"
    });
    $.__views.mainView.add($.__views.upperBodyView);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            fontSize: 18
        },
        color: "F6F6F6",
        text: "Upper Body:",
        top: "10",
        left: "10",
        id: "__alloyId3"
    });
    $.__views.upperBodyView.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            fontSize: 14
        },
        color: "F6F6F6",
        text: "Average Weight Lifted:",
        top: "15",
        left: "10",
        id: "__alloyId4"
    });
    $.__views.upperBodyView.add($.__views.__alloyId4);
    $.__views.pbUpper = Ti.UI.createProgressBar({
        id: "pbUpper",
        top: "5",
        width: "250",
        height: "auto",
        style: Titanium.UI.iPhone.ProgressBarStyle.PLAIN,
        max: "100",
        color: "#FFFFFF"
    });
    $.__views.upperBodyView.add($.__views.pbUpper);
    $.__views.__alloyId5 = Ti.UI.createView({
        layout: "horizontal",
        height: "SIZE",
        top: "2",
        id: "__alloyId5"
    });
    $.__views.upperBodyView.add($.__views.__alloyId5);
    $.__views.minUpper = Ti.UI.createLabel({
        id: "minUpper",
        left: "40",
        font: "{fontSize: 12, fontWeight:bold}",
        color: "#FFFFFF"
    });
    $.__views.__alloyId5.add($.__views.minUpper);
    $.__views.currentUpper = Ti.UI.createLabel({
        id: "currentUpper",
        left: "10",
        font: "{fontSize: 12, fontWeight:bold}",
        color: "#FFFFFF"
    });
    $.__views.__alloyId5.add($.__views.currentUpper);
    $.__views.upperBodyLinks = Ti.UI.createView({
        id: "upperBodyLinks",
        layout: "horizontal",
        height: "SIZE",
        top: "0"
    });
    $.__views.upperBodyView.add($.__views.upperBodyLinks);
    $.__views.upperWrkout = Ti.UI.createButton({
        id: "upperWrkout",
        top: "5",
        left: "10",
        title: "Start Workout"
    });
    $.__views.upperBodyLinks.add($.__views.upperWrkout);
    showUpperBodyWorkout ? $.__views.upperWrkout.addEventListener("click", showUpperBodyWorkout) : __defers["$.__views.upperWrkout!click!showUpperBodyWorkout"] = true;
    $.__views.UpperBodyExercises = Ti.UI.createButton({
        id: "UpperBodyExercises",
        top: "5",
        left: "20",
        title: "See all Exercises"
    });
    $.__views.upperBodyLinks.add($.__views.UpperBodyExercises);
    showUpperBodyExercises ? $.__views.UpperBodyExercises.addEventListener("click", showUpperBodyExercises) : __defers["$.__views.UpperBodyExercises!click!showUpperBodyExercises"] = true;
    $.__views.lowerBodyView = Ti.UI.createView({
        id: "lowerBodyView",
        layout: "vertical",
        height: "35%",
        top: "0",
        backgroundColor: "#2B2B2B",
        borderWidth: "2",
        borderColor: "#F6F6F6"
    });
    $.__views.mainView.add($.__views.lowerBodyView);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            fontSize: 18
        },
        color: "F6F6F6",
        text: "Lower Body:",
        top: "10",
        left: "10",
        id: "__alloyId6"
    });
    $.__views.lowerBodyView.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            fontSize: 14
        },
        color: "F6F6F6",
        text: "Average Weight Lifted:",
        top: "15",
        left: "10",
        id: "__alloyId7"
    });
    $.__views.lowerBodyView.add($.__views.__alloyId7);
    $.__views.pbLower = Ti.UI.createProgressBar({
        id: "pbLower",
        top: "5",
        width: "250",
        height: "auto",
        style: Titanium.UI.iPhone.ProgressBarStyle.PLAIN,
        max: "100",
        color: "#FFFFFF"
    });
    $.__views.lowerBodyView.add($.__views.pbLower);
    $.__views.__alloyId8 = Ti.UI.createView({
        layout: "horizontal",
        height: "SIZE",
        top: "2",
        id: "__alloyId8"
    });
    $.__views.lowerBodyView.add($.__views.__alloyId8);
    $.__views.minLower = Ti.UI.createLabel({
        id: "minLower",
        left: "40",
        font: "{fontSize: 12, fontWeight:bold}",
        color: "#FFFFFF"
    });
    $.__views.__alloyId8.add($.__views.minLower);
    $.__views.currentLower = Ti.UI.createLabel({
        id: "currentLower",
        left: "10",
        font: "{fontSize: 12, fontWeight:bold}",
        color: "#FFFFFF"
    });
    $.__views.__alloyId8.add($.__views.currentLower);
    $.__views.upperBodyLinks = Ti.UI.createView({
        id: "upperBodyLinks",
        layout: "horizontal",
        height: "SIZE",
        top: "0"
    });
    $.__views.lowerBodyView.add($.__views.upperBodyLinks);
    $.__views.lowerWrkout = Ti.UI.createButton({
        id: "lowerWrkout",
        top: "5",
        left: "10",
        title: "Start Workout"
    });
    $.__views.upperBodyLinks.add($.__views.lowerWrkout);
    showLowerBodyWorkout ? $.__views.lowerWrkout.addEventListener("click", showLowerBodyWorkout) : __defers["$.__views.lowerWrkout!click!showLowerBodyWorkout"] = true;
    $.__views.lowerBodyExercises = Ti.UI.createButton({
        id: "lowerBodyExercises",
        top: "5",
        left: "20",
        title: "See all Exercises"
    });
    $.__views.upperBodyLinks.add($.__views.lowerBodyExercises);
    showLowerBodyExercises ? $.__views.lowerBodyExercises.addEventListener("click", showLowerBodyExercises) : __defers["$.__views.lowerBodyExercises!click!showLowerBodyExercises"] = true;
    $.__views.bottomLinks = Ti.UI.createView({
        id: "bottomLinks",
        layout: "vertical",
        height: "SIZE",
        top: "20"
    });
    $.__views.mainView.add($.__views.bottomLinks);
    $.__views.logoutBtn = Ti.UI.createButton({
        top: 20,
        width: 100,
        height: 35,
        borderRadius: 1,
        backgroundColor: "#3B74F5",
        color: "white",
        font: {
            fontFamily: "Arial",
            fontWeight: "bold",
            fontSize: 14
        },
        id: "logoutBtn",
        title: "Logout"
    });
    $.__views.bottomLinks.add($.__views.logoutBtn);
    logout ? $.__views.logoutBtn.addEventListener("click", logout) : __defers["$.__views.logoutBtn!click!logout"] = true;
    $.__views.dashBoardNavWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.dashboardWin,
        id: "dashBoardNavWin"
    });
    $.__views.dashBoardNavWin && $.addTopLevelView($.__views.dashBoardNavWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var url = "http://swoletrain.herokuapp.com/dashboard/" + Alloy.Globals.userId;
    var jsonObj;
    var xhr = Ti.Network.createHTTPClient({
        onload: function() {
            jsonObj = JSON.parse(this.responseText);
            $.pbUpper.min = jsonObj.weight1;
            $.pbUpper.value = jsonObj.weight3;
            $.pbLower.min = jsonObj.weight2;
            $.pbLower.value = jsonObj.weight4;
            var percentIncreaseUpper;
            var percentIncreaseLower;
            percentIncreaseUpper = 0 == jsonObj.weight1 ? 0 : 100 * ((jsonObj.weight3 - jsonObj.weight1) / jsonObj.weight1);
            percentIncreaseLower = 0 == jsonObj.weight2 ? 0 : 100 * ((jsonObj.weight4 - jsonObj.weight2) / jsonObj.weight2);
            $.pbUpper.text = $.pbUpper.min;
            $.welcomeLabel.text = "Welcome " + jsonObj.username + "!";
            $.minUpper.text = "Initial: " + $.pbUpper.min;
            $.currentUpper.text = "Current: " + $.pbUpper.value + "  (" + String.format("%d", percentIncreaseUpper) + "%)";
            $.pbLower.text = $.pbLower.min;
            $.minLower.text = "Initial: " + $.pbLower.min;
            $.currentLower.text = "Current: " + $.pbLower.value + "  (" + String.format("%d", percentIncreaseLower) + "%)";
        },
        onerror: function(e) {
            Ti.API.debug(e.error);
            alert("error");
        },
        timeout: 5e3
    });
    xhr.open("GET", url);
    xhr.send();
    $.pbUpper.show();
    $.pbLower.show();
    __defers["$.__views.upperWrkout!click!showUpperBodyWorkout"] && $.__views.upperWrkout.addEventListener("click", showUpperBodyWorkout);
    __defers["$.__views.UpperBodyExercises!click!showUpperBodyExercises"] && $.__views.UpperBodyExercises.addEventListener("click", showUpperBodyExercises);
    __defers["$.__views.lowerWrkout!click!showLowerBodyWorkout"] && $.__views.lowerWrkout.addEventListener("click", showLowerBodyWorkout);
    __defers["$.__views.lowerBodyExercises!click!showLowerBodyExercises"] && $.__views.lowerBodyExercises.addEventListener("click", showLowerBodyExercises);
    __defers["$.__views.logoutBtn!click!logout"] && $.__views.logoutBtn.addEventListener("click", logout);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;