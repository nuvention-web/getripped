module.exports = [ {
    isApi: true,
    priority: 1000.0003,
    key: "Label",
    style: {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000"
    }
}, {
    isClass: true,
    priority: 10000.0002,
    key: "container",
    style: {
        backgroundColor: "grey",
        title: "GetRipped",
        fullScreen: false,
        exitOnClose: true,
        navBarHidden: false,
        tabBarHidden: true,
        font: {
            fontsize: "32dp",
            fontWeight: "bold"
        }
    }
}, {
    isClass: true,
    priority: 10000.0004,
    key: "getRippedText",
    style: {
        color: "#000",
        top: "10dp",
        font: {
            fontsize: 16,
            fontWeight: "bold"
        }
    }
}, {
    isClass: true,
    priority: 10000.0005,
    key: "demographicText",
    style: {
        width: "150dp",
        height: "35dp",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        backgroundColor: "white",
        color: "black"
    }
}, {
    isClass: true,
    priority: 10000.0006,
    key: "getRippedBtn",
    style: {
        width: "150dp",
        top: "340dp",
        height: "35dp",
        backgroundColor: "red",
        color: "white"
    }
} ];