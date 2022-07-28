
//Assign Choices - Rock, Paper, Scissors, Lizard, Spock// //Or Boulder, Parchment, Shears (Critical Role Reference)//

//Get Random number 0-4 (for each choice)//


//Get Computer Choice 0-4//

function getComputerChoice () {

    let randomNumber = Math.floor(Math.random() * 5);

    //assign strings to number//
    switch (randomNumber) {
        case 0:
            console.log("Rock");
            break;
        case 1:
            console.log("Paper");
            break;
        case 2:
            console.log("Scissors");
            break;
        case 3:
            console.log("Lizard");
            break;
        case 4:
            console.log("Spock");
            break;

    }
    return "Computer selected " + randomNumber;
}
//Prompt User for weapon choice//
function playRound () {

    let weapon = prompt ("What weapon do you choose?");
    switch (weapon) {
        case "rock", 0:
        break;
        case "paper", 1:
        break;
        case "scissors", 2:
            break;
        case "lizard", 3:
            break;
        case "spock", 4:
            break;
    }

            return "You chose " + weapon;
    }

const playerSelection = "rock";
const computerSelection  = getComputerChoice;
console.log(playRound(playerSelection, computerSelection));

//game rules//










//In the event of a tie//

//Display winner

//Repeat x5//

//Reset game//
