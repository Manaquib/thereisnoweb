// alert("...");

// javascript for Wingsandflights.html(part-1)
var fakeBtn = document.querySelector('.fake-btn');
var realBtn = document.querySelector('.real-btn');
var wrongArrow = document.querySelector('.bottom');

setTimeout(() => {
    alert("Hello there user...");
    alert("So you are trying to access your website-wingsandflights?...");
    alert("But I am sorry to inform you that there is no site...");
    alert("I hope you are not too disappointed...");
    alert("You can do some other things like, read a book, watch a kdrama or just lay in bed...");
    alert("But there is unfortunately no website here...");
    alert("So I would suggest not to waste your precious time and leave this page...");
    alert("Your's affectionately, website...");
    alert("I mean, non-website.");
    aboutExitPage = setTimeout(() => {
        alert("Well go on user, what's the matter...");
        alert("Just leave the page.");
        aboutButtonAlert = setTimeout(() => {
            alert("Oh! So by scrolling you found the button...");
            alert("Just ignore it, it's nothing...");
            alert("There is no site...");
            alert("I won't be lying to you...");
            alert("Come on now, you can exit.");
        }, 3000);
    }, 5000);
}, 1500);

var btn;
fakeBtn.addEventListener("click", () => {
    clearTimeout(aboutExitPage);
    clearTimeout(aboutButtonAlert);
    falseBtnClick = setTimeout(() => {
        alert("Oh why did you have to do that?...");
        alert("I am telling you there is NO WEBSITE...");
        alert("Anyways nothing will happen because neither there is a working button nor a working website...");
        alert("So kindly exit the program.");
        setTimeout(() => {
            clearTimeout(falseBtnClick)
        }, 500);
    }, 0000);
}, { once: true });

wrongArrow.addEventListener("click", () => {
    wrongArrow.style.transform = "rotate(-90deg)";
    fakeBtn.style.zIndex = "-1";
})

realBtn.addEventListener("click", () => {
    alert("What!!!...No way!...");
    alert("So you are as stubborn as a mule, huh...");
    alert("Wait let me show you.");
    location.assign('lesson.html');
})