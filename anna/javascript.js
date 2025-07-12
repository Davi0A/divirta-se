const contquest = document.querySelector("#contquest")
const startpad = document.querySelector("#startpad")
const {buttonq1, buttonq2, buttonq3, buttonq4, buttonq5} = {
    buttonq1: document.querySelectorAll(".buttonq1"),
    buttonq2: document.querySelectorAll(".buttonq2"),
    buttonq3: document.querySelectorAll(".buttonq3"),
    buttonq4: document.querySelectorAll(".buttonq4"),
    buttonq5: document.querySelectorAll(".buttonq5")
}
const {linesq1, linesq2, linesq3, linesq4, linesq5} = {
    linesq1: document.querySelectorAll(".linesq1"),
    linesq2: document.querySelectorAll(".linesq2"),
    linesq3: document.querySelectorAll(".linesq3"),
    linesq4: document.querySelectorAll(".linesq4"),
    linesq5: document.querySelectorAll(".linesq5")
}
const {answers1, answers2, answers3, answers4, answers5} = {
    answers1: document.getElementById("answers1"),
    answers2: document.getElementById("answers2"),
    answers3: document.getElementById("answers3"),
    answers4: document.getElementById("answers4"),
    answers5: document.getElementById("answers5")
}
const {answer11, answer12, answer13, answer14} = {
    answer11: document.getElementById("answer11"),
    answer12: document.getElementById("answer12"),
    answer13: document.getElementById("answer13"),
    answer14: document.getElementById("answer14")
}
const {answer21, answer22, answer23, answer24} = {
    answer21: document.getElementById("answer21"),
    answer22: document.getElementById("answer22"),
    answer23: document.getElementById("answer23"),
    answer24: document.getElementById("answer24")
}
const {answer31, answer32, answer33, answer34} = {
    answer31: document.getElementById("answer31"),
    answer32: document.getElementById("answer32"),
    answer33: document.getElementById("answer33"),
    answer34: document.getElementById("answer34")
}
const {answer41, answer42, answer43, answer44} = {
    answer41: document.getElementById("answer41"),
    answer42: document.getElementById("answer42"),
    answer43: document.getElementById("answer43"),
    answer44: document.getElementById("answer44")
}
const {answer51, answer52, answer53, answer54} = {
    answer51: document.getElementById("answer51"),
    answer52: document.getElementById("answer52"),
    answer53: document.getElementById("answer53"),
    answer54: document.getElementById("answer54")
}

const button = document.querySelectorAll(".button")
const buttpad = document.querySelectorAll(".buttpad")

let forQuest1 = new Promise ((resolve) => {
    startpad.addEventListener("click", function() {
        startpad.setAttribute("style", "animation: linesExit 1.5s ease; animation-fill-mode: forwards;")

        setTimeout (function () {
            answers1.setAttribute("style", "display: flex")
            contquest.setAttribute("style", "display: flex")

            for (i = 0; i < linesq1.length; i++) {
                linesq1[i].setAttribute("style", "display: block")
            }

            for (i = 0; i < buttonq1.length; i++) {
                buttonq1[i].classList.toggle(`enter${i+1}`)
            }
            
            for (i = 0; i < linesq1.length; i++) {
                linesq1[i].classList.toggle(`line${i+1}q`)}
        }, 1000)
        
        setTimeout (resolve(function () {
            for (i = 0; i < buttonq1.length; i++) {
                buttonq1[i].classList.remove(`enter${i+1}`)
                buttonq1[i].setAttribute("style", "opacity: 1")
            }
        }), 3600)
    })
})

let forQuest2 = new Promise ((resolve) => {
    answer13.addEventListener("click", function() {
        answers2.setAttribute("style", "display: flex")

        for (i = 0; i < buttonq1.length; i++) {
            buttonq1[i].classList.remove(`enter${i+1}`)
            buttonq1[i].classList.toggle(`exit${i+1}`)
        }

        for (i = 0; i < buttonq2.length; i++) {
            buttonq2[i].classList.toggle(`enter${i+1}`)
        }

        for (i = 0; i < linesq2.length; i++) {
            linesq2[i].setAttribute("style", "display: block")
        }

        for (i = 0; i < linesq1.length; i++) {
            linesq1[i].classList.remove(`line${i+1}q`)
            linesq1[i].classList.toggle(`linesexit`)
        }

        setTimeout(function () {
            for (i = 0; i < linesq2.length; i++) {
                linesq2[i].classList.toggle(`line${i+1}q`)
            }
        }, 500)

        setTimeout (resolve(function () {
            for (i = 0; i < buttonq2.length; i++) {
                buttonq2[i].classList.remove(`enter${i+1}`)
                buttonq2[i].setAttribute("style", "opacity: 1")
            }
        }), 3100)
    })
})

let forQuest3 = new Promise ((resolve) => {
    answer24.addEventListener("click", function() {
        answers3.setAttribute("style", "display: flex")

        for (i = 0; i < buttonq2.length; i++) {
            buttonq2[i].classList.remove(`enter${i+1}`)
            buttonq2[i].classList.toggle(`exit${i+1}`)
        }

        for (i = 0; i < buttonq3.length; i++) {
            buttonq3[i].classList.toggle(`enter${i+1}`)
        }

        for (i = 0; i < linesq3.length; i++) {
            linesq3[i].setAttribute("style", "display: block")
        }

        for (i = 0; i < linesq2.length; i++) {
            linesq2[i].classList.remove(`line${i+1}q`)
            linesq2[i].classList.toggle(`linesexit`)
        }

        setTimeout(function () {
            for (i = 0; i < linesq3.length; i++) {
                linesq3[i].classList.toggle(`line${i+1}q`)
            }
        }, 500)

        setTimeout (resolve(function () {
            for (i = 0; i < buttonq3.length; i++) {
                buttonq3[i].classList.remove(`enter${i+1}`)
                buttonq3[i].setAttribute("style", "opacity: 1")
            }
        }), 3100)
    })
})

let forQuest4 = new Promise ((resolve) => {
    answer31.addEventListener("click", function() {
        answers4.setAttribute("style", "display: flex")

        for (i = 0; i < buttonq3.length; i++) {
            buttonq3[i].classList.remove(`enter${i+1}`)
            buttonq3[i].classList.toggle(`exit${i+1}`)
        }

        for (i = 0; i < buttonq4.length; i++) {
            buttonq4[i].classList.toggle(`enter${i+1}`)
        }

        for (i = 0; i < linesq4.length; i++) {
            linesq4[i].setAttribute("style", "display: block")
        }

        for (i = 0; i < linesq3.length; i++) {
            linesq3[i].classList.remove(`line${i+1}q`)
            linesq3[i].classList.toggle(`linesexit`)
        }

        setTimeout(function () {
            for (i = 0; i < linesq4.length; i++) {
                linesq4[i].classList.toggle(`line${i+1}q`)
            }
        }, 500)

        setTimeout (resolve(function () {
            for (i = 0; i < buttonq4.length; i++) {
                buttonq4[i].classList.remove(`enter${i+1}`)
                buttonq4[i].setAttribute("style", "opacity: 1")
            }
        }), 3100)
    })
})

let forQuest5 = new Promise ((resolve) => {
    answer43.addEventListener("click", function() {
        answers5.setAttribute("style", "display: flex")

        for (i = 0; i < buttonq4.length; i++) {
            buttonq4[i].classList.remove(`enter${i+1}`)
            buttonq4[i].classList.toggle(`exit${i+1}`)
        }

        for (i = 0; i < buttonq5.length; i++) {
            buttonq5[i].classList.toggle(`enter${i+1}`)
        }

        for (i = 0; i < linesq5.length; i++) {
            linesq5[i].setAttribute("style", "display: block")
        }

        for (i = 0; i < linesq4.length; i++) {
            linesq4[i].classList.remove(`line${i+1}q`)
            linesq4[i].classList.toggle(`linesexit`)
        }

        setTimeout(function () {
            for (i = 0; i < linesq5.length; i++) {
                linesq5[i].classList.toggle(`line${i+1}q`)
            }
        }, 500)

        setTimeout (resolve (function () {
            for (i = 0; i < buttonq5.length; i++) {
                buttonq5[i].classList.remove(`enter${i+1}`)
                buttonq5[i].setAttribute("style", "opacity: 1")
            }
        }), 3100)
    })
})

async function delaysExit() {
    await forQuest2(forQuest1)
    await forQuest3(forQuest2)
    await forQuest4(forQuest3)
    await forQuest5(forQuest4)
}