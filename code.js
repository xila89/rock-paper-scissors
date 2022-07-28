
//Assign Choices - Rock, Paper, Scissors, Lizard, Spock// //Or Boulder, Parchment, Shears (Critical Role Reference)//

//Get Random number 0-4 (for each choice)//

//Get Computer Choice 0-4//

window.onload = function getComputerChoice () {

    let randomNumber = Math.floor(Math.random() *5);

//assign strings to number//
switch (randomNumber) {
    case 0: 
        alert("Rock");
        break;
    case 1:
        alert("Paper");
        break;
    case 2:
        alert("Scissors");
        break;
    case 3: 
        alert("Lizard");
        break;
    case 4: 
        alert("Spock");
        break;

}
console.log(randomNumber); }

window.onload = function playerSelection () {
    let ask = prompt("What is your weapon of choice?")
    
}


//Prompt User for weapon choice//

//game rules//

//In the event of a tie//

//Display winner

//Repeat x5//

//Reset game//
