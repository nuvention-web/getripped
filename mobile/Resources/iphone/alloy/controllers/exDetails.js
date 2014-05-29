function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "exDetails";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.exDetailsWin = Ti.UI.createWindow({
        id: "exDetailsWin",
        backgroundColor: "#F1F1F1",
        title: "SwoleTrain"
    });
    $.__views.scrollviewId = Ti.UI.createScrollView({
        id: "scrollviewId",
        scrollingEnabled: "true",
        showVerticalScrollIndicator: "true"
    });
    $.__views.exDetailsWin.add($.__views.scrollviewId);
    $.__views.mainView = Ti.UI.createView({
        id: "mainView",
        layout: "vertical"
    });
    $.__views.scrollviewId.add($.__views.mainView);
    $.__views.topView = Ti.UI.createView({
        id: "topView",
        layout: "vertical",
        height: "SIZE",
        backgroundColor: "#3B74F5"
    });
    $.__views.mainView.add($.__views.topView);
    $.__views.eName = Ti.UI.createLabel({
        font: {
            fontSize: 20,
            fontWeight: "bold"
        },
        id: "eName",
        top: "10",
        color: "#F1F1F1"
    });
    $.__views.topView.add($.__views.eName);
    $.__views.imageView = Ti.UI.createView({
        id: "imageView",
        layout: "vertical",
        height: "SIZE"
    });
    $.__views.mainView.add($.__views.imageView);
    $.__views.exImage = Ti.UI.createImageView({
        id: "exImage",
        top: "10",
        height: "500px",
        width: "500px"
    });
    $.__views.imageView.add($.__views.exImage);
    $.__views.scrollviewId2 = Ti.UI.createScrollView({
        id: "scrollviewId2",
        scrollingEnabled: "true",
        showVerticalScrollIndicator: "true"
    });
    $.__views.mainView.add($.__views.scrollviewId2);
    $.__views.bottomView = Ti.UI.createView({
        id: "bottomView",
        layout: "vertical",
        backgroundColor: "#2B2B2B"
    });
    $.__views.scrollviewId2.add($.__views.bottomView);
    $.__views.exDescription = Ti.UI.createLabel({
        id: "exDescription",
        textAlign: "EXT_ALIGNMENT_CENTER",
        height: "SIZE",
        color: "#F1F1F1",
        top: "20",
        font: "30",
        width: "90%"
    });
    $.__views.bottomView.add($.__views.exDescription);
    $.__views.navGroupWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.exDetailsWin,
        id: "navGroupWin"
    });
    $.__views.navGroupWin && $.addTopLevelView($.__views.navGroupWin);
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
    $.exDetailsWin.setLeftNavButton(bkBtn);
    bkBtn.addEventListener("click", function() {
        var workoutsWin = Alloy.createController("exercise", args).getView();
        workoutsWin.open();
    });
    Alloy.Globals.exCount + 1;
    var exName = Alloy.Globals.workouts[args].name;
    var exDesc = Alloy.Globals.workouts[args].description;
    $.eName.text = exName;
    $.exImage.image = Alloy.Globals.workouts[args].image;
    $.exDescription.text = exDesc;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;