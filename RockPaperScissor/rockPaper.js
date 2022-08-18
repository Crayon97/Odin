console.log("Rock Paper test")

// 0 for Rock
// 1 for Paper
// 2 for Scissor 

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3)

    return rand
}

function getUserChoice() {
    let userChoice = String(prompt("Enter Rock, paper or scissor"))
    let correctedUserChoice = userChoice.toLowerCase()

    while (correctedUserChoice != 'rock' && correctedUserChoice != 'paper' && correctedUserChoice != 'scissor') {
        alert("Invalid choice entered")
        userChoice = String(prompt("Enter Rock, paper or scissor"))
        correctedUserChoice = userChoice.toLowerCase()
    }

    return correctedUserChoice;

}

function decode(computerChoice) {
    let decoded

    if (computerChoice == 0) decoded = "Rock"
    else if (computerChoice == 1) decoded = "Paper"
    else decoded = "Scissor"

    return decoded
}

function encode(userChoice) {
    let retVal = 2
    if (userChoice == 'rock') {
        retVal = 0
    }
    else if (userChoice == 'paper') {
        retVal = 1
    }
    else {

    }

    return retVal
}

function duel(userChoice, computerChoice) {
    let result = -1

    alert("Computer selected choice is " + decode(computerChoice))

    if (userChoice == computerChoice) {
        result = 0
    }
    else if ((computerChoice + 1) % 3 == userChoice) {
        result = 1
    }

    console.log(decode(computerChoice))
    console.log(decode(userChoice))
    console.log(result)

    return result
}

function printWinner(retVal) {
    if (retVal == 0) {
        alert("Its a draw")
    }
    else if (retVal == 1) {
        alert("U won")
    }
    else {
        alert("U lost")
    }
}

function game() {
    console.log("starting")
    let again = 0
    do {
        let computerChoice = getComputerChoice()
        let userChoice = getUserChoice()

        let encodedUserChoice = encode(userChoice)
        let retVal = duel(encodedUserChoice, computerChoice)
        console.log(retVal)

        printWinner(retVal)

        again = Number(prompt("Play again? 1/0?"))

        console.log(again)
        console.log(again == 1)

    } while (again == 1)

}

game()
