/**
 * A simple Analog clock using JavaScript
 */

const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runTheClock() {
    // get current date and time
    var date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    // get correct degrees
    let hrPosition = (hr * 360/12) + (min * (360/60)/12);
    let minPosition = (min * 360/60) + (sec*(360/60)/60);
    let secPosition = sec * 360/60;

    // rotate the hands according to time
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

// call the function to move the hands second by second
var interval = setInterval(runTheClock, 1000);