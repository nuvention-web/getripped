var win = Ti.UI.createWindow({
    backgroundColor: "white"
});

win.open();

var GA = require("analytics.google");

GA.debug = true;

GA.trackUncaughtExceptions = true;

var tracker = GA.getTracker("UA-5069201-9");

tracker.trackEvent({
    category: "category",
    action: "test",
    label: "label",
    value: 1
});

tracker.trackSocial({
    network: "facebook",
    action: "action",
    target: "target"
});

tracker.trackTiming({
    category: "",
    time: 10,
    name: "",
    label: ""
});

tracker.trackScreen("Home");

var transaction = GA.makeTransaction({
    id: "hi",
    tax: .6,
    shipping: 0,
    revenue: 17.493
});

transaction.addItem({
    sku: "abc",
    name: "ABC123",
    category: "product",
    price: .99,
    quantity: 1
});

tracker.trackTransaction(transaction);