const contquest = document.querySelector("#contquest")
const startpad = document.querySelector("#startpad")
const wrong = document.querySelector("#imgwrong")
const preventspan = document.querySelector("#preventspan")
const arrow = document.querySelector("#arrow")
const leftarrow = document.querySelector("#leftarrow")
const rightarrow = document.querySelector("#rightarrow")

const linesQuest = ["linesq1", "linesq2", "linesq3", "linesq4", "linesq5", "linesq6"]
const lines = Object.fromEntries(linesQuest.map(line => [line, document.querySelectorAll(`.${line}`)]))

const button = ["buttonq1", "buttonq2", "buttonq3", "buttonq4", "buttonq5", "buttonq6"]
const buttonq = Object.fromEntries(button.map(button => [button, document.querySelectorAll(`.${button}`)]))

const answersq = ["answers1", "answers2", "answers3", "answers4", "answers5", "answers6"]
const answers = Object.fromEntries(answersq.map(answer => [answer, document.getElementById(`${answer}`)]))

const answersq1 = ["answer11", "answer12", "answer13", "answer14"]
const answers1 = Object.fromEntries(answersq1.map(answerq1 => [answerq1, document.getElementById(`${answerq1}`)]))

const answersq2 = ["answer21", "answer22", "answer23", "answer24"]
const answers2 = Object.fromEntries(answersq2.map(answerq2 => [answerq2, document.getElementById(`${answerq2}`)]))

const answersq3 = ["answer31", "answer32", "answer33", "answer34"]
const answers3 = Object.fromEntries(answersq3.map(answerq3 => [answerq3, document.getElementById(`${answerq3}`)]))

const answersq4 = ["answer41", "answer42", "answer43", "answer44"]
const answers4 = Object.fromEntries(answersq4.map(answerq4 => [answerq4, document.getElementById(`${answerq4}`)]))

const answersq5 = ["answer51", "answer52", "answer53", "answer54"]
const answers5 = Object.fromEntries(answersq5.map(answerq5 => [answerq5, document.getElementById(`${answerq5}`)]))

const answersq6 = ["answer61", "answer62", "answer63", "answer64"]
const answers6 = Object.fromEntries(answersq6.map(answerq6 => [answerq6, document.getElementById(`${answerq6}`)]))

async function forQuest1() {
    return new Promise (function (resolve) {
        startpad.addEventListener("click", function() {
            startpad.setAttribute("style", "animation: linesExit 1.5s ease; animation-fill-mode: forwards;")
            preventspan.setAttribute("style", "display: block")

            setTimeout (function () {
                answers.answers1.setAttribute("style", "display: flex")
                contquest.setAttribute("style", "display: flex")

                for (let i = 0; i < lines.linesq1.length; i++) {
                    lines.linesq1[i].setAttribute("style", "display: block")
                }

                for (let i = 0; i < buttonq.buttonq1.length; i++) {
                    buttonq.buttonq1[i].classList.add(`enter${i+1}`)
                }
                
                for (let i = 0; i < lines.linesq1.length; i++) {
                    lines.linesq1[i].classList.add(`line${i+1}q`)}
            }, 1000)
            
            setTimeout (function () {
                for (let i = 0; i < buttonq.buttonq1.length; i++) {
                    buttonq.buttonq1[i].classList.remove(`enter${i+1}`)
                    buttonq.buttonq1[i].setAttribute("style", "opacity: 1")
                    preventspan.setAttribute("style", "display: none")
                }
                resolve()
            }, 3500)
        })
    })
}

function configureTypeOneQuestionTransition ({
    answerCorrect,
    nextAnswers,
    currentButtons,
    nextButtons,
    nextLines,
    currentLines
}) {
    return new Promise ( function (resolve) {
        answerCorrect.addEventListener("click", function() {
            nextAnswers.setAttribute("style", "display: flex")
            preventspan.setAttribute("style", "display: block")

            for (let i = 0; i < currentButtons.length; i++) {
                currentButtons[i].classList.remove(`enter${i+1}`)
                currentButtons[i].classList.add(`exit${i+1}`)
            }

            for (let i = 0; i < nextButtons.length; i++) {
                nextButtons[i].classList.add(`enter${i+1}`)
            }

            for (let i = 0; i < lines.linesq2.length; i++) {
                nextLines[i].setAttribute("style", "display: block")
            }

            for (let i = 0; i < currentLines.length; i++) {
                currentLines[i].classList.remove(`line${i+1}q`)
                currentLines[i].classList.add(`linesexit`)
            }

            setTimeout(function () {
                for (let i = 0; i < nextLines.length; i++) {
                    nextLines[i].classList.add(`line${i+1}q`)
                }
            }, 500)

            setTimeout (function () {
                for (let i = 0; i < nextButtons.length; i++) {
                    nextButtons[i].classList.remove(`enter${i+1}`)
                    nextButtons[i].setAttribute("style", "opacity: 1")
                    preventspan.removeAttribute("style")
                }
                resolve()
            }, 2600)
        })
    })
}

function configureTypeTwoQuestionTransition ({
    answerCorrect,
    nextAnswers,
    currentButtons,
    nextButtons,
    nextLines,
    currentLines
}) {
    return new Promise ( function (resolve) {
        answerCorrect.addEventListener("click", function() {
            nextAnswers.setAttribute("style", "display: flex")
            preventspan.setAttribute("style", "display: block")
            arrow.setAttribute("style", "display: flex; animation: toAppear 2s ease")

            for (let i = 0; i < nextButtons.length; i++) {
                nextButtons[i].setAttribute("style", "display: none")
            }

            nextButtons[0].setAttribute("style", "display: block")
            nextButtons[0].classList.add("enter1")

            for (let i = 0; i < currentButtons.length; i++) {
                currentButtons[i].classList.remove(`enter${i+1}`)
                currentButtons[i].classList.add(`exit${i+1}`)
            }

            for (let i = 0; i < lines.linesq2.length; i++) {
                nextLines[i].setAttribute("style", "display: block")
            }

            for (let i = 0; i < currentLines.length; i++) {
                currentLines[i].classList.remove(`line${i+1}q`)
                currentLines[i].classList.add(`linesexit`)
            }

            setTimeout(function () {
                for (let i = 0; i < nextLines.length; i++) {
                    nextLines[i].classList.add(`line${i+1}q`)
                }
            }, 500)

            setTimeout (function () {
                nextButtons[0].classList.remove("enter1")

                for (let i = 0; i < nextButtons.length; i++) {
                    nextButtons[i].setAttribute("style", "opacity: 1")
                }
                preventspan.removeAttribute("style")
                resolve()
            }, 2600)
        })
    })
}

async function forQuest2() {
    return configureTypeOneQuestionTransition({
        answerCorrect: answers1.answer13,
        nextAnswers: answers.answers2,
        currentButtons: buttonq.buttonq1,
        nextButtons: buttonq.buttonq2,
        nextLines: lines.linesq2,
        currentLines: lines.linesq1
    })
}

async function forQuest3() {
    return configureTypeOneQuestionTransition({
        answerCorrect: answers2.answer24,
        nextAnswers: answers.answers3,
        currentButtons: buttonq.buttonq2,
        nextButtons: buttonq.buttonq3,
        nextLines: lines.linesq3,
        currentLines: lines.linesq2
    })
}

async function forQuest4() {
    return configureTypeOneQuestionTransition({
        answerCorrect: answers3.answer31,
        nextAnswers: answers.answers4,
        currentButtons: buttonq.buttonq3,
        nextButtons: buttonq.buttonq4,
        nextLines: lines.linesq4,
        currentLines: lines.linesq3
    })
}

async function forQuest5() {
    return configureTypeOneQuestionTransition({
        answerCorrect: answers4.answer43,
        nextAnswers: answers.answers5,
        currentButtons: buttonq.buttonq4,
        nextButtons: buttonq.buttonq5,
        nextLines: lines.linesq5,
        currentLines: lines.linesq4
    })
}

async function forQuest6() {
    return configureTypeTwoQuestionTransition({
        answerCorrect: answers5.answer52,
        nextAnswers: answers.answers6,
        currentButtons: buttonq.buttonq5,
        nextButtons: buttonq.buttonq6,
        nextLines: lines.linesq6,
        currentLines: lines.linesq5
    })
}

async function wait() {
    await forQuest1();
    await forQuest2();
    await forQuest3();
    await forQuest4();
    await forQuest5();
    await forQuest6();
}

wait()

function answerWrong() {
    wrong.setAttribute("style", "animation: wrongAnimate 0.8s ease; animation-fill-mode: forwards;")
    preventspan.setAttribute("style", "display: block")
    setTimeout(() => {
        wrong.setAttribute("style", "animation: wrongAnimated 0.8s ease; animation-fill-mode: forwards;")
        setTimeout(() => {
            preventspan.removeAttribute("style")
        }, 700)
    }, 1600)
}

function clickWrong({
    answers,
    answersCorrect
}) {
    Object.values(answers).forEach(answer => {
        if (answer !== answersCorrect) {
            answer.addEventListener("click", answerWrong)
        }
    })
}

async function fixedQuest1() {
    return clickWrong({
        answers: answers1,
        answersCorrect: answer13
    })
}

async function fixedQuest2() {
    return clickWrong({
        answers: answers2,
        answersCorrect: answer24
    })
}

async function fixedQuest3() {
    return clickWrong({
        answers: answers3,
        answersCorrect: answer31
    })
}

async function fixedQuest4() {
    return clickWrong({
        answers: answers4,
        answersCorrect: answer43
    })
}

async function fixedQuest5() {
    return clickWrong({
        answers: answers5,
        answersCorrect: answer52
    })
}

async function clickedWrong() {
    await fixedQuest1();
    await fixedQuest2();
    await fixedQuest3();
    await fixedQuest4();
    await fixedQuest5();
}

clickedWrong()

let indexImg = 0
let isAnimating = false
let answers6Values = Object.values(answers6)
async function leftArrow() {
    leftarrow.addEventListener("click", () => {
        if (isAnimating) {return}
        isAnimating = true

        let previousIndex = indexImg
        indexImg = (indexImg - 1 + answers6Values.length) % answers6Values.length

        answers6Values[indexImg].setAttribute("style", "display: block");
        answers6Values[previousIndex].classList.add("leftdisable");
        answers6Values[indexImg].classList.add("leftactive")

        setTimeout(() => {
            answers6Values[previousIndex].classList.remove("leftdisable");
            answers6Values[indexImg].classList.remove("leftactive");
            answers6Values[previousIndex].setAttribute("style", "display: none");
            answers6Values[indexImg].setAttribute("style", "display: block")
            isAnimating = false
        }, 1500)
    })
}

async function rightArrow() {
    rightarrow.addEventListener("click", () => {
        if (isAnimating) {return}
        isAnimating = true

        let previousIndex = indexImg
        indexImg = (indexImg + 1) % answers6Values.length

        console.log(previousIndex)
        console.log(indexImg)
        
        answers6Values[indexImg].setAttribute("style", "display: block");
        answers6Values[previousIndex].classList.add("rightdisable");
        answers6Values[indexImg].classList.add("rightactive")

        setTimeout(() => {
            answers6Values[previousIndex].classList.remove("rightdisable");
            answers6Values[indexImg].classList.remove("rightactive");
            answers6Values[previousIndex].setAttribute("style", "display: none");
            answers6Values[indexImg].setAttribute("style", "display: block")
            isAnimating = false
        }, 1500)
    })
}

leftArrow()
rightArrow()

console.log(answers6Values.length - 1)
console.log(leftarrow)
console.log(rightarrow)
console.log(answers6.answer61)
console.log(document.querySelector("#answer61"))
console.log(Object.values(answers6))