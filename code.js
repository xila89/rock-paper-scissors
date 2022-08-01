


    window.onload = function playRound() {
        let userChoice = prompt("What weapon do you choose?").toLowerCase(); //prompt user for weapon//
        const weaponChoices =  ["rock", "paper", "scissors", "lizard", "spock"];
        const randomNumber = Math.floor(Math.random() * 5);
        const computerChoice = weaponChoices[randomNumber]; 
        
    console.log(`You chose ${userChoice} and the computer chose ${computerChoice}`); 

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
    console.log(resultIndex[userResult]);
 
} 

