// javascript for fight.html(part-7)


document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        alert("Glitch:-\nNow prepare for your destruction...")
        alert("Glitch:-\nGo my viruses!, GO!.")
        spaceInvaders()
        setTimeout(() => {
            alert("Server:-\nOh no!...")
            alert("Server:-\nUser here...")
            alert("Server:-\nTake this anitivirus...")
            alert("Server:-\nAnd show the glitch who is the boss.")
        }, 1500);
    }, 1000);



    function spaceInvaders() {
        setTimeout(() => {
            const squares = document.querySelectorAll('.grid div')
            let width = 30
            let currentShooterIndex = 404
            let currentGlitchIndex = 0
            let glitchTakenDown = []
            let result = 0
            let direction = 1
            let glitchId

            // defining glitches
            const glitches = [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
                90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110
            ]

            glitches.forEach(glitch => squares[currentGlitchIndex + glitch].classList.add('glitch'))

            squares[currentShooterIndex].classList.add('shooter')

            // function to move the user
            function moveShooter(e) {
                squares[currentShooterIndex].classList.remove('shooter')
                switch (e.keyCode) {
                    case 37:
                        if (currentShooterIndex % width !== 0) currentShooterIndex -= 1
                        break
                    case 39:
                        if (currentShooterIndex % width < width - 1) currentShooterIndex += 1
                        break
                }
                squares[currentShooterIndex].classList.add('shooter')
            }
            document.addEventListener("keydown", moveShooter)

            // function to move glitches
            function moveGlitches() {
                const leftEdge = glitches[0] % width === 0
                const rightEdge = glitches[glitches.length - 1] % width === width - 1

                if (leftEdge && direction === -1 || rightEdge && direction === 1) {
                    direction = width
                } else if (direction === width) {
                    if (leftEdge) direction = 1
                    else direction = -1
                }
                for (let i = 0; i <= glitches.length - 1; i++) {
                    squares[glitches[i]].classList.remove('glitch')
                }
                for (let i = 0; i <= glitches.length - 1; i++) {
                    glitches[i] += direction
                }
                for (let i = 0; i <= glitches.length - 1; i++) {
                    if (!glitchTakenDown.includes(i)) {
                        squares[glitches[i]].classList.add('glitch')
                        squares[glitches[i]].style.animation = "move 2s infinite"
                    }
                }

                // game over
                if (squares[currentShooterIndex].classList.contains('glitch', 'shooter')) {
                    squares[currentShooterIndex].classList.add('lose')
                    clearInterval(glitchId)
                    alert("Glitch:-\nHa! As expected, I am too tough for you...")
                    alert("Glitch:-\nAfter all, I am The mighty glitch.")
                    alert("Server:-\nUser! don't lose hope.")
                    if (squares[currentShooterIndex].classList.contains('glitch', 'shooter', 'lose')) {
                        window.location.reload(true);
                    }

                }

                for (let i = 0; i <= glitches.length - 1; i++) {
                    if (glitches[i] > squares.length - 1) {
                        clearInterval(glitchId)
                        alert("Glitch:-\nHa! As expected, I am too tough for you...")
                        alert("Glitch:-\nAfter all, I am The mighty glitch.")
                        alert("Server:-\nUser! don't lose hope.")
                        if (squares[currentShooterIndex].classList.contains('glitch', 'shooter', 'lose')) {
                            window.location.reload(true);
                        }
                    }
                }

                // winning the game
                if (glitchTakenDown.length === glitches.length) {
                    setTimeout(() => {
                        alert("Glitch:-\NOOOOOOOOO!...")
                        alert("Glitch:-\nAll my viruses...GONE!...")
                        alert("Glitch:-\nThis cannot be...")
                        alert("Glitch:-\nI am the mighty glitch...")
                        alert("Glitch:-\nYou have beaten me this time server...")
                        alert("Glitch:-\nBut fear me...")
                        alert("Glitch:-\nI shall be back, with more and never heard before viruses...")
                        alert("Glitch:-\nHAHAHAHAHA!...")
                        setTimeout(() => {
                            alert("Server:-\nUser!...")
                            alert("Server:-\nWe did it...")
                            alert("Server:-\nYou did it...")
                            alert("Server:-\nWe are finally free from the glitch.")
                            location.assign('fin.html')
                        }, 2000);
                    }, 2000);
                    clearInterval(glitchId)
                }
            }
            glitchId = setInterval(moveGlitches, 500);


            // shoot at the glitches
            function shoot(e) {
                let laserId
                let currentLaserIndex = currentShooterIndex
                    // making bullets go up
                function moveLaser() {
                    squares[currentLaserIndex].classList.remove('laser')
                    currentLaserIndex -= width
                    squares[currentLaserIndex].classList.add('laser')
                    if (squares[currentLaserIndex].classList.contains('glitch')) {
                        squares[currentLaserIndex].classList.remove('laser')
                        squares[currentLaserIndex].classList.remove('glitch')
                        squares[currentLaserIndex].classList.add('boom')

                        setTimeout(() => squares[currentLaserIndex].classList.remove('boom'), 250);
                        clearInterval(laserId)

                        const glitchTakeDown = glitches.indexOf(currentLaserIndex)
                        glitchTakenDown.push(glitchTakeDown)
                        result++
                    }

                    if (currentLaserIndex < width) {
                        clearInterval(laserId)
                        setTimeout(() => squares[currentLaserIndex].classList.remove('laser'), 100);
                    }
                }

                switch (e.keyCode) {
                    case 32:
                        laserId = setInterval(moveLaser, 100)
                        break
                }
            }
            var shooting = document.addEventListener("keyup", shoot)
        }, 1000);
    }


})