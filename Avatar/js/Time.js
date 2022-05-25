/*
 * Declare timeDisply this
 * Code snippet is from the website: https://stackoverflow.com/questions/54798493/how-to-use-event-handlers-with-update-function-to-start-and-stop-a-stopwatch 
 * This file calculate time from a spesific point in time to another.
 * The code is will remember when it paused and 
 * start counting from when it paused, insted off the beging agin.
 */

let watchIntervalTimer;
let countingSince;

/*
 * Declare the function startHandler, then check if watchIntervalTimer do not. 
 * Then assign watchIntervalTimer to a spesific interval, 
 * for when to update the timer.
 * countingSince collects the date in teh exact momment the code is run.
 */

function startHandler() {
    if (!watchIntervalTimer) {  // If it's not set.
        watchIntervalTimer = setInterval(updateTimer, 10);
        countingSince = Date.now();
    }
}

/*
 * Declare the function stopHandler, then clears the interval
 * of watchIntervalTimer and give it the value of nothing aka null. 
 */

function stopHandler() {
    clearInterval(watchIntervalTimer);
    watchIntervalTimer = null;  // So we can identify that it's reset.
}

/*
 * Declare the two eventlisener Start and Stop. 
*/

Start.addEventListener('click', startHandler);
Stop.addEventListener('click', stopHandler);

/*
 * Declar the variabels: seconds, milliseconds, d and timePassed 
 * Then calling up the function updatelabel.
 */ 

let seconds;
let milliseconds = null;
let d = null;
let timePassed = 0;
updateLabel();

/*
 * Declare the function updateTimer. This function updates the timer
 * Then it calculate the time that have passed, inside the variabel timePassed.
 * It also calculate time that have passed since the code started to run.
 */ 

function updateTimer() {
    timePassed += Date.now() - countingSince;
    countingSince = Date.now();
    updateLabel();
}

/*
 * Declare the function updateLabel
 */
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

/*
 * Export the 4 functions startHandler, stopHandler, updateTimer, updateLabel to main.js
 */
