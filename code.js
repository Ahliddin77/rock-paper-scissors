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

function getString(value) {
    let string;
    if(value === 0) {
        string = "Rock";
    } else if(value === 1){
        string = "Paper";
    } else if(value === 2){
        string = "Scissor";
    }
    return string;
}

function gameRound(userChoice,userString,compChoice,compString) {
    let userScore = 0;
    let compScore = 0;
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
    console.log(`You Win! ${userString} beats ${compString}`);
    return 1;
    }
    else if(compScore === 1) {
    console.log(`You Lose! ${compString} beats ${userString}`);
    return 2;
    }
    else
    console.log("It`s Tie! AI is reading your mind");
}

function game(compChoice,compString,userChoice,userString) {
    let userTotal = 0;
    let aiTotal = 0;
    console.log("Rock-Paper-Scissor game vs AI");
    for(let i=1; i<=5; i++){
        console.log(`Round ${i}`);
        compChoice = getComputerChoice();
        compString = getString(compChoice);
        let input = window.prompt("Enter your choice: ");
        let lowerString = input.toLowerCase();
        userChoice = getUserChoice(lowerString);
        userString = getString(userChoice);
        let counter = gameRound(userChoice,userString,compChoice,compString);
        if(counter === 1){
            userTotal += 1;
        } else if(counter === 2){
            aiTotal += 1;
        }
        console.log(`Your score ${userTotal}\tAI score ${aiTotal}`);
    }
    console.log("\t\tFinal Result!");
    if(userTotal > aiTotal)
        console.log("\t\tCongratulations! You won this match");
    else if(userTotal < aiTotal)
        console.log("\t\tWe may lost this Battle but not the War!");
    else
        console.log("\t\tIt seems there`s no winner");
}

let compChoice,compString,userChoice,userString;

game(compChoice,compString,userChoice,userString);

