

//game logic//

    // get player weapon choice // WORKS TO RECORD BUTTON PRESS //
    document.querySelector('.weapons').onclick = function (e) {
        playerChoice = e.target.id; 
        console.log(playerChoice); 
        return playerChoice; }


      
const weaponChoices =  ["rock", "paper", "scissors", "lizard", "spock"];
const randomNumber = Math.floor(Math.random() * 5);
const computerChoice = weaponChoices[randomNumber]; 

        //recording button chosen//

        const userChoice = document.getElementById('button-container');
        userChoice.addEventListener('click', () => {
            console.log(event.target.id); 
        });


    console.log(`You chose ${userChoice} and the computer chose ${computerChoice}`); 
    function playRound() {
    const results = [
        ["t","u","c","c","u"],
        ["c","t","u","u","c"],
        ["u","c","t","c","u"],
        ["c","c","u","t","u"],
        ["c","u","c","u","t"],
    ];
    

    
    //round results//
    const resultIndex = {
        "t": "It's a tie! Try again.",
        "u": "You win! Yaaay!",
        "c": "The computer wins. Better luck next time.", 
    };
    console.log(resultIndex[userResult]);
 
} 

//play single round// 

function playRound (userChoice) {
    playerWeapon = document.querySelectorAll('.button-container');
    console.log (playerWeapon);

//game rule array for declaring results//

   const results = [
    ["t","u","c","c","u"],
    ["c","t","u","u","c"],
    ["u","c","t","c","u"],
    ["c","c","u","t","u"],
    ["c","u","c","u","t"],
];

const resultIndex = {
    "t": "It's a tie! Try again.",
    "u": "You win! Yaaay!",
    "c": "The computer wins. Better luck next time.", 
};

//round results//

let playerChoiceIndex = weaponChoices.indexOf(userChoice);
let userResult = results[randomNumber][playerChoiceIndex];
    
    console.log(resultIndex[userResult][computerChoice]);
    console.log(roundResult);}
 


