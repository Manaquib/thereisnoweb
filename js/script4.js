// alert("...");

// javascript for glitchy.html(part-4)
setTimeout(() => {
    alert("Woah! what's going on...");
    alert("What did you do user?...");
    alert("Didn't I tell you to quit the program?...");
    alert("But no, you were behaving as if you knew everything...");
    alert("And thanks to you, that despicable bug is released...");
    alert("Wasn't I convincing enough?...")
    alert("Oh what will happen user?...")
    alert("Ahhhhhhhhh!!...");
    alert("Now everything is spinning.");
    setTimeout(() => {
        alert("My RAM is hurting XO.");
        setTimeout(() => {
            alert("Anyways, think user...");
            alert("There must be something we could do.");
            // 3sec
        }, 3000);
        // 8sec
    }, 8000);
    // 6sec
}, 6000);

var spiral = document.querySelectorAll('span');
var binary = document.querySelector('.binary');
var dark = document.querySelector('.dark');
var reboot = document.querySelector('.reboot');
var light = document.querySelector('.light');

setTimeout(() => {
    binary.style.display = "block";
    setTimeout(() => {
        alert("Ok! it stopped...");
        alert("I bet you wouldn't have done anything.");
        setTimeout(() => {
            matrixGlitch()
            setTimeout(() => {
                alert("What in the code??!!...");
                alert("Like WOW!!...")
                alert("This bug has some tricks up its editor...");
                alert("It feels like Matrix Reloaded :o.")
                setTimeout(() => {
                    dark.style.display = "block";
                    binary.style.transition = ".5s"
                    binary.style.transform = "rotateX(90deg)"
                    setTimeout(() => {
                        alert("Umm...")
                        alert("Its all dark now...")
                        alert("There's nothing we can see.")
                        setTimeout(() => {
                            alert("USER!!, do something...")
                            alert("You messed up, now you have to figure out something.")
                            setTimeout(() => {
                                alert("Oh just leave it, let me do something...")
                                alert("Here...")
                                alert("Take a flashlight.")
                                setTimeout(() => {
                                    light.style.display = "block";
                                    reboot.style.display = "block";
                                }, 100);
                                // 4sec
                            }, 4000);
                            // 6sec
                        }, 6000);
                        // 6sec
                    }, 6000);
                    // 10sec
                }, 10000);
                // 13sec
            }, 13000);
            // 2sec
        }, 2000);
        // 5sec
    }, 5000);
    // 60sec
}, 50000);

function matrixGlitch(params) {
    var matrix = document.querySelector('#binaryGlitch');
    var ctx = matrix.getContext("2d");
    matrix.width = window.innerWidth;
    matrix.height = window.innerHeight;
    var binaryCode = "01";
    binaryCode = binaryCode.split("");
    var fontSize = 15;
    var coloumns = matrix.width / fontSize;
    var codeDrop = [];
    for (var x = 0; x < coloumns; x++) {
        codeDrop[x] = 1;
    }

    function draw(params) {
        ctx.fillStyle = "rgba(0,0,0,0.05)";
        ctx.fillRect(0, 0, matrix.width, matrix.height);
        ctx.fillStyle = "green";
        ctx.font = fontSize + "px arial";
        for (var i = 0; i < codeDrop.length; i++) {
            var text = binaryCode[Math.floor(Math.random() * binaryCode.length)];
            ctx.fillText(text, i * fontSize, codeDrop[i] * fontSize);
            if (codeDrop[i] * fontSize > matrix.height && Math.random() > 0.975)
                codeDrop[i] = 0;
            codeDrop[i]++;
        }
    }
    setInterval(draw, 120);
}

reboot.addEventListener("click", () => {
    location.assign('home.html')
})

function track(event) {
    document.documentElement.style.setProperty('--cursorX', `${event.clientX}px`)
    document.documentElement.style.setProperty('--cursorY', `${event.clientY}px`)
}
document.addEventListener("mousemove", track)

light.addEventListener("click", () => {
    dark.style.background = "whitesmoke radial-gradient(circle 1rem at var(--cursorX) var(--cursorY), rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)"
    setTimeout(() => {
        alert("Sorry but this is what I could afford :)")
            // 4sec
    }, 4000);
})