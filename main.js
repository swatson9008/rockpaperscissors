
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

const playerSelection = prompt("Enter rock, paper, scissors", "");

const playerSelect = playerSelection.toLowerCase();

// Write a const variable for the computer selection

const computerSelection = getComputerChoice();

// Write a function to compare the computer selection against the player selection. Include the rules of rock, paper, scissors inside the function

let playerScore = 0;
let computerScore = 0;

function playRound (playerSelect, computerSelection){

    if (playerSelect==="rock" && computerSelection==="scissors"){
    ++playerScore
    }
    else if (playerSelect==="rock" && computerSelection==="paper"){
    ++computerScore
    }
    else if (playerSelect==="rock" && computerSelection==="rock"){
    
    }
    else if (playerSelect==="paper" && computerSelection==="scissors"){
    ++computerScore
    }
    else if (playerSelect==="paper" && computerSelection==="paper"){
     
    }
    else if (playerSelect==="paper" && computerSelection==="rock"){
    ++playerScore
    }
    else if (playerSelect==="scissors" && computerSelection==="scissors"){
    
    }
    else if (playerSelect==="scissors" && computerSelection==="paper"){
    ++playerScore
    }
    else if (playerSelect==="scissors" && computerSelection==="rock"){
    ++computerScore
    }
     
 }

// Test the function

//console.log(playRound(playerSelect, computerSelection));

//const playRoundresult = playRound(playerSelect, computerSelection);

//console.log(playRoundresult);

// Make a function to play a game that keeps score and plays for five rounds.

function game(){
  for (let i = 0; i < 5; i++){
    playRound(playerSelect, computerSelection);
    return(playerScore)
    }
}


//console.log(game());

// Make a prompt to get input from the player


