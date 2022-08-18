console.log("Rock Paper test")

// 0 for Rock
// 1 for Paper
// 2 for Scissor 

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3)

    return rand
}

function getUserChoice() {
    let userChoice = input("Enter Rock, paper or scissor")
    let correctedUserChoice = userChoice.toLowerCase()

    if (correctedUserChoice != 'rock' || correctedUserChoice != 'paper' || correctedUserChoice != 'scissor') {
        alert("Invalid choice entered")
        return
    }



}

let retVal = getComputerChoice();
console.log(retVal)


