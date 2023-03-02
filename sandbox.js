// Element Declaration

const header = document.querySelector("h1");
const button = document.querySelector("button");
const playerOneDice = document.querySelector(".img1");
const playerTwoDice = document.querySelector(".img2");

// On-Click Event

button.addEventListener("click", (event) => {
    const randomNumberOne = randomNumberGenerator();
    const randomNumberTwo = randomNumberGenerator();
    playerOne(randomNumberOne);
    playerTwo(randomNumberTwo);
    console.log("Player 1 rolled: " + randomNumberOne);
    console.log("Player 2 rolled: " + randomNumberTwo);
    winnerDeclaration(randomNumberOne, randomNumberTwo);
});

// Function Declarations

function randomNumberGenerator() {
    return Math.floor(Math.random() * 6) + 1;
}

function playerOne(diceRoll) {

    if (diceRoll === 1) {
        playerOneDice.setAttribute("src", "images/dice1.png");
    } else if (diceRoll === 2) {
        playerOneDice.setAttribute("src", "images/dice2.png");
    } else if (diceRoll === 3) {
        playerOneDice.setAttribute("src", "images/dice3.png");
    } else if (diceRoll === 4) {
        playerOneDice.setAttribute("src", "images/dice4.png");
    } else if (diceRoll === 5) {
        playerOneDice.setAttribute("src", "images/dice5.png");
    } else {
        playerOneDice.setAttribute("src", "images/dice6.png");
    }
}

function playerTwo(diceRoll) {

    if (diceRoll === 1) {
        playerTwoDice.setAttribute("src", "images/dice1.png");
    } else if (diceRoll === 2) {
        playerTwoDice.setAttribute("src", "images/dice2.png");
    } else if (diceRoll === 3) {
        playerTwoDice.setAttribute("src", "images/dice3.png");
    } else if (diceRoll === 4) {
        playerTwoDice.setAttribute("src", "images/dice4.png");
    } else if (diceRoll === 5) {
        playerTwoDice.setAttribute("src", "images/dice5.png");
    } else {
        playerTwoDice.setAttribute("src", "images/dice6.png");
    }
}

function winnerDeclaration(randomNumberOne, randomNumberTwo) {
    if (randomNumberOne === randomNumberTwo) {
        header.textContent = "It's a Draw!";
    } else if (randomNumberOne > randomNumberTwo) {
        header.textContent = "Player One Wins!"
    } else {
        header.textContent = "Player Two Wins!"
    }
}