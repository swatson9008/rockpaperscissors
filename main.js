
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
   return "Rock beats scissors, player wins"
   }
   else if (playerSelect==="rock" && computerSelection==="paper"){
   return "Paper beats rock, computer wins"
   }
   else if (playerSelect==="rock" && computerSelection==="rock"){
   return "It's a tie"
   }
   else if (playerSelect==="paper" && computerSelection==="scissors"){
   return "Scissors beat paper, computer wins"
   }
   else if (playerSelect==="paper" && computerSelection==="paper"){
   return "It's a tie"
   }
   else if (playerSelect==="paper" && computerSelection==="rock"){
   return "Paper beats rock, player wins"
   }
   else if (playerSelect==="scissors" && computerSelection==="scissors"){
   return "It's a tie"
   }
   else if (playerSelect==="scissors" && computerSelection==="paper"){
   return "Scissors beat paper, player wins"
   }
   else if (playerSelect==="scissors" && computerSelection==="rock"){
   return "Rock beats scissors, computer wins"
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