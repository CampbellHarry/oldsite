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