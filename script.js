// DOM variables //
const playAgain = document.querySelector('.play-again');
const weaponButtons = document.querySelectorAll('.weapons');
const fightText = document.querySelector('.combat-text');
const weaponsChosen = document.querySelector('.weapons-chosen');
let round = document.querySelector('.round');
let score = document.querySelector('.score');
let weapons = document.querySelectorAll('.weapons');

// Array variables // 

const weaponry = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

// result index array //

const resultIndex = {
    "t": "It's a tie! Try again.",
    "u": "You win! Yaaay!",
    "c": "The computer wins. Better luck next time.",
};

// score variables // 

let computerScore = 0;
let playerScore = 0;
let rounds = 0;
let playerChoice, computerChoice;

// add event listener to ID for weapon buttons & store variable//

weaponButtons.forEach(function(id) {
    document.querySelectorAll('.weapons').forEach(id => {
        id.addEventListener('click', event => {
            let computerWeapon = getComputerChoice();
            console.log(computerWeapon);
            const playerPick = event.target.id;
            console.log(playerPick);


            //invoke game functions//

            game(playerPick, computerWeapon);
            checkWinner();
            getRandomNum();


            function game(playerPick, computerWeapon) {

                // array for results //

                const results = [
                    ["t", "u", "c", "c", "u"],
                    ["c", "t", "u", "u", "c"],
                    ["u", "c", "t", "c", "c"],
                    ["u", "c", "u", "t", "c"],
                    ["c", "u", "c", "u", "t"],
                ];
                let playerChoiceIndex = weaponry.indexOf(playerPick);
                let userResult = results[randomNumber][playerChoiceIndex];

                // keep score of points //

                if (userResult == "c") {
                    computerScore++;
                    weaponsChosen.innerText = `You chose ${playerPick} and the computer chose ${computerWeapon}`;
                    score.innerText = `Computer Score: ${computerScore} | Player Score: ${playerScore}`;
                }

                if (userResult == "u") {
                    playerScore++;
                    weaponsChosen.innerText = `You chose ${playerPick} and the computer chose ${computerWeapon}`;
                    score.innerText = `Computer Score: ${computerScore} | Player Score: ${playerScore}`;

                } else if (userResult == "t") {
                    weaponsChosen.innerText = `You chose ${playerPick} and the computer chose ${computerWeapon}`;
                    score.innerText = `Computer Score: ${computerScore} | Player Score: ${playerScore}`;
                    fightText.innerText = `It's a tie!`;

                }
                rounds++
                round.innerText = `Round: ${rounds}`

                let combatText = (resultIndex[userResult]);

                // display results on page //

                fightText.textContent = `${combatText}`;

            }


            // check winner and display final winner once a score reaches 5 points//

            function checkWinner() {
                if (playerScore === 5) {
                    fightText.innerText = 'Good news everyone! You beat that dastardly computer!';
                } else if (computerScore === 5) {
                    fightText.innerText = 'Bad news no one. That darn computer won! Better luck next time.';
                }

            }
        })
    })

})

// get computer choice //

function getComputerChoice() {
    let randomNumber = getRandomNum();
    let computerChoice = weaponry[randomNumber];
    return computerChoice;
}

function getRandomNum() {
    randomNumber = Math.floor(Math.random() * 5);
    return randomNumber;
}