var wakeuptime;
var dstime;
var sleeptime;
var noon = 12;

function showCurrentTime() {
    var clock = document.getElementById("clock");
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var meridian = "AM";

    if (hours >= noon) {
        meridian = "PM";
    }

    // Convert 24-hour time to 12-hour time
    if (hours > 12) {
        hours = hours - 12;
    }

    if (hours == 0) {
        hours = 12;
    }

    // Add leading zeros
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var clockTime = hours + " : " + minutes + " : " + seconds + " : " + meridian;

    clock.innerText = clockTime;

    changeImage();
}

function changeImage() {
    var time = new Date().getHours();

    var image = "images/ds_clock.png";
    var imageHTML = document.getElementById("timeImage");

    if (time == wakeuptime) {
        image = "images/morning.gif";
        console.log("morning");
    }

    else if (time == dstime) {
        image = "images/class.gif";
    }

    else if (time == sleeptime) {
        image = "images/night.gif";
    }

    imageHTML.src = image;
}

function updateClock() {
    var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
    wakeuptime = wakeUpTimeSelector.value;

    var dsTimeSelector = document.getElementById("dsTimeSelector");
    dstime = dsTimeSelector.value;

    var sleepTimeSelector = document.getElementById("sleepTimeSelector");
    sleeptime = sleepTimeSelector.value;
}

var saveButton = document.getElementById("saveButton");

saveButton.addEventListener("click", updateClock);

// Start the clock
updateClock();
showCurrentTime();
setInterval(showCurrentTime, 1000);