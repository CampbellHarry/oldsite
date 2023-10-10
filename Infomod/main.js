var warningCount = 1;

document.getElementById("addButton").addEventListener("click", function() {
    if (warningCount < 5) {

        warningCount++;

        var timestamp = new Date().toLocaleString();
        var inputField = document.getElementById("inputField");
        var warnText = inputField.value;
        var fileInput = document.getElementById("pfpp");
        var profilePicture = fileInput.files[0];

        var newWarning = document.createElement("div");
        newWarning.classList.add("warning");

        var warningTitle;
        var suspendTitle = "<b>Suspension<b><br>Level " + (warningCount - 1) + " - This account has been suspended.";
        var banTitle = "<b>Permanent Ban<b><br> This account has been banned.";
        
        if (warningCount === 3) {
            warningTitle = suspendTitle;
        } else if(warningCount === 4) {
            warningTitle = suspendTitle + " (Final Warning)";
        } else if (warningCount === 5) {
            warningTitle = banTitle;
        } else {
            warningTitle = "<b>Warning<b><br>Level " + (warningCount - 1)  + " - This account has been warned.";
        }
        
        var warningMessage = "<h2>" + warningTitle + "</h2><p><strong>Timestamp:</strong> " + timestamp + "</p><p><strong>Reason:</strong> " + warnText + "</p>";
        

        newWarning.innerHTML = warningMessage;

        var linepoint = document.getElementById("linepoints" + warningCount);
        linepoint.style.transform = "scale(1.2)";

        var actionsContainer = document.getElementById("actions" + warningCount);
        actionsContainer.appendChild(newWarning);

        linepoint.classList.remove("hidden");

        var line = document.getElementById("line" + warningCount);
        line.classList.remove("hidden");

        var linepoint = document.getElementById("linepoints" + warningCount);
        linepoint.style.transform = "scale(1.2)";
        linepoint.style.transition = "0.5s ease-in";

        var linepointz = document.getElementById("linepointz");
        linepointz.classList.remove("hidden");

        // Remove previous warning level classes
        for (var i = 1; i <= 5; i++) {
            linepointz.classList.remove("pfpwar" + i);
        }

        // Add the new warning level class
        linepointz.classList.add("pfpwar" + warningCount);

    } else {
        alert("You've reached the maximum number of warnings (4).");
    }
    if (profilePicture) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var profilePicPreview = document.getElementById("profilePicPreview");
            profilePicPreview.src = e.target.result;
            profilePicPreview.style.display = "block";
        }
        reader.readAsDataURL(profilePicture);
    }
});

