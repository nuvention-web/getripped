function showWorkout(){
    var workouts = Alloy.createController("Workouts",{}).getView();
    if (OS_IOS) {
        $.navGroupWin.openWindow(workouts);
    }
    if (OS_ANDROID) {
        workouts.open();
    }
}

$.index.open();
