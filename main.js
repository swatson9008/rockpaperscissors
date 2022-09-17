
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

const playerSelection = "Scissors";

const playerSelect = playerSelection.toLowerCase();

//console.log(playerSelect);

// Write a const variable for the computer selection

const computerSelection = getComputerChoice();

// Write a function to compare the computer selection against the player selection. Include the rules of rock, paper, scissors inside the function

function playRound (playerSelect, computerSelection){

   if (playerSelect==="rock" && computerSelection==="scissors"){
   return "Player wins, rock beats scissors."
   }
   else if (playerSelect==="rock" && computerSelection==="paper"){
   return "Computer wins, paper beats rock."
   }
   else if (playerSelect==="rock" && computerSelection==="rock"){
   return "Tie."
   }
   else if (playerSelect==="paper" && computerSelection==="scissors"){
   return "Computer wins, scissors beat paper."
   }
   else if (playerSelect==="paper" && computerSelection==="paper"){
   return "Tie."
   }
   else if (playerSelect==="paper" && computerSelection==="rock"){
   return "Player wins, paper beats rock."
   }
   else if (playerSelect==="scissors" && computerSelection==="scissors"){
   return "Tie."
   }
   else if (playerSelect==="scissors" && computerSelection==="paper"){
   return "Player wins, scissors beat paper."
   }
   else if (playerSelect==="scissors" && computerSelection==="rock"){
   return "Computer wins, rock beats scissors."
   }
    
}

// Test the function

//console.log(playRound(playerSelect, computerSelection));

const playRoundresult = playRound(playerSelect, computerSelection);

//console.log(playRoundresult);

// Make a function to play a game that keeps score and plays for five rounds.

function game(){

}

// Make a prompt to get input from the player