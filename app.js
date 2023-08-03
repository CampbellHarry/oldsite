const textElements1 = document.querySelectorAll('.box1-text');
const textElements2 = document.querySelectorAll('.box2-text');
let currentIndex1 = 0;
let currentIndex2 = 0;

function showNextText() {
    textElements1[currentIndex1].style.display = 'none';
    currentIndex1 = (currentIndex1 + 1) % textElements1.length;
    textElements1[currentIndex1].style.display = 'inline';

    textElements2[currentIndex2].style.display = 'none';
    currentIndex2 = (currentIndex2 + 1) % textElements2.length;
    textElements2[currentIndex2].style.display = 'inline';
}

// Show the first text elements
textElements1[currentIndex1].style.display = 'inline';
textElements2[currentIndex2].style.display = 'inline';

// Call the showNextText function every 3 seconds (2000 milliseconds)
setInterval(showNextText, 3000);

document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
// Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
if (
event.keyCode === 123 ||
ctrlShiftKey(e, 'I') ||
ctrlShiftKey(e, 'J') ||
ctrlShiftKey(e, 'C') ||
(e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
)
return false;
};
  






const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
        entry.target.classList.add('show');
    } else{
        entry.target.classList.remove('show');
    }
});
});

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));


document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[data-scroll]');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const target = document.getElementById(this.dataset.scroll);
            const topOffset = 70;
            const elementposition = target.getBoundingClientRect().top;
            const offsetPosition = elementposition - topOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            })
        })
    })
})

// For the github clicker bank
function redirectToGitHub() {
    window.open("https://github.com/IT-Sav/Banking1", "_blank");
}

// for github clicker ticket

function redirectToGitHub2() {
    window.open("https://github.com/IT-Sav/ticket", "_blank");
}

function redirectToGitHub3() {
    window.open("https://github.com/IT-Sav/react", "_blank");
}

function redirectToGitHub4() {
    window.open("https://github.com/IT-Sav/icons", "_blank");
}

var date1 = new Date('7/12/2023');
var date2 = new Date();
var difference = date2.getTime() - date1.getTime();
var days = Math.ceil(difference / (1000 * 3600 * 24));

// Find the <h2> element inside the <div class="projdays">
var h2Element = document.querySelector('.projdays h2');

// Update the content of the <h2> element with the calculated number of days
h2Element.textContent = days + ' days ago';

var date1 = new Date('7/12/2023');
var date2 = new Date();
var difference = date2.getTime() - date1.getTime();
var days = Math.ceil(difference / (1000 * 3600 * 24));

// Find the <h2> element inside the <div class="projdays">
var h2Element = document.querySelector('.projdays h2');

// Update the content of the <h2> element with the calculated number of days
h2Element.textContent = days + ' days ago';

var date3 = new Date('6/24/2023');
var date2 = new Date();
var difference = date2.getTime() - date3.getTime();
var days = Math.ceil(difference / (1000 * 3600 * 24));

// Find the <h2> element inside the <div class="projdays">
var h2Element = document.querySelector('.projdays1 h2');

// Update the content of the <h2> element with the calculated number of days
h2Element.textContent = days + ' days ago';

var date4 = new Date('8/2/2023');
var date2 = new Date();
var difference = date2.getTime() - date4.getTime();
var days = Math.ceil(difference / (1000 * 3600 * 24));

// Find the <h2> element inside the <div class="projdays">
var h2Element = document.querySelector('.projdays2 h2');

// Update the content of the <h2> element with the calculated number of days
h2Element.textContent = days + ' days ago';

var date5 = new Date('8/2/2023');
var date2 = new Date();
var difference = date2.getTime() - date4.getTime();
var days = Math.ceil(difference / (1000 * 3600 * 24));

// Find the <h2> element inside the <div class="projdays">
var h2Element = document.querySelector('.projdays3 h2');

// Update the content of the <h2> element with the calculated number of days
h2Element.textContent = days + ' days ago';