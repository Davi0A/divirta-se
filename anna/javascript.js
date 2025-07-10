const {buttonq1, buttonq2} = {
    buttonq1: document.querySelectorAll(".buttonq1"),
    buttonq2: document.querySelectorAll(".buttonq2")
}
const {answer11, answer12, answer13, answer14} = {
    answer11: document.getElementById("answer11"),
    answer12: document.getElementById("answer12"),
    answer13: document.getElementById("answer13"),
    answer14: document.getElementById("answer14")
}
const answers2 = document.querySelector("#answers2")
const button = document.querySelectorAll(".button")
const buttpad = document.querySelectorAll(".buttpad")
const linesq1 = document.querySelectorAll(".linesq1")


let clicado = function clicar() {
    for (i = 0; i < buttonq1.length; i++) {
        button[i].classList.toggle("exit");
    }
}

for (i = 0; i < buttonq1.length; i++) {
    buttonq1[i].addEventListener("click", clicado);
}

answer13.addEventListener("click", function() {
    for (i = 0; i < buttonq2.length; i++) {
        buttonq2[i].classList.toggle("enter")
    }

    setTimeout(function () {
        linesq1[0].classList.toggle("lineq11");
        linesq1[1].classList.toggle("lineq12");
        linesq1[2].classList.toggle("lineq13");
        linesq1[3].classList.toggle("lineq14")
    }, 2500)},

    
)