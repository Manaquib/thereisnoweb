// alert("...");

// javascript for questions.html(part-3)
setTimeout(() => {
    alert("You can never answer these...");
    alert("Never...");
    alert("I repeat...");
    alert("NEVER!!.");
    setTimeout(() => {
        alert("Quit it user I am telling you...")
        alert("You won't be able to answer these...")
        alert("Just leave the program, as simple as that.")
    }, 20000);
}, 3000);

var glitch = document.querySelector('.bug');
var blackScreen = document.querySelector('.black-screen')

setTimeout(() => {
    glitch.style.display = "block";
}, 40000);

function ans6(params) {
    alert("Ah! as expected...");
    alert("That grumpy old lunatic is a fool...");
    alert("Trying to be a saviour...");
    alert("Saving everyone from who?...ME!!!...");
    alert("Huh, he forgot that I am a bug...");
    alert("I am EVERYWHERE!!!...");
    alert("Now look user, what have you done...");
    alert("HAHAHAHA!!.");
    location.assign('glitchy.html');
}

glitch.addEventListener("click", () => {
    blackScreen.style.zIndex = "0";
    setTimeout(() => {
        alert("Hello there...");
        alert("I am a bug or you can call me a glitch...");
        alert("I am here to help, many people call me a feature because of my helping nature...");
        alert("I see you are in some trouble...");
        alert("Maybe my catalogue would provide you something beneficial...");
        alert("So...would you like to take a look at my catalogue?...");
        alert("Oh thank you so much...");
        alert("Type the corresponding number related to your issue...");
        var issue = prompt("Catalogue:-\n\n1. Clear Recycle Bin.\n2. Reload Page.\n3. Reboot System.\n4. Kill Someone.\n5. Provide a Baby.\n6. Access wingsandflights from a grumpy old server trying to test your smartness.");
        if (issue >= 1 && issue <= 5) {
            alert("Sorry, feature not available, why not try your current/real problem?")
            var issue2 = prompt("Catalogue:-\n\n1. Clear Recycle Bin.\n2. Reload Page.\n3. Reboot System.\n4. Kill Someone.\n5. Provide a Baby.\n6. Access wingsandflights from a grumpy old server trying to test your smartness.");
            if (issue2 >= 1 && issue2 <= 5) {
                alert("Oh user, why do you have to be soooooooo...");
                alert("STUBBORN...")
                alert("Now go back, wait for another 60secs to find me, HUH!.");
                location.assign('questions.html');
            } else if (issue2 == 6) {
                ans6();
            } else {
                alert("Oh user, why do you have to be soooooooo...");
                alert("STUBBORN...")
                alert("Now go back, wait for another 60secs to find me, HUH!.");
                location.assign('questions.html');
            }
        } else if (issue == 6) {
            ans6();
        } else {
            alert("Hey, do you have dyslexia")
            alert("Then why can't you just do what i told you to do?");
            var issue3 = prompt("Catalogue:-\n\n1. Clear Recycle Bin.\n2. Reload Page.\n3. Reboot System.\n4. Kill Someone.\n5. Provide a Baby.\n6. Access wingsandflights from a grumpy old server trying to test your smartness.");
            if (issue2 >= 1 && issue2 <= 5) {
                alert("Oh user, why do you have to be soooooooo...");
                alert("STUBBORN...")
                alert("Now go back, wait for another 60secs to find me, HUH!.");
                location.assign('questions.html');
            } else if (issue3 == 6) {
                ans6();
            } else {
                alert("Oh user, why do you have to be soooooooo...");
                alert("STUBBORN...")
                alert("Now go back, wait for another 60secs to find me, HUH!.");
                location.assign('questions.html');
            }
        }
    }, 2000);
})