function Controller() {
    function showUpperBodyWorkout() {
        Alloy.Globals.startWorkout("Upper Body");
    }
    function showLowerBodyWorkout() {
        Alloy.Globals.startWorkout("Lower Body");
    }
    function showUpperBodyExercises() {
        Alloy.Globals.showExercises("Upper Body");
    }
    function showLowerBodyExercises() {
        Alloy.Globals.showExercises("Lower Body");
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
        backgroundColor: "#c6c6c6",
        title: "SwoleTrain",
        navBarHidden: false,
        id: "dashboardWin"
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
    $.__views.__alloyId6 = Ti.UI.createView({
        top: "0",
        layout: "vertical",
        height: "SIZE",
        backgroundColor: "#DE1B1B",
        borderWidth: "3",
        borderColor: "#F6F6F6",
        id: "__alloyId6"
    });
    $.__views.mainView.add($.__views.__alloyId6);
    $.__views.welcomeLabel = Ti.UI.createLabel({
        font: {
            fontSize: 20,
            fontWeight: "bold"
        },
        text: "Welcome!",
        top: "5",
        bottom: "5",
        id: "welcomeLabel",
        color: "#F6F6F6",
        height: "SIZE"
    });
    $.__views.__alloyId6.add($.__views.welcomeLabel);
    $.__views.warmUpView = Ti.UI.createView({
        id: "warmUpView",
        layout: "vertical",
        height: "SIZE",
        top: "0",
        backgroundColor: "#2B2B2B",
        borderWidth: "2",
        borderColor: "#F6F6F6"
    });
    $.__views.mainView.add($.__views.warmUpView);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            fontSize: 18
        },
        color: "F6F6F6",
        text: "Warm-Up:",
        top: "10",
        left: "10",
        id: "__alloyId7"
    });
    $.__views.warmUpView.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            fontSize: 14
        },
        color: "F6F6F6",
        text: "1. Stretch",
        top: "5",
        left: "10",
        height: "SIZE",
        id: "__alloyId8"
    });
    $.__views.warmUpView.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            fontSize: 14
        },
        color: "F6F6F6",
        text: "2. 1 mile run on Treadmill",
        top: "5",
        left: "10",
        bottom: "10",
        height: "SIZE",
        id: "__alloyId9"
    });
    $.__views.warmUpView.add($.__views.__alloyId9);
    $.__views.upperBodyView = Ti.UI.createView({
        id: "upperBodyView",
        layout: "vertical",
        height: "SIZE",
        top: "0",
        backgroundColor: "#2B2B2B",
        borderWidth: "2",
        borderColor: "#F6F6F6"
    });
    $.__views.mainView.add($.__views.upperBodyView);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            fontSize: 18
        },
        color: "F6F6F6",
        text: "Upper Body:",
        top: "10",
        left: "10",
        id: "__alloyId10"
    });
    $.__views.upperBodyView.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            fontSize: 14
        },
        color: "F6F6F6",
        text: "Average Weight Lifted:",
        top: "5",
        left: "10",
        id: "__alloyId11"
    });
    $.__views.upperBodyView.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createImageView({
        top: "5",
        left: "10",
        image: "Progress.png",
        id: "__alloyId12"
    });
    $.__views.upperBodyView.add($.__views.__alloyId12);
    $.__views.upperBodyLinks = Ti.UI.createView({
        id: "upperBodyLinks",
        layout: "horizontal",
        height: "SIZE",
        top: "5"
    });
    $.__views.upperBodyView.add($.__views.upperBodyLinks);
    $.__views.__alloyId13 = Ti.UI.createButton({
        top: "5",
        left: "10",
        title: "Start Workout",
        id: "__alloyId13"
    });
    $.__views.upperBodyLinks.add($.__views.__alloyId13);
    showUpperBodyWorkout ? $.__views.__alloyId13.addEventListener("click", showUpperBodyWorkout) : __defers["$.__views.__alloyId13!click!showUpperBodyWorkout"] = true;
    $.__views.__alloyId14 = Ti.UI.createButton({
        top: "5",
        left: "20",
        title: "See all Exercises",
        id: "__alloyId14"
    });
    $.__views.upperBodyLinks.add($.__views.__alloyId14);
    showUpperBodyExercises ? $.__views.__alloyId14.addEventListener("click", showUpperBodyExercises) : __defers["$.__views.__alloyId14!click!showUpperBodyExercises"] = true;
    $.__views.lowerBodyView = Ti.UI.createView({
        id: "lowerBodyView",
        layout: "vertical",
        height: "SIZE",
        top: "0",
        backgroundColor: "#2B2B2B",
        borderWidth: "2",
        borderColor: "#F6F6F6"
    });
    $.__views.mainView.add($.__views.lowerBodyView);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            fontSize: 18
        },
        color: "F6F6F6",
        text: "Lower Body:",
        top: "10",
        left: "10",
        id: "__alloyId15"
    });
    $.__views.lowerBodyView.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        font: {
            fontWeight: "bold",
            fontSize: 14
        },
        color: "F6F6F6",
        text: "Average Weight Lifted:",
        top: "5",
        left: "10",
        id: "__alloyId16"
    });
    $.__views.lowerBodyView.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createImageView({
        top: "5",
        left: "10",
        image: "Progress.png",
        id: "__alloyId17"
    });
    $.__views.lowerBodyView.add($.__views.__alloyId17);
    $.__views.upperBodyLinks = Ti.UI.createView({
        id: "upperBodyLinks",
        layout: "horizontal",
        height: "SIZE",
        top: "5"
    });
    $.__views.lowerBodyView.add($.__views.upperBodyLinks);
    $.__views.__alloyId18 = Ti.UI.createButton({
        top: "5",
        left: "10",
        title: "Start Workout",
        id: "__alloyId18"
    });
    $.__views.upperBodyLinks.add($.__views.__alloyId18);
    showLowerBodyWorkout ? $.__views.__alloyId18.addEventListener("click", showLowerBodyWorkout) : __defers["$.__views.__alloyId18!click!showLowerBodyWorkout"] = true;
    $.__views.__alloyId19 = Ti.UI.createButton({
        top: "5",
        left: "20",
        title: "See all Exercises",
        id: "__alloyId19"
    });
    $.__views.upperBodyLinks.add($.__views.__alloyId19);
    showLowerBodyExercises ? $.__views.__alloyId19.addEventListener("click", showLowerBodyExercises) : __defers["$.__views.__alloyId19!click!showLowerBodyExercises"] = true;
    $.__views.bottomLinks = Ti.UI.createView({
        id: "bottomLinks",
        layout: "horizontal",
        height: "SIZE",
        top: "5"
    });
    $.__views.mainView.add($.__views.bottomLinks);
    $.__views.__alloyId20 = Ti.UI.createButton({
        top: "5",
        left: "10",
        title: "Change Password",
        id: "__alloyId20"
    });
    $.__views.bottomLinks.add($.__views.__alloyId20);
    showLowerBodyWorkout ? $.__views.__alloyId20.addEventListener("click", showLowerBodyWorkout) : __defers["$.__views.__alloyId20!click!showLowerBodyWorkout"] = true;
    $.__views.__alloyId21 = Ti.UI.createButton({
        top: "5",
        left: "90",
        title: "Logout",
        id: "__alloyId21"
    });
    $.__views.bottomLinks.add($.__views.__alloyId21);
    showLowerBodyExercises ? $.__views.__alloyId21.addEventListener("click", showLowerBodyExercises) : __defers["$.__views.__alloyId21!click!showLowerBodyExercises"] = true;
    $.__views.dashBoardNavWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.dashboardWin,
        id: "dashBoardNavWin"
    });
    $.__views.dashBoardNavWin && $.addTopLevelView($.__views.dashBoardNavWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.dashBoardNavWin.titleImage = "titleBackground.png";
    var url = "http://localhost:3000/dashboard/" + Alloy.Globals.userId;
    var jsonObj;
    var xhr = Ti.Network.createHTTPClient({
        onload: function() {
            jsonObj = JSON.parse(this.responseText);
        },
        onerror: function(e) {
            Ti.API.debug(e.error);
            alert("error");
        },
        timeout: 5e3
    });
    xhr.open("GET", url);
    xhr.send();
    __defers["$.__views.__alloyId13!click!showUpperBodyWorkout"] && $.__views.__alloyId13.addEventListener("click", showUpperBodyWorkout);
    __defers["$.__views.__alloyId14!click!showUpperBodyExercises"] && $.__views.__alloyId14.addEventListener("click", showUpperBodyExercises);
    __defers["$.__views.__alloyId18!click!showLowerBodyWorkout"] && $.__views.__alloyId18.addEventListener("click", showLowerBodyWorkout);
    __defers["$.__views.__alloyId19!click!showLowerBodyExercises"] && $.__views.__alloyId19.addEventListener("click", showLowerBodyExercises);
    __defers["$.__views.__alloyId20!click!showLowerBodyWorkout"] && $.__views.__alloyId20.addEventListener("click", showLowerBodyWorkout);
    __defers["$.__views.__alloyId21!click!showLowerBodyExercises"] && $.__views.__alloyId21.addEventListener("click", showLowerBodyExercises);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;