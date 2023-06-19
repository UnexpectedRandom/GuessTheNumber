
const numberInput = document.getElementById("number")
const guessButton = document.getElementById("Guess")
const result      = document.getElementById("result")


let randomNumber = Math.ceil(Math.random() * 50)

console.log(randomNumber)

guessButton.addEventListener("click", () => {
    try {
        let NumberGuess = Number(numberInput.value)
        console.log(NumberGuess)

        if (isNaN(NumberGuess)) {
            result.textContent("Numbers only")
            return
        }

        if (NumberGuess == randomNumber ) {
            result.textContent = "Good Job You Got It Right"
        } else {
            result.textContent = "You Got It Wrong"
        }

    } catch {
        result.textContent = "Numbers Only No Text"
    }
})