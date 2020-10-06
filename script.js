

// INITIALISE PLAYER SCORE
let playerScore = 0;
let diceRoll;

//  SET-UP OF VARIABLES
const button = document.getElementById("rollButton"); //  Button is defined for ROLLBUTTON
const diceImage = document.getElementById("diceImage"); //  diceImage is defined for IMAGES
const scoreLabel = document.getElementById("rollLabel"); //  scoreLabel is defined for ROLL LABEL HTML value that displays rolled value
let totalScore = document.getElementById("playerScore"); //  totalScore is defined for PLAYERCORE HTML value


// DICE ROLL GENERATOR 
const play = () => {
    diceRoll = Math.floor(Math.random() * 6) + 1;
    diceImage.src = `img/dice${diceRoll}.png`                   
    scoreLabel.textContent = `You rolled a ${diceRoll}`        
    playerScore += diceRoll;                                    // THIS ADDS THE ROLLED VALUE TO THE SCORE
    totalScore.textContent = `Your total score is ${playerScore}`

    if (diceRoll == 1) {
        scoreLabel.textContent = `You rolled a ${diceRoll}, You LOSE!!` 
        playerScore = 0;
    } else if (playerScore == 21) {
        scoreLabel.textContent = `You scored exactlty 21. YOU WIN !!`   
        playerScore = 0;
    } else if (playerScore >= 22) {     
        scoreLabel.textContent = `You scored ${playerScore} - your score will reset to zero !!`
        playerScore = 0;    
    } else {
        scoreLabel.textContent = `You rolled a ${diceRoll}`
    }
}

// THIS LISTENS FOR A CLICK OF ROLL BUTTON
button.addEventListener("click", () => {
    play()
})

