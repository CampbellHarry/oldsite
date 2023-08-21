// Text change script starts


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


// Text change script ends


// scroll smother starts


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

// scroll smother ends

// For the github clicker bank
function redirectToGitHub() {
    window.open("https://github.com/CampbellHarry/Banking1", "_blank");
}

// for github clicker ticket

function redirectToGitHub2() {
    window.open("https://github.com/CampbellHarry/ticket", "_blank");
}

function redirectToGitHub3() {
    window.open("https://github.com/CampbellHarry/Aegis", "_blank");
}

function redirectToGitHub4() {
    window.open("https://github.com/CampbellHarry/icons", "_blank");
}

// no peek starts



// no peek ends

// date starts

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

var date4 = new Date('8/4/2023');
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


// lang starts with top bar for days

const date = new Date();
const hr = date.getHours();
let currentLanguage = "en"; // Default language is English

// Translations for different languages
const translations = {
    en: {
        morning: "Good morning, Welcome to my portfolio!",
        afternoon: "Good afternoon, Welcome to my portfolio!",
        evening: "Good evening, Welcome to my portfolio!"
    },
    es: {
        morning: "¡Buenos días, Bienvenido a mi portafolio!",
        afternoon: "Buenas tardes, Bienvenido a mi portafolio!",
        evening: "Buena noche, Bienvenido a mi portafolio!"
    },
    // Add more languages and translations as needed
};

function updateWelcomeText() {
    const welcomeTextElement = document.getElementById("welcomeText");
    
    if (hr < 12) {
        welcomeTextElement.textContent = translations[currentLanguage].morning;
    } else if (hr < 18) {
        welcomeTextElement.textContent = translations[currentLanguage].afternoon;
    } else {
        welcomeTextElement.textContent = translations[currentLanguage].evening;
    }
}

// Call the function to update the welcome text when the page loads
window.onload = updateWelcomeText;

// Example of changing language
function changeLanguage(language) {
    currentLanguage = language;
    updateWelcomeText();
}
// date ends

// offline?
const offlineMarker = document.getElementById('offline-marker');

function updateOfflineMarker() {
  if (!navigator.onLine) {
    offlineMarker.style.display = 'block';
  } else {
    offlineMarker.style.display = 'none';
  }
}

// Initial check and event listeners
updateOfflineMarker();

window.addEventListener('online', updateOfflineMarker);
window.addEventListener('offline', updateOfflineMarker);

// mobile?
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const menuList = document.getElementById('menuList');

    mobileMenuButton.addEventListener('click', function() {
        menuList.classList.toggle('show');
    });
});

