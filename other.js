document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById("soonish");
    let dots = 1;
    let increasing = true;

    function updateDots() {
        let dotsText = ".".repeat(dots);
        textElement.textContent = "Soon" + dotsText;

        if (increasing) {
            dots++;
            if (dots === 3) increasing = false;
        } else {
            dots--;
            if (dots === 1) increasing = true;
        }
    }

    setInterval(updateDots, 1000);
});
console.log("I am alive")

// scroll smother starts
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            if (entry.target.classList.contains('hidden')) {
                entry.target.classList.add('show');
            } else if (entry.target.classList.contains('hidden1')) {
                entry.target.classList.add('show1');
            } else if (entry.target.classList.contains('hidden2')) {
                entry.target.classList.add('show2');
            }
        } else {
            if (entry.target.classList.contains('hidden')) {
                entry.target.classList.remove('show');
            } else if (entry.target.classList.contains('hidden1')) {
                entry.target.classList.remove('show1');
            } else if (entry.target.classList.contains('hidden2')) {
                entry.target.classList.remove('show2');
            }
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden, .hidden1, .hidden2');

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