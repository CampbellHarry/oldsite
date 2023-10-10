// main.js

// Function to update the moderation notification with user input
function updateNotification(e) {
    e.preventDefault();

    // Get user input values
    var username = document.getElementById("userr").value;
    var time = document.getElementById("timee").value;
    var modnote = document.querySelector('[name="moderation"]').value;
    var reason = document.getElementById("reasonn").value;
    var prohibited = document.getElementById("prooff").value;
    var fileInput = document.getElementById("pfpp");
    var profilePicture = fileInput.files[0];

    var actions = "";
    switch (modnote) {
        case "Moderation Action discussed":
            actions = "Warning.";
            break;
        case "Username Violation.":
            actions = "Your account has been deleted.";
            break;
        case "Spamming.":
            actions = "Chat Limited for 2 days";
            break;
        case "Illegal content.":
            actions = "Reported to the correct authorities and Account Termination";
            break;
        case "Discrimination.":
            actions = "Account Suspension for 2 days";
            break;
        case "Scamming.":
            actions = "Account Termination";
            break;
        case "Hacking.":
            actions = "Account Termination";
            break;
        default:
            actions = "Warning - Automated.";
    }

    // Update the notification elements with user input and determined action
    document.getElementById("username").textContent = username + ",";
    document.getElementById("time").textContent = "Reviewed at: " + time + " (LOCAL TIME)";
    document.getElementById("times").textContent = time;
    document.getElementById("modnote").textContent = modnote;
    document.getElementById("reason").textContent = reason;
    document.getElementById("modnotee").textContent = modnote;
    document.getElementById("prohibited").textContent = prohibited;
    document.getElementById("actions").textContent = actions;
    document.getElementById("usernamee").textContent = username;
    document.querySelector('.warnbox').style.opacity = "1";


    if (profilePicture) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var profilePicPreview = document.getElementById("profilePicPreview");
            profilePicPreview.src = e.target.result;
            profilePicPreview.style.display = "block";
        }
        reader.readAsDataURL(profilePicture);
    }
}

// Event listener to trigger the updateNotification function when the form is submitted
document.getElementById("moderationForm").addEventListener("submit", function (e) {
    updateNotification(e);
});

// Event listener to trigger the updateNotification function when the form is submitted
document.getElementById("moderationForm").addEventListener("submit", function (e) {
    updateNotification(e);
});
