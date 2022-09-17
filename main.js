
// Write an array of choices the computer can make

const computerchoice = ["rock", "paper", "scissors"];

// Write a function that lets the computer choose between one of three choices. Call it getComputerChoice

function getComputerChoice () {
    //const computerchoice = ["rock", "paper", "scissors"];
    let cchoice = computerchoice[Math.floor(Math.random() * computerchoice.length)];
    return cchoice;
    
}


//console.log(getComputerChoice());

// Write a const variable for player selection, make it case insensitive

const playerSelection = "Rock";

const playerSelect = playerSelection.toLowerCase();

//console.log(playerSelect);

// Write a const variable for the computer selection

const computerSelection = getComputerChoice();

// Write a function to compare the computer selection against the player selection. Include the rules of rock, paper, scissors inside the function

function playRound (playerSelect, getComputerChoice){

   if (playerSelect==="rock" && getComputerChoice==="scissors"){
   return "Rock beats scissors, player wins";
   }
   else if (playerSelect==="rock" && getComputerChoice==="paper"){
   return "Paper beats rock, computer wins";
   }
   else if (playerSelect==="rock" && getComputerChoice==="rock"){
   return "It's a tie";
   }
}

// Test the function

console.log(playRound(playerSelect, getComputerChoice));

// Make the function return a string based on the results

// Make a function to play a game that keeps score and plays for five rounds.

// Make a prompt to get input from the player