let correct = 0;
let fail = 0;

const username = document.getElementById("username");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const username1 = document.getElementById("username1");
const date = document.getElementById("date");
const content = document.getElementById("content");
const flags = document.getElementById("flags");

const timestampElement = document.getElementById('date');
const timestamp = new Date();
timestampElement.innerText = timestamp;

let flaggedItems;

function fetchFlaggedItem() {
    if (flaggedItems.length > 0) {
        const item = flaggedItems.pop();
        displayFlaggedItem(item);
    } else {
        console.log("No more flagged items to display");
    }
}

fetch('flaggedItems.json')
    .then(response => response.json())
    .then(data => {
        flaggedItems = data;
        fetchFlaggedItem();
    })
    .catch(error => console.error('Error:', error));

function updateStats() {
    const statsElement = document.getElementById("stats");
    if (statsElement) {
        statsElement.innerText = `Correct: ${correct}, Fail: ${fail}`;
    }
}

function clearContent() {
    if (img1) {
        img1.src = "";
    }
    if (img2) {
        img2.src = "";
    }
    if (username1) {
        username1.innerText = "";
    }
    if (date) {
        date.innerText = "";
    }
    if (content) {
        content.innerText = "";
    }
    if (flags) {
        flags.innerText = "";
    }
    const warn = document.getElementById("warn");
    const suspend = document.getElementById("suspend");
    const ban = document.getElementById("ban");
    const noact = document.getElementById("noact");

    if (warn) {
        warn.disabled = false;
    }
    if (suspend) {
        suspend.disabled = false;
    }
    if (ban) {
        ban.disabled = false;
    }
    if (noact) {
        noact.disabled = false;
    }

    fetchFlaggedItem();
}

function displayFlaggedItem(item) {
    console.log('Displaying flagged item:', item);
    if (img1) {
        img1.src = item.pfp;
        console.log('Setting img1 source to:', item.pfp);
    }
    if (img2) {
        img2.src = item.pfp; // Set img2 source to item.pfp
        console.log('Setting img2 source to:', item.pfp);
    }
    if (username1) {
        username1.innerText = item.username;
    }
    if (username) {
        username.innerText = item.username;
    }
    if (content) {
        content.innerText = item.content;
    }
    if (flags) {
        flags.innerText = item.flags;
    }
}

const warn = document.getElementById("warn");
const suspend = document.getElementById("suspend");
const ban = document.getElementById("ban");
const noact = document.getElementById("noact");

if (warn) {
    warn.addEventListener("click", function() {
        const username = username1.innerText;
        const action = "warn";
        const confirmMessage = `Are you sure you want to ${action} ${username}?`;
        if (confirm(confirmMessage)) {
            correct++;
            console.log(correct)
            updateStats();
            clearContent();
        }
    });
}

if (suspend) {
    suspend.addEventListener("click", function() {
        const username = username1.innerText;
        const action = "suspend";
        const confirmMessage = `Are you sure you want to ${action} ${username}?`;
        if (confirm(confirmMessage)) {
            correct++;
            console.log(correct)
            updateStats();
            clearContent();
        }
    });
}

if (ban) {
    ban.addEventListener("click", function() {
        const username = username1.innerText;
        const action = "ban";
        const confirmMessage = `Are you sure you want to ${action} ${username}?`;
        if (confirm(confirmMessage)) {
            correct++;
            console.log(correct)
            updateStats();
            clearContent();
        }
    });
}

if (noact) {
    noact.addEventListener("click", function() {
        fail++;
        updateStats();
        clearContent();
    });
}

function fetchFlaggedItem() {
    if (flaggedItems.length > 0) {
        const randomIndex = Math.floor(Math.random() * flaggedItems.length);
        const item = flaggedItems[randomIndex];
        displayFlaggedItem(item);
    } else {
        console.log("No more flagged items to display");
    }
}
console.log(correct)