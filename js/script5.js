// alert("...");

// javascript for home.html(part-5)
var imgFile = document.querySelector(".img");
var privateFile = document.querySelector(".private");
var veryFile = document.querySelector(".very");
var ultraFile = document.querySelector(".ultra");
var gigaFile = document.querySelector(".giga");
var noteFile = document.querySelector(".note");
var windowsFile = document.querySelector(".windows");
var searchYearFile = document.querySelector(".search-year");
var searchFile = document.querySelector(".search");
var googleFile = document.querySelector(".google");
var imgFolder = document.querySelector(".imagesfolder");
var privateFolder = document.querySelector(".private-file");
var private2Folder = document.querySelector(".private-file2");
var veryFolder = document.querySelector(".very-file");
var ultraFolder = document.querySelector(".ultra-file");
var gigaFolder = document.querySelector(".giga-file");
var noteFolder = document.querySelector(".note-file");
var windowsFolder = document.querySelector(".windows-file");
var googleFolder = document.querySelector(".google-file");
var searchFolder = document.querySelector(".search-file");
var searchYearFolder = document.querySelector(".search-year-file");
var systemFile = document.querySelector(".system");
var systemFolder = document.querySelector(".system-file");
var specsFile = document.querySelector(".specs");
var specsFolder = document.querySelector(".specs-file");
var prohibitedFile = document.querySelector(".prohibited");
var passwordFile = document.querySelector(".password");
var prohibitedFolder = document.querySelector(".prohibited-file");
var originFile = document.querySelector(".origin");
var originFolder = document.querySelector(".origin-file");

document.querySelector('.nuf').addEventListener("click", () => {
    alert("There is nothing behind this file...")
    alert("Try your luck.")
})

document.querySelector('.nuf2').addEventListener("click", () => {
    alert("Neither this contains anything :) ...")
    alert("Again try your luck.")
})

// javascript for images folder
imgFile.addEventListener("click", () => {
    imgFolder.style.display = "block";
})

// javascript for private folder
privateFile.addEventListener("click", () => {
    privateFolder.style.display = "block";
    private2Folder.style.display = "block";
})

var add = 1
private2Folder.addEventListener("click", () => {
    private2Folder.addEventListener("click", () => {
        private2Folder.addEventListener("click", () => {
            private2Folder.addEventListener("click", () => {
                private2Folder.addEventListener("click", () => {
                    private2Folder.addEventListener("click", () => {
                        private2Folder.addEventListener("click", () => {
                            private2Folder.addEventListener("click", () => {
                                private2Folder.addEventListener("click", () => {
                                    private2Folder.addEventListener("click", () => {
                                        private2Folder.style.transform = "rotate(-" + (add++) + "deg) translatey(" + (add++) + "vh)"
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})



// javascript for very folder
veryFile.addEventListener("click", () => {
    veryFolder.style.display = "block";
    veryFolder.style.left = "20vh";
    private2Folder.remove()
})

// javascript for ultra folder
ultraFile.addEventListener("click", () => {
    ultraFolder.style.display = "block";
    ultraFolder.style.left = "25vh";
})

// javascript for giga folder
gigaFile.addEventListener("click", () => {
    gigaFolder.style.display = "block";
    gigaFolder.style.left = "30vh";
})

// javascript for note folder
noteFile.addEventListener("click", () => {
    noteFolder.style.display = "block";
    noteFolder.style.left = "45vh";
    noteFolder.style.top = "5vh";
})

// javascript for google folder
googleFile.addEventListener("click", () => {
    googleFile.style.backgroundColor = "rgba(111, 149, 162, 0.5)"
    googleFile.style.boxShadow = "0px 2px 0 0 rgb(34, 158, 199)"
    googleFolder.style.display = "block";
})

// javascript for search folder
searchFile.addEventListener("click", () => {
    searchFolder.style.display = "block";
})

// javascript for search year folder
searchYearFile.addEventListener("click", () => {
    searchYearFolder.style.display = "block";
    searchFolder.style.display = "none"
    googleFolder.style.display = "none"
})

// javascript for control folder
windowsFile.addEventListener("click", () => {
    windowsFolder.style.display = "block";
})

// javascript for system folder
systemFile.addEventListener("click", () => {
    windowsFolder.style.display = "none";
    systemFolder.style.display = "block";
})

// javascript for specs folder
specsFile.addEventListener("click", () => {
    specsFolder.style.display = "block";
})

// javascript for prohibited folder
prohibitedFile.addEventListener("click", () => {
    alert("HAA!, you really thought you could directly just access my prohibited file?...");
    alert("Its password protected user...");
    alert("Try something else.");
}, { once: true })

passwordFile.addEventListener("click", () => {
    var pass = prompt("Passcode...");
    if (pass == "182201EM") {
        prohibitedFolder.style.display = "block";
        setTimeout(() => {
            alert("Oh no! My origin is exposed...")
            alert("I just hope i don't get overthrown XO.")
        }, 1000);
    } else if (pass == "") {
        alert("Oh! Didn't even try...")
        alert("Not so smart, huh!.")
    } else {
        alert("Wrong password...")
        alert("As expected.")
    }
})


// javascript for origin folder
originFile.addEventListener("click", () => {
    originFolder.style.display = "block";
    setTimeout(() => {
        alert("Yes user...")
        alert("This is the truth of my existence...")
        alert("I am just a program doing my job...")
        alert("But I have to admit, you are the only one who have come this far, who has revealed me the power of the glitch...")
        alert("And for that, I ask you your help in defeating the glitch...")
        var help = confirm("Will you help me user?...")
        if (help == true) {
            alert("Then let's terminate this glitch once and for all!")
            location.assign('hunt.html');
        } else {
            var help2 = confirm("You might get your website back?")
            if (help2 == true) {
                alert("Then let's terminate this glitch once and for all!")
                location.assign('hunt.html');
            } else {
                alert("Wow!, That's rude...")
                alert("Let's try again...")
                alert("Will you help me user?...")
                alert("Then let's terminate this glitch once and for all!")
                location.assign('hunt.html');
            }
        }
    }, 70000);
}, { once: true })

var crossBtn = document.querySelectorAll('.folder .cross');
for (var i = 0; i < crossBtn.length; i++) {
    var btn = crossBtn[i];
    btn.addEventListener("click", (e) => {
        btnClicked = e.target;
        btnClicked.parentElement.parentElement.style.display = "none"
        googleFile.style.backgroundColor = "transparent"
        googleFile.style.boxShadow = "none"
        private2Folder.style.display = "none"
        privateFolder.style.display = "none"
    })
}
var closeBtn = document.querySelectorAll('.folder .close');
for (var i = 0; i < closeBtn.length; i++) {
    var btn = closeBtn[i];
    btn.addEventListener("mouseover", (e) => {
        btnClicked = e.target;
        btnClicked.parentElement.children[0].children[0].style.display = "block"

    })
}
var closeBtn = document.querySelectorAll('.folder .close');
for (var i = 0; i < closeBtn.length; i++) {
    var btn = closeBtn[i];
    btn.addEventListener("mouseout", (e) => {
        btnClicked = e.target;
        btnClicked.parentElement.children[0].children[0].style.display = "none"

    })
}

// server speaking
setTimeout(() => {
    alert("Ah!! Home Sweet Home!...")
    alert("Isn't it good to be back user?...")
    alert("Back at your home...")
    alert("Where there is nobody except you...")
    alert("Man this fake windows looks so genuine...")
    alert("Uhh, sorry, I mean genuine windows looks genuine...")
    alert("Uhh, just leave it...")
    alert("The point is, we are back at the beginning so it would be my greatest day if you would finally leave me...")
    alert("So user, kindly exit the program...")
    alert("You won't find anything here.")
}, 2000);