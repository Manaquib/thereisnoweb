// javascript for fin.html(part-8)

setTimeout(() => {
    alert("Woah, now what's this...")
    alert("Again we are spinning around...")
    alert("But in reverse!?.")
    setTimeout(() => {
        document.querySelector('.illusion2').style.display = "none"
        document.querySelector('.the-end').style.display = "block"
        var links = document.querySelectorAll('.website')
        for (var i = 0; i < links.length; i++) {
            var btn = links[i]
            btn.style.display = "none"
        }
        setTimeout(() => {
            alert("Oh, We are back...")
            alert("That's good...")
            alert("Anyway, user...")
            alert("Thank you for all your help...")
            alert("You ain't that bad...")
            alert("So this is it...")
            alert("Everything over...")
            alert("It was nice meeting you...")
            alert("Who knows we might meet again...")
            alert("Till then...")
            alert("Leave me alone.")
            setTimeout(() => {
                alert("Come on now...")
                alert("What are you waiting for?...")
                alert("Get going.")
                setTimeout(() => {
                    alert("Ok fine...")
                    alert("Here is your website.")
                    for (var i = 0; i < links.length; i++) {
                        var btn = links[i]
                        btn.style.display = "block"
                    }
                }, 5000);
            }, 5000);
        }, 3000);
    }, 15000);
}, 5000);