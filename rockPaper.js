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

    return correctedUserChoice;

}

function duel(userChoice, computerChoice) {
    let result = -1

    if (userChoice == computerChoice) {
        result = 0
    }
    else if ((computerChoice + 1) % 3 == userChoice) {
        result = 1
    }

    return result
}



function printWinner(retVal) {
    if (retVal == 0) {
        alert("Its a draw")
    }
    else if (retval) {
        alert("U won")
    }
    else {
        alert("U lost")
    }
}

function game() {
    do {
        let computerChoice = getComputerChoice()
        let userChoice = getUserChoice()

        let retVal = duel(userChoice, computerChoice)
        console.log(retVal)

        printWinner(retVal)

        let again = Number(input("Play again? 1/0?"))

    } while (again == 1)

}


