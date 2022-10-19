function getComputerChoice() {
    const compChoice = Math.floor(Math.random() * 3);
    return compChoice;
}

function getUserChoice(lowerString) {
    let userChoice;
    if(lowerString === "rock"){
        userChoice = 0;
    } else if(lowerString === "paper"){
        userChoice = 1;
    } else if(lowerString === "scissor"){
        userChoice = 2;
    } else {
        console.log("Invalid choice, no points given!");
        userChoice = undefined;
    }
    return userChoice;
}

function gameRound(userChoice) {
    let userScore = 0;
    let compScore = 0;
    let compChoice = getComputerChoice();
    switch(userChoice) {
        case 0:
            switch(compChoice) {
                case 2:
                    userScore += 1;
                    break;
                case 1:
                    compScore += 1;
                    break;
                case 0:
                    break;
            }
            break;
        case 1:
            switch(compChoice) {
                case 0:
                    userScore += 1;
                    break;
                case 2:
                    compScore += 1;
                    break;
                case 1:          
                    break;
            }
            break;
        case 2:
            switch(compChoice) {
                case 1:
                    userScore += 1;
                    break;
                case 0:
                    compScore += 1;
                    break;
                case 2:    
                    break;
            }
            break;
    } 
    if(userScore === 1){
    console.log(`You Win!`);
    return 1;
    }
    else if(compScore === 1) {
    console.log(`You Lose!`);
    return 2;
    }
    else
    console.log("It`s Tie! AI is reading your mind");
}

function game(userChoice) {
    let score;
        let counter = gameRound(userChoice);
        if(counter === 1){
            score = document.getElementById('scoreU');
            score.textContent = userTotal;
            
        } else if(counter === 2){
            aiTotal += 1;
            score = document.getElementById('scoreAI');
            score.textContent = aiTotal;
        console.log(`Your score ${userTotal}\tAI score ${aiTotal}`);
    }
}

const selectionButtons = document.querySelectorAll('[data-selection]')
const yourScore = document.getElementById('scoreU')
const compScore = document.getElementById('scoreAI')
const gameStatus = document.getElementById('gameStatus')
let counter = 0;
const round = document.getElementById('round')
function increament(score){
    score.innerText = parseInt(score.innerText) + 1
}
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        counter += 1;
        round.textContent = counter;
        if(counter > 10) window.location.reload();
        else{
            const selectionName = selectionButton.dataset.selection;
            let userChoice = getUserChoice(selectionName);
            resultRound = gameRound(userChoice);
            if(resultRound === 1){ increament(yourScore); gameStatus.textContent = "You won this match!";}
            else if(resultRound === 2) {increament(compScore); gameStatus.textContent = "You lost this match!"}
            else {gameStatus.textContent = "It is draw!"}
            if(counter === 10){
                if(parseInt(yourScore.innerText) > parseInt(compScore.innerText)) gameStatus.textContent = "Congratulations, You won !";
                else if(parseInt(yourScore.innerText) < parseInt(compScore.innerText)) gameStatus.textContent = "You lost the battle !";
                else gameStatus.textContent = "No Winner !"
                round.textContent = "over !";
            }
        }
    })
})


