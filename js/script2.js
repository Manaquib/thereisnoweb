// alert("...");

// javascript for lesson.html(part-2)
tauntAlert = setTimeout(() => {
    alert("Oh! Whats this?...");
    alert("So many sites!...");
    alert("Which one's yours?...");
    alert("Have a good time user :)");
    taunt2Alert = setTimeout(() => {
        alert("Yup, you have to try all of them...");
        alert("Take your time, What's the hurry, waste as much as you can.");
    }, 10000);
}, 2000);

var oneLineAlert = document.querySelectorAll('.oneline');
for (var i = 0; i < oneLineAlert.length; i++) {
    const btn = oneLineAlert[i];
    btn.addEventListener("click", () => {
        clearTimeout(tauntAlert);
        clearTimeout(taunt2Alert);
        alert("Nope.");
    })
}

var oneLine2Alert = document.querySelectorAll('.oneline2');
for (var i = 0; i < oneLine2Alert.length; i++) {
    const btn = oneLine2Alert[i];
    btn.addEventListener("click", () => {
        clearTimeout(tauntAlert);
        clearTimeout(taunt2Alert);
        alert("Nope, this neither.");
    })
}

var twoLineAlert = document.querySelectorAll('.twoline');
for (var i = 0; i < twoLineAlert.length; i++) {
    const btn = twoLineAlert[i];
    btn.addEventListener("click", () => {
        clearTimeout(tauntAlert);
        clearTimeout(taunt2Alert);
        alert("Stop it user...");
        alert("Quit trying.");
    })
}

var fiveLineAlert = document.querySelectorAll('.fiveline');
for (var i = 0; i < fiveLineAlert.length; i++) {
    const btn = fiveLineAlert[i];
    btn.addEventListener("click", () => {
        clearTimeout(tauntAlert);
        clearTimeout(taunt2Alert);
        alert("What!!...No!!...");
        alert("...");
        alert("...");
        alert("Haha, Gotcha...");
        alert("Go on, quit it already.");
    })
}

var correctBtn = document.querySelector('.correct');
correctBtn.addEventListener("click", () => {
    alert("Huh, there is no way you could pass that...");
    alert("Definitely it was a fluke...");
    alert("Even if you think your are smart you won't get past this one.");
    location.assign('questions.html');
})