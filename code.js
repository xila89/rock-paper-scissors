

let playerScore = 0;
let computerScore = 0;


//prompt for user choice//
window.onload = function playRound() {
let userChoice = prompt("What weapon will you choose?");
userChoice = userChoice.toLowerCase();

//create array for weapons and get computer choice//
    const weaponChoices =  ["rock", "paper", "scissors", "lizard", "spock"];
    const randomNumber = Math.floor(Math.random() * 5);
    let computerChoice = weaponChoices[randomNumber]; 

    console.log (`You chose ${userChoice} and the computer chose ${computerChoice}`); 
//output of both choices//

//create an array with game rules and outcomes//
const results = [
    ["t","u","c","c","u"],
    ["c","t","u","u","c"],
    ["u","c","t","c","u"],
    ["c","c","u","t","u"],
    ["c","u","c","u","t"],
];

let playerChoiceIndex = weaponChoices.indexOf(userChoice);
let userResult = results[randomNumber][playerChoiceIndex];

//round results/
const resultIndex = {
    "t": "It's a tie! Try again.",
    "u": "You win! Yaaay!",
    "c": "The computer wins. Better luck next time.", 
};

console.log(resultIndex[userResult] +playerScore, +computerScore);
}

function playGame (playRound) {

}
//repeat game 5x//





