const contquest = document.querySelector("#contquest")
const startpad = document.querySelector("#startpad")

const linesQuest = ["linesq1", "linesq2", "linesq3", "linesq4", "linesq5"]
const lines = Object.fromEntries(linesQuest.map(line => [line, document.querySelectorAll(`.${line}`)]))

const button = ["buttonq1", "buttonq2", "buttonq3", "buttonq4", "buttonq5"]
const buttonq = Object.fromEntries(button.map(button => [button, document.querySelectorAll(`.${button}`)]))

const answersq = ["answers1", "answers2", "answers3", "answers4", "answers5"]
const answers = Object.fromEntries(answersq.map(answer => [answer, document.getElementById(`${answer}`)]))

const answersq1 = ["answer11", "answer12", "answer13", "answer14", "answer15"]
const answers1 = Object.fromEntries(answersq1.map(answerq1 => [answerq1, document.getElementById(`${answerq1}`)]))

const answersq2 = ["answer21", "answer22", "answer23", "answer24", "answer25"]
const answers2 = Object.fromEntries(answersq2.map(answerq2 => [answerq2, document.getElementById(`${answerq2}`)]))

const answersq3 = ["answer31", "answer32", "answer33", "answer34", "answer35"]
const answers3 = Object.fromEntries(answersq3.map(answerq3 => [answerq3, document.getElementById(`${answerq3}`)]))

const answersq4 = ["answer41", "answer42", "answer43", "answer44", "answer45"]
const answers4 = Object.fromEntries(answersq4.map(answerq4 => [answerq4, document.getElementById(`${answerq4}`)]))

const answersq5 = ["answer41", "answer42", "answer43", "answer44", "answer45"]
const answers5 = Object.fromEntries(answersq5.map(answerq5 => [answerq5, document.getElementById(`${answerq5}`)]))

async function forQuest1() {
    return new Promise (function (resolve) {
        startpad.addEventListener("click", function() {
            startpad.setAttribute("style", "animation: linesExit 1.5s ease; animation-fill-mode: forwards;")

            setTimeout (function () {
                answers.answers1.setAttribute("style", "display: flex")
                contquest.setAttribute("style", "display: flex")

                for (i = 0; i < lines.linesq1.length; i++) {
                    lines.linesq1[i].setAttribute("style", "display: block")
                }

                for (i = 0; i < buttonq.buttonq1.length; i++) {
                    buttonq.buttonq1[i].classList.toggle(`enter${i+1}`)
                }
                
                for (i = 0; i < lines.linesq1.length; i++) {
                    lines.linesq1[i].classList.toggle(`line${i+1}q`)}
            }, 1000)
            
            setTimeout (function () {
                for (i = 0; i < buttonq.buttonq1.length; i++) {
                    buttonq.buttonq1[i].classList.remove(`enter${i+1}`)
                    buttonq.buttonq1[i].setAttribute("style", "opacity: 1")
                }
                resolve()
            }, 3500)
        })
    })
}

function configureQuestionTransition {

}


async function forQuest2() {
    return new Promise ( function (resolve) {
        answers1.answer13.addEventListener("click", function() {
            answers.answers2.setAttribute("style", "display: flex")

            for (i = 0; i < buttonq.buttonq1.length; i++) {
                buttonq.buttonq1[i].classList.remove(`enter${i+1}`)
                buttonq.buttonq1[i].classList.toggle(`exit${i+1}`)
            }

            for (i = 0; i < buttonq.buttonq2.length; i++) {
                buttonq.buttonq2[i].classList.toggle(`enter${i+1}`)
            }

            for (i = 0; i < lines.linesq2.length; i++) {
                lines.linesq2[i].setAttribute("style", "display: block")
            }

            for (i = 0; i < lines.linesq1.length; i++) {
                lines.linesq1[i].classList.remove(`line${i+1}q`)
                lines.linesq1[i].classList.toggle(`linesexit`)
            }

            setTimeout(function () {
                for (i = 0; i < lines.linesq2.length; i++) {
                    lines.linesq2[i].classList.toggle(`line${i+1}q`)
                }
            }, 500)

            setTimeout (function () {
                for (i = 0; i < buttonq.buttonq2.length; i++) {
                    buttonq.buttonq2[i].classList.remove(`enter${i+1}`)
                    buttonq.buttonq2[i].setAttribute("style", "opacity: 1")
                }
                resolve()
            }, 3000)
        })
    })
}

async function forQuest3() {
    return new Promise (function(resolve) {
        answers2.answer24.addEventListener("click", function() {
            answers.answers3.setAttribute("style", "display: flex")

            for (i = 0; i < buttonq.buttonq2.length; i++) {
                buttonq.buttonq2[i].classList.remove(`enter${i+1}`)
                buttonq.buttonq2[i].classList.toggle(`exit${i+1}`)
            }

            for (i = 0; i < buttonq.buttonq3.length; i++) {
                buttonq.buttonq3[i].classList.toggle(`enter${i+1}`)
            }

            for (i = 0; i < lines.linesq3.length; i++) {
                lines.linesq3[i].setAttribute("style", "display: block")
            }

            for (i = 0; i < lines.linesq2.length; i++) {
                lines.linesq2[i].classList.remove(`line${i+1}q`)
                lines.linesq2[i].classList.toggle(`linesexit`)
            }

            setTimeout(function () {
                for (i = 0; i < lines.linesq3.length; i++) {
                    lines.linesq3[i].classList.toggle(`line${i+1}q`)
                }
            }, 500)

            setTimeout (function () {
                for (i = 0; i < buttonq.buttonq3.length; i++) {
                    buttonq.buttonq3[i].classList.remove(`enter${i+1}`)
                    buttonq.buttonq3[i].setAttribute("style", "opacity: 1")
                resolve()
                }
            }, 3000)
        })
    })
}

async function forQuest4() {
    return new Promise (function(resolve) {
        answers3.answer31.addEventListener("click", function() {
            answers.answers4.setAttribute("style", "display: flex")

            for (i = 0; i < buttonq.buttonq3.length; i++) {
                buttonq.buttonq3[i].classList.remove(`enter${i+1}`)
                buttonq.buttonq3[i].classList.toggle(`exit${i+1}`)
            }

            for (i = 0; i < buttonq.buttonq4.length; i++) {
                buttonq.buttonq4[i].classList.toggle(`enter${i+1}`)
            }

            for (i = 0; i < lines.linesq4.length; i++) {
                lines.linesq4[i].setAttribute("style", "display: block")
            }

            for (i = 0; i < lines.linesq3.length; i++) {
                lines.linesq3[i].classList.remove(`line${i+1}q`)
                lines.linesq3[i].classList.toggle(`linesexit`)
            }

            setTimeout(function () {
                for (i = 0; i < lines.linesq4.length; i++) {
                    lines.linesq4[i].classList.toggle(`line${i+1}q`)
                }
            }, 500)

            setTimeout (function () {
                for (i = 0; i < buttonq.buttonq4.length; i++) {
                    buttonq.buttonq4[i].classList.remove(`enter${i+1}`)
                    buttonq.buttonq4[i].setAttribute("style", "opacity: 1")
                }
                resolve()
            }, 3000)
        })
    })
}

async function forQuest5() {
    return new Promise (function (resolve) {
        answers4.answer43.addEventListener("click", function() {
            answers.answers5.setAttribute("style", "display: flex")

            for (i = 0; i < buttonq.buttonq4.length; i++) {
                buttonq.buttonq4[i].classList.remove(`enter${i+1}`)
                buttonq.buttonq4[i].classList.toggle(`exit${i+1}`)
            }

            for (i = 0; i < buttonq.buttonq5.length; i++) {
                buttonq.buttonq5[i].classList.toggle(`enter${i+1}`)
            }

            for (i = 0; i < lines.linesq5.length; i++) {
                lines.linesq5[i].setAttribute("style", "display: block")
            }

            for (i = 0; i < lines.linesq4.length; i++) {
                lines.linesq4[i].classList.remove(`line${i+1}q`)
                lines.linesq4[i].classList.toggle(`linesexit`)
            }

            setTimeout(function () {
                for (i = 0; i < lines.linesq5.length; i++) {
                    lines.linesq5[i].classList.toggle(`line${i+1}q`)
                }
            }, 500)

            setTimeout (function () {
                for (i = 0; i < buttonq.buttonq5.length; i++) {
                    buttonq.buttonq5[i].classList.remove(`enter${i+1}`)
                    buttonq.buttonq5[i].setAttribute("style", "opacity: 1")
                }
            }, 3000)
        })
    })
}

async function wait() {
    await forQuest1();
    await forQuest2();
    await forQuest3();
    await forQuest4();
    await forQuest5();
}

wait()