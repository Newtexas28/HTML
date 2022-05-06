/*
 * Declering timeDisply this
 * Code snippet is from the website: https://stackoverflow.com/questions/54798493/how-to-use-event-handlers-with-update-function-to-start-and-stop-a-stopwatch 
 * It is here to calculate time from a spesific point in time to ahnother
 * .
 */

let watchIntervalTimer;
let countingSince;

function startHandler() {
    if (!watchIntervalTimer) {  // If it's not set.
        watchIntervalTimer = setInterval(updateTimer, 10);
        countingSince = Date.now();
    }
}

function stopHandler() {
    clearInterval(watchIntervalTimer);
    watchIntervalTimer = null;  // So we can identify that it's reset.
}


Start.addEventListener('click', startHandler);
Stop.addEventListener('click', stopHandler);

let seconds;
let milliseconds = null;
let d = null;
let timePassed = 0;
updateLabel();

function updateTimer() {
    timePassed += Date.now() - countingSince;
    countingSince = Date.now();
    updateLabel();
}

function updateLabel() {
    d = new Date(timePassed);
    seconds = d.getSeconds();
    milliseconds = Math.floor((d.getMilliseconds() / 10));

    if (milliseconds < 10 && seconds < 10) {
        document.getElementById("Time").innerHTML =
            "0" + seconds + ":0" + milliseconds;

    } else if (milliseconds < 10 && seconds >= 10) {
        document.getElementById("Time").innerHTML =
            seconds + ":0" + milliseconds;

    } else if (milliseconds >= 0 && seconds < 10) {
        document.getElementById("Time").innerHTML =
            "0" + seconds + ":" + milliseconds;

    } else if (milliseconds >= 0 && seconds >= 10) {
        document.getElementById("Time").innerHTML =
            seconds + ":" + milliseconds;
    }
}

export { startHandler, stopHandler, updateTimer, updateLabel };