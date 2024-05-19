let firstRandomNumber;
let secondRandomNumber;
let playerOneScore = 0;
let playerTwoScore = 0;

function diceSetter() {
    firstRandomNumber = Math.floor(Math.random() * 6) + 1;
    secondRandomNumber = Math.floor(Math.random() * 6) + 1;

    document.getElementById("img1").setAttribute("src", `images/dice${firstRandomNumber}.png`)
    document.getElementById("img2").setAttribute("src", `images/dice${secondRandomNumber}.png`)

    updateScore();
    displayWinner();
}

function updateScore() {
    const playerOne = document.getElementById("p1-score");
    const playerTwo = document.getElementById("p2-score");

    if (firstRandomNumber > secondRandomNumber) {
        playerOneScore++;
    } else if(secondRandomNumber > firstRandomNumber) {
        playerTwoScore++;
    } else {
        alert(`Dice 1: ${firstRandomNumber}\nDice 2: ${secondRandomNumber}\nDRAW!`)
    }

    playerOne.textContent = playerOneScore;
    playerTwo.textContent = playerTwoScore;
}

function displayWinner() {
    const winnerElement = document.getElementById("winner");

    if (playerOneScore === 5 && playerOneScore > playerTwoScore) {
        winnerElement.textContent = "👏 Player 1 Wins! 👏";
        disableButton()
    } else if (playerTwoScore === 5 && playerTwoScore > playerOneScore) {
        winnerElement.textContent = "👏 Player 2 Wins! 👏";
        rollButton.disabled = true;
        disableButton()
    } else {
        winnerElement.textContent = "";
    }
}

function disableButton() {
    const rollButton = document.getElementById("roll");

    rollButton.disabled = true;
    rollButton.style.cursor="none";
}

function restartGame() {
    const playerOne = document.getElementById("p1-score");
    const playerTwo = document.getElementById("p2-score");
    const winnerElement = document.getElementById("winner");

    document.getElementById("img1").setAttribute("src", `/images/dice6.png`)
    document.getElementById("img2").setAttribute("src", `/images/dice6.png`)

    firstRandomNumber = 0;
    secondRandomNumber = 0;
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOne.textContent = "";
    playerTwo.textContent = "";
    winnerElement.textContent = "";
    winnerElement.style.border = "none";
}

