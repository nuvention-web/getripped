function Controller() {
    function showUpperBodyWorkout() {
        var wid = Alloy.Globals.getSomeData("Upper Body");
        getworkout(wid, "Upper");
    }
    function showLowerBodyWorkout() {
        var wid = Alloy.Globals.getSomeData("Lower Body");
        getworkout(wid, "Lower");
    }
    function getworkout(wid, wName) {
        Alloy.Globals.getWorkout(wid, function() {
            var workouts = Alloy.createController("Workouts", wName).getView();
            workouts.open();
        });
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
        id: "dashboardWin",
        backgroundImage: "texture.jpg",
        title: "SwoleTrain"
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
    $.__views.welcomeLabel = Ti.UI.createLabel({
        font: {
            fontSize: 20,
            fontWeight: "bold"
        },
        text: "DASHBOARD",
        top: "20",
        id: "welcomeLabel"
    });
    $.__views.mainView.add($.__views.welcomeLabel);
    $.__views.welcomeLabel = Ti.UI.createLabel({
        font: {
            fontSize: 20,
            fontWeight: "bold"
        },
        text: "Welcome!",
        top: "5",
        id: "welcomeLabel"
    });
    $.__views.mainView.add($.__views.welcomeLabel);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        text: "PROGRESS",
        top: "10",
        left: "10",
        id: "__alloyId7"
    });
    $.__views.mainView.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        text: "Upper Body:",
        top: "10",
        left: "10",
        id: "__alloyId8"
    });
    $.__views.mainView.add($.__views.__alloyId8);
    $.__views.upperFirstWeight = Ti.UI.createLabel({
        top: "5",
        left: "10",
        id: "upperFirstWeight"
    });
    $.__views.mainView.add($.__views.upperFirstWeight);
    $.__views.upperLastWeight = Ti.UI.createLabel({
        top: "5",
        left: "10",
        id: "upperLastWeight"
    });
    $.__views.mainView.add($.__views.upperLastWeight);
    $.__views.__alloyId9 = Ti.UI.createImageView({
        top: "5",
        left: "10",
        image: "Progress.png",
        id: "__alloyId9"
    });
    $.__views.mainView.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        text: "Lower Body:",
        top: "10",
        left: "10",
        id: "__alloyId10"
    });
    $.__views.mainView.add($.__views.__alloyId10);
    $.__views.lowerFirstWeight = Ti.UI.createLabel({
        top: "5",
        left: "10",
        id: "lowerFirstWeight"
    });
    $.__views.mainView.add($.__views.lowerFirstWeight);
    $.__views.lowerLastWeight = Ti.UI.createLabel({
        top: "5",
        left: "10",
        id: "lowerLastWeight"
    });
    $.__views.mainView.add($.__views.lowerLastWeight);
    $.__views.__alloyId11 = Ti.UI.createImageView({
        top: "5",
        left: "10",
        image: "Progress.png",
        id: "__alloyId11"
    });
    $.__views.mainView.add($.__views.__alloyId11);
    $.__views.btnWorkout = Ti.UI.createButton({
        width: 200,
        height: 30,
        borderRadius: 1,
        backgroundColor: "#3B74F5",
        color: "white",
        font: {
            fontFamily: "Arial",
            fontWeight: "bold",
            fontSize: 14
        },
        id: "btnWorkout",
        top: "20",
        title: "Upper Body"
    });
    $.__views.mainView.add($.__views.btnWorkout);
    showUpperBodyWorkout ? $.__views.btnWorkout.addEventListener("click", showUpperBodyWorkout) : __defers["$.__views.btnWorkout!click!showUpperBodyWorkout"] = true;
    $.__views.btnWorkout = Ti.UI.createButton({
        width: 200,
        height: 30,
        borderRadius: 1,
        backgroundColor: "#3B74F5",
        color: "white",
        font: {
            fontFamily: "Arial",
            fontWeight: "bold",
            fontSize: 14
        },
        id: "btnWorkout",
        top: "10",
        title: "Lower Body & Core"
    });
    $.__views.mainView.add($.__views.btnWorkout);
    showLowerBodyWorkout ? $.__views.btnWorkout.addEventListener("click", showLowerBodyWorkout) : __defers["$.__views.btnWorkout!click!showLowerBodyWorkout"] = true;
    $.__views.dashBoardNavWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.dashboardWin,
        id: "dashBoardNavWin"
    });
    $.__views.dashBoardNavWin && $.addTopLevelView($.__views.dashBoardNavWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var url = "http://localhost:3000/dashboard/" + Alloy.Globals.userId;
    var jsonObj;
    var xhr = Ti.Network.createHTTPClient({
        onload: function() {
            jsonObj = JSON.parse(this.responseText);
            $.upperFirstWeight.text = "Initial Average Weight Lifted: " + jsonObj.weight1 + " lbs";
            $.upperLastWeight.text = "Current Average Weight Lifted: " + jsonObj.weight3 + " lbs";
            $.lowerFirstWeight.text = "Initial Average Weight Lifted: " + jsonObj.weight2 + " lbs";
            $.lowerLastWeight.text = "Current Average Weight Lifted: " + jsonObj.weight4 + " lbs";
        },
        onerror: function(e) {
            Ti.API.debug(e.error);
            alert("error");
        },
        timeout: 5e3
    });
    xhr.open("GET", url);
    xhr.send();
    __defers["$.__views.btnWorkout!click!showUpperBodyWorkout"] && $.__views.btnWorkout.addEventListener("click", showUpperBodyWorkout);
    __defers["$.__views.btnWorkout!click!showLowerBodyWorkout"] && $.__views.btnWorkout.addEventListener("click", showLowerBodyWorkout);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;