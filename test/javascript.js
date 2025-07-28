const button = document.querySelector("button")
const congratulations = document.querySelector("#congratulations")

button.addEventListener("click", () => {
    congratulations.setAttribute("style", "display: block; animation: congratulationsAnimate 0.8s ease; animation-fill-mode: forwards;")
    setTimeout(() => {
        congratulations.setAttribute("style", "display: block; animation: congratulationsAnimated 0.8s ease; animation-fill-mode: forwards;");
        setTimeout(() => {
            congratulations.removeAttribute("style")
        }, 800)
    }, 2800)
})