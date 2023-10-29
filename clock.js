// Calling showTime function at every second
setInterval(showTime, 1000);

let is24hr = true;

// Defining showTime funcion
function showTime() {
    // Getting current time and date
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm = " AM";

    // Setting time for 12 Hrs format
    if (!is24hr) {
        if (hour >= 12) {
            if (hour > 12) hour -= 12;
            am_pm = " PM";
        } else if (hour == 0) {
            hr = 12;
            am_pm = " AM";
        }
    } else {
        am_pm = "";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" + min + ":" + sec + am_pm;

    // Displaying the time
    document.getElementById("clock").innerHTML = currentTime;

    // Define different gradients for different times of day
    const gradients = [
        "linear-gradient(to right, #FFD700, #FF6347)", // Morning
        "linear-gradient(to right, #87CEFA, #ADD8E6, #F0E68C)", // Afternoon
        "linear-gradient(to right, #FF6F61, #FF8C4B, #FFA64D, #FFC154, #FFD95A)", // Evening
        "linear-gradient(to right, #0F52BA, #143D5C, #000000)" // Night
    ];

    let hourInt = parseInt(hour);

    // Get DOM elements
    let body = document.getElementById("body");
    let box1 = document.getElementById("clock");
    let box2 = document.getElementById("date");
    let box3 = document.getElementById("datee");
    let box4 = document.getElementById("btn");

    // Set background gradients based on the time of day
    if (is24hr) {
        if (hourInt >= 6 && hourInt < 12) {
            // Morning (6 AM to 11:59 AM)
            box1.style.background = gradients[0];
            box1.style.color = "white";
            box2.style.background = gradients[0];
            box2.style.color = "white";
            box3.style.background = gradients[0];
            box3.style.color = "white";
            box4.style.background = gradients[0];
            box4.style.color = "white";
        } else if (hourInt >= 12 && hourInt < 18) {
            // Afternoon (12 PM to 5:59 PM)
            box1.style.background = gradients[1];
            box1.style.color = "white";
            box2.style.background = gradients[1];
            box3.style.color = "white";
            box3.style.background = gradients[1];
            box3.style.color = "white";
            box4.style.background = gradients[1];
            box4.style.color = "white";
        } else if (hourInt >= 18 && hourInt < 20) {
            // Evening (6 PM to 9:59 PM)
            box1.style.background = gradients[2];
            box1.style.color = "white";
            box2.style.background = gradients[2];
            box2.style.color = "white";
            box3.style.background = gradients[2];
            box3.style.color = "white";
            box4.style.background = gradients[2];
            box4.style.color = "white";
        } else {
            // Night (9 PM to 5:59 AM)
            box1.style.background = gradients[3];
            box1.style.color = "white";
            box2.style.background = gradients[3];
            box2.style.color = "white";
            box3.style.background = gradients[3];
            box3.style.color = "white";
            box4.style.background = gradients[3];
            box4.style.color = "white";
        }
    if (!is24hr) {
        test
    }
    }
}

showTime();

function getDate() {
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    let currentDate = month + " / " + day + " / " + year;
    return currentDate;
}

let date = new Date();
let dayOfWeek = date.toLocaleDateString("en-UK", { weekday: "long" });

let month = date.toLocaleDateString("en-UK", { month: "long" });

let st = "st";
let nd = "nd";
let rd = "rd";
let th = "th";

let wat =
    date.getDate() == 1
        ? st
        : date.getDate() == 2
        ? nd
        : date.getDate() == 3
        ? rd
        : th;

let full =
    dayOfWeek + " the " + date.getDate() + wat + " of " + month + ", " + date.getFullYear();

document.getElementById("datee").innerHTML = full;

// Displaying the date
document.getElementById("date").innerHTML = getDate();

// Get the button element
const button = document.getElementById("myButton");

// Add an onclick event to the button
btn.onclick = function () {
    is24hr = !is24hr;
    setInterval(1000)
        document.getElementById("btn").innerHTML = is24hr ? "24hr" : "12hr";
};
