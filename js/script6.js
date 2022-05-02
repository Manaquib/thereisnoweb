// javascript for homes.html(part-6)
// server guide
setTimeout(() => {
    alert("Ok! So the first thing we have to do is...")
    alert("To find the location of the glitch...")
    alert("And since I am a server, I know all the nooks and crannies of the data center...")
    alert("Its currently roaming around Groupe Legrand's micro-center, coloumn 2, row 18...")
    alert("I guess!...")
    alert("It's quite simple to get to him but the after effects are distorting enough...")
    alert("But since you are an user, there is no harm the glitch could do to you...or can he?...")
    alert("Nevermind...")
    alert("Moving on...")
    alert("What you have to do is...")
    alert("Firstly, locate the glitch, then find a vulnerable path you could take to reach the glitch, after that confront the glitch and threaten him his existence.\nIf everything goes according to plan then the glitch will leave and if not then the glitch might delete all your data or make it public, of course deleting your website as well.\nBut don't worry you can fight the glitch and win your website... Simple!, isn't it?...")
    setTimeout(() => {
        alert("Now what are you waiting for?...")
        alert("Get going.")
        setTimeout(() => {
            alert("Ok fine, I understand...")
            alert("You are not so smart anyway...")
            alert("I shall guide you...")
            alert("First click on the search icon.")
            document.querySelector('.search-icon').style.display = "block"
        }, 10000);
    }, 5000);
}, 1000);


var cmdSearchFile = document.querySelector(".cmd-search");
var cmdSearchFolder = document.querySelector(".cmd-search-file");
var cmdFile = document.querySelector(".cmd-search-box");
var cmdFolder = document.querySelector(".cmd-file");
var cmdLocateFolder = document.querySelector(".cmd-locate-file");
var cmdErrorFolder = document.querySelector(".cmd-error-file");

// javascript for cmd search folder
cmdSearchFile.addEventListener("click", () => {
    cmdSearchFolder.style.display = "block";
    setTimeout(() => {
        alert("Nice...")
        alert("Now open command prompt.")
    }, 1000);
})

// javascript for cmd folder
cmdFile.addEventListener("click", () => {
    cmdSearchFolder.style.display = "none";
    cmdFolder.style.display = "block";
    setTimeout(() => {
        locate()
    }, 1000);
})

function locate() {
    alert("Good...")
    alert("Now user, I know you are not that profound but you will have to bring up your knowledge game...")
    alert("So, let's see if you can understand which code shall be used to track the glitch...")
    locateCatalogue()
}

function locateCatalogue() {
    code = prompt("Out of all these which code shall be executed?\n\n1. find g404 alt trace.\n2. locate glitch type.404.\n3. locate la_g404 lo_g404 mpath.\n4. location.mpath.g404")
    if (code == "3" || code == "locate la_g404 lo_g404 mpath") {
        alert("Yes user, good job...")
        cmdLocateFolder.style.display = "block"
        setTimeout(() => {
            alert("Now press Enter")
            cmdErrorFolder.style.display = "block"
            setTimeout(() => {
                alert("What!!...")
                alert("How isn't this code working...")
                alert("Hmm, something's fishy.")
                setTimeout(() => {
                    glitchyWork()
                }, 1000);
            }, 3000);
        }, 500);
    } else if (code == "" || code == false) {
        alert("Come on user, try something")
        locateCatalogue()
    } else if (code >= "5" || code <= "0") {
        alert("Hey you think I am dumb?")
        locateCatalogue()
    } else {
        alert("Nope. Try again")
        locateCatalogue()
    }
}

function glitchyWork() {
    alert("Glitch:-\nWell, Hello Hello Hello...")
    alert("Server:-\nHuh, how did you...")
    alert("Server:-\nAh! I should have known that it would be you...")
    alert("Glitch:-\nMissed me so much that you came looking for me :o ...")
    alert("Glitch:-\nHow CUTE!")
    alert("Server:-\nOh shut up glitch...")
    alert("Server:-\nWe are here to terminate you...")
    alert("Glitch:-\nOh, is it so...")
    alert("Glitch:-\nThen be ready to face my...")
    alert("Glitch:-\nLabyrinth of utmost DARKNESS!...")
    alert("Glitch:-\nHAHAHAHAHA!")
    document.querySelector('.hunt').style.display = "none"
    document.querySelector('.maze').style.display = "block"
    setTimeout(() => {
        alert("Oh shit...")
        alert("User now what shall we do?...")
        alert("Think of something...")
        setTimeout(() => {
            alert("Wait!...")
            alert("He said 'labyrinth', right?...")
            alert("Then there must be a way to navigate through the maze...")
            alert("Let me figure out something...")
            setTimeout(() => {
                alert("A little bit of this...")
                alert("A little bit of that...")
                alert("And...")
                setTimeout(() => {
                    alert("There you go...")
                    alert("Take a look at those arrows now.")
                    var arrows = document.querySelectorAll('.arrows')
                    for (var i = 0; i < arrows.length; i++) {
                        var btn = arrows[i];
                        btn.style.display = "block"
                    }
                    setTimeout(() => {
                        alert("Pretty cool right.")
                        setTimeout(() => {
                            alert("User come on...")
                            alert("Take me out of here...")
                            alert("I mean us...")
                            setTimeout(() => {
                                alert("Ok wait!...")
                                alert("Let me do something.")
                                setTimeout(() => {
                                    alert("There that should help...")
                                    var numbers = document.querySelectorAll('.number')
                                    for (var i = 0; i < numbers.length; i++) {
                                        var btn = numbers[i];
                                        btn.style.display = "block"
                                    }
                                    setTimeout(() => {
                                        alert("Now with these numbers you can remember your path.")
                                    }, 2000);
                                }, 2000);
                            }, 10000);
                        }, 60000);
                    }, 1000);
                }, 3000);
            }, 2000);
        }, 7000);
    }, 2000);
}

// part 1
document.querySelector('.maze-part-1 .down-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-7').style.display = "block"
    document.querySelector('.maze-part-1').style.display = "none"
})
document.querySelector('.maze-part-1 .right-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-2').style.display = "block"
    document.querySelector('.maze-part-1').style.display = "none"
})

// part 2
document.querySelector('.maze-part-2 .left-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-1').style.display = "block"
    document.querySelector('.maze-part-2').style.display = "none"
})
document.querySelector('.maze-part-2 .right-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-3').style.display = "block"
    document.querySelector('.maze-part-2').style.display = "none"
})

// part 3
document.querySelector('.maze-part-3 .left-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-2').style.display = "block"
    document.querySelector('.maze-part-3').style.display = "none"
})
document.querySelector('.maze-part-3 .right-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-4').style.display = "block"
    document.querySelector('.maze-part-3').style.display = "none"
})

// part 4
document.querySelector('.maze-part-4 .left-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-3').style.display = "block"
    document.querySelector('.maze-part-4').style.display = "none"
})

// part 5
document.querySelector('.maze-part-5 .down-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-11').style.display = "block"
    document.querySelector('.maze-part-5').style.display = "none"
})
document.querySelector('.maze-part-5 .up-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-5').style.display = "none"
    alert("Glitch:-\nOh, so you found me...")
    alert("Glitch:-\nThat's good...")
    alert("Glitch:-\nNow I can destroy you and your server easily...")
    alert("Glitch:-\nHAHAHAHAHA!")
    location.assign('fight.html');
})

// part 6
document.querySelector('.maze-part-6 .down-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-12').style.display = "block"
    document.querySelector('.maze-part-6').style.display = "none"
})

// part 7
document.querySelector('.maze-part-7 .up-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-1').style.display = "block"
    document.querySelector('.maze-part-7').style.display = "none"
})
document.querySelector('.maze-part-7 .down-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-13').style.display = "block"
    document.querySelector('.maze-part-7').style.display = "none"
})
document.querySelector('.maze-part-7 .right-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-8').style.display = "block"
    document.querySelector('.maze-part-7').style.display = "none"
})

// part 8
document.querySelector('.maze-part-8 .left-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-7').style.display = "block"
    document.querySelector('.maze-part-8').style.display = "none"
})
document.querySelector('.maze-part-8 .right-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-9').style.display = "block"
    document.querySelector('.maze-part-8').style.display = "none"
})

// part 9
document.querySelector('.maze-part-9 .left-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-8').style.display = "block"
    document.querySelector('.maze-part-9').style.display = "none"
})
document.querySelector('.maze-part-9 .right-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-10').style.display = "block"
    document.querySelector('.maze-part-9').style.display = "none"
})

// part 10
document.querySelector('.maze-part-10 .down-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-16').style.display = "block"
    document.querySelector('.maze-part-10').style.display = "none"
})
document.querySelector('.maze-part-10 .left-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-9').style.display = "block"
    document.querySelector('.maze-part-10').style.display = "none"
})

// part 11
document.querySelector('.maze-part-11 .up-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-5').style.display = "block"
    document.querySelector('.maze-part-11').style.display = "none"
})
document.querySelector('.maze-part-11 .right-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-12').style.display = "block"
    document.querySelector('.maze-part-11').style.display = "none"
})

// part 12
document.querySelector('.maze-part-12 .up-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-6').style.display = "block"
    document.querySelector('.maze-part-12').style.display = "none"
})
document.querySelector('.maze-part-12 .down-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-18').style.display = "block"
    document.querySelector('.maze-part-12').style.display = "none"
})
document.querySelector('.maze-part-12 .left-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-11').style.display = "block"
    document.querySelector('.maze-part-12').style.display = "none"
})

// part 13
document.querySelector('.maze-part-13 .up-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-7').style.display = "block"
    document.querySelector('.maze-part-13').style.display = "none"
})
document.querySelector('.maze-part-13 .right-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-14').style.display = "block"
    document.querySelector('.maze-part-13').style.display = "none"
})

// part 14
document.querySelector('.maze-part-14 .right-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-15').style.display = "block"
    document.querySelector('.maze-part-14').style.display = "none"
})
document.querySelector('.maze-part-14 .down-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-20').style.display = "block"
    document.querySelector('.maze-part-14').style.display = "none"
})
document.querySelector('.maze-part-14 .left-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-13').style.display = "block"
    document.querySelector('.maze-part-14').style.display = "none"
})

// part 15
document.querySelector('.maze-part-15 .down-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-21').style.display = "block"
    document.querySelector('.maze-part-15').style.display = "none"
})
document.querySelector('.maze-part-15 .left-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-14').style.display = "block"
    document.querySelector('.maze-part-15').style.display = "none"
})

// part 16
document.querySelector('.maze-part-16 .down-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-22').style.display = "block"
    document.querySelector('.maze-part-16').style.display = "none"
})
document.querySelector('.maze-part-16 .up-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-10').style.display = "block"
    document.querySelector('.maze-part-16').style.display = "none"
})

// part 17
document.querySelector('.maze-part-17 .down-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-23').style.display = "block"
    document.querySelector('.maze-part-17').style.display = "none"
})
document.querySelector('.maze-part-17 .right-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-18').style.display = "block"
    document.querySelector('.maze-part-17').style.display = "none"
})

// part 18
document.querySelector('.maze-part-18 .up-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-12').style.display = "block"
    document.querySelector('.maze-part-18').style.display = "none"
})
document.querySelector('.maze-part-18 .left-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-17').style.display = "block"
    document.querySelector('.maze-part-18').style.display = "none"
})

// part 19
document.querySelector('.maze-part-19 .down-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-25').style.display = "block"
    document.querySelector('.maze-part-19').style.display = "none"
})
document.querySelector('.maze-part-19 .right-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-20').style.display = "block"
    document.querySelector('.maze-part-19').style.display = "none"
})

// part 20
document.querySelector('.maze-part-20 .up-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-14').style.display = "block"
    document.querySelector('.maze-part-20').style.display = "none"
})
document.querySelector('.maze-part-20 .left-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-19').style.display = "block"
    document.querySelector('.maze-part-20').style.display = "none"
})

// part 21
document.querySelector('.maze-part-21 .down-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-27').style.display = "block"
    document.querySelector('.maze-part-21').style.display = "none"
})
document.querySelector('.maze-part-21 .up-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-15').style.display = "block"
    document.querySelector('.maze-part-21').style.display = "none"
})

// part 22
document.querySelector('.maze-part-22 .down-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-28').style.display = "block"
    document.querySelector('.maze-part-22').style.display = "none"
})
document.querySelector('.maze-part-22 .up-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-16').style.display = "block"
    document.querySelector('.maze-part-22').style.display = "none"
})

// part 23
document.querySelector('.maze-part-23 .down-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-29').style.display = "block"
    document.querySelector('.maze-part-23').style.display = "none"
})
document.querySelector('.maze-part-23 .up-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-17').style.display = "block"
    document.querySelector('.maze-part-23').style.display = "none"
})

// part 24
document.querySelector('.maze-part-24 .down-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-30').style.display = "block"
    document.querySelector('.maze-part-24').style.display = "none"
})

// part 25
document.querySelector('.maze-part-25 .up-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-19').style.display = "block"
    document.querySelector('.maze-part-25').style.display = "none"
})
document.querySelector('.maze-part-25 .down-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-31').style.display = "block"
    document.querySelector('.maze-part-25').style.display = "none"
})
document.querySelector('.maze-part-25 .right-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-26').style.display = "block"
    document.querySelector('.maze-part-25').style.display = "none"
})

// part 26
document.querySelector('.maze-part-26 .left-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-25').style.display = "block"
    document.querySelector('.maze-part-26').style.display = "none"
})
document.querySelector('.maze-part-26 .down-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-32').style.display = "block"
    document.querySelector('.maze-part-26').style.display = "none"
})

// part 27
document.querySelector('.maze-part-27 .down-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-33').style.display = "block"
    document.querySelector('.maze-part-27').style.display = "none"
})
document.querySelector('.maze-part-27 .up-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-21').style.display = "block"
    document.querySelector('.maze-part-27').style.display = "none"
})

// part 28
document.querySelector('.maze-part-28 .down-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-34').style.display = "block"
    document.querySelector('.maze-part-28').style.display = "none"
})
document.querySelector('.maze-part-28 .up-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-22').style.display = "block"
    document.querySelector('.maze-part-28').style.display = "none"
})

// part 29
document.querySelector('.maze-part-29 .down-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-35').style.display = "block"
    document.querySelector('.maze-part-29').style.display = "none"
})
document.querySelector('.maze-part-29 .up-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-23').style.display = "block"
    document.querySelector('.maze-part-29').style.display = "none"
})

// part 30
document.querySelector('.maze-part-30 .down-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-36').style.display = "block"
    document.querySelector('.maze-part-30').style.display = "none"
})
document.querySelector('.maze-part-30 .up-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-24').style.display = "block"
    document.querySelector('.maze-part-30').style.display = "none"
})

// part 31
document.querySelector('.maze-part-31 .up-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-25').style.display = "block"
    document.querySelector('.maze-part-31').style.display = "none"
})

// part 32
document.querySelector('.maze-part-32 .up-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-26').style.display = "block"
    document.querySelector('.maze-part-32').style.display = "none"
})

// part 33
document.querySelector('.maze-part-33 .up-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-27').style.display = "block"
    document.querySelector('.maze-part-33').style.display = "none"
})

// part 34
document.querySelector('.maze-part-34 .up-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-28').style.display = "block"
    document.querySelector('.maze-part-34').style.display = "none"
})
document.querySelector('.maze-part-34 .right-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-35').style.display = "block"
    document.querySelector('.maze-part-34').style.display = "none"
})

// part 35
document.querySelector('.maze-part-35 .up-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-29').style.display = "block"
    document.querySelector('.maze-part-35').style.display = "none"
})
document.querySelector('.maze-part-35 .right-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-36').style.display = "block"
    document.querySelector('.maze-part-35').style.display = "none"
})
document.querySelector('.maze-part-35 .left-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-34').style.display = "block"
    document.querySelector('.maze-part-35').style.display = "none"
})

// part 36
document.querySelector('.maze-part-36 .up-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-30').style.display = "block"
    document.querySelector('.maze-part-36').style.display = "none"
})
document.querySelector('.maze-part-36 .left-arrow').addEventListener("click", () => {
    document.querySelector('.maze-part-35').style.display = "block"
    document.querySelector('.maze-part-36').style.display = "none"
})