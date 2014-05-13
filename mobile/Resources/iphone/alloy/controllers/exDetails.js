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
        backgroundImage: "texture.jpg",
        title: "Exercise Details"
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
    $.__views.eName = Ti.UI.createLabel({
        id: "eName",
        top: "10"
    });
    $.__views.mainView.add($.__views.eName);
    $.__views.exImage = Ti.UI.createImageView({
        id: "exImage",
        top: "10",
        height: "60%",
        width: "80%"
    });
    $.__views.mainView.add($.__views.exImage);
    $.__views.exDescription = Ti.UI.createLabel({
        id: "exDescription",
        top: "20",
        font: "30",
        width: "90%"
    });
    $.__views.mainView.add($.__views.exDescription);
    $.__views.navGroupWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.exDetailsWin,
        id: "navGroupWin"
    });
    $.__views.navGroupWin && $.addTopLevelView($.__views.navGroupWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var bkBtn = Titanium.UI.createButton({
        height: 25,
        font: {
            size: 9,
            fontWeight: "bold"
        },
        width: 50,
        backgroundImage: "back.png"
    });
    $.exDetailsWin.setLeftNavButton(bkBtn);
    bkBtn.addEventListener("click", function() {
        var args = 1;
        var workoutsWin = Alloy.createController("exercise", args).getView();
        workoutsWin.open();
    });
    var count = Alloy.Globals.exCount + 1;
    var imageName = count + ".JPG";
    var exName = Alloy.Globals.eName[Alloy.Globals.exCount];
    var exDesc = Alloy.Globals.eDescription[Alloy.Globals.exCount];
    $.eName.text = exName;
    $.exImage.image = imageName;
    $.exDescription.text = "Instructions: " + exDesc;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;