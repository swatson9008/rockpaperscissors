
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

let playerSelection;

// Write a const variable for the computer selection

let computerSelection;

// Write a function to compare the computer selection against the player selection. Include the rules of rock, paper, scissors inside the function

let playerScore = 0;
let computerScore = 0;

function playRound (playerSelection, computerSelection){

    if (playerSelection.toLowerCase()==="rock" && computerSelection==="scissors"){
    ++playerScore
    alert("Player Wins")
    }
    else if (playerSelection.toLowerCase()==="rock" && computerSelection==="paper"){
    ++computerScore
    alert("Computer Wins")
    }
    else if (playerSelection.toLowerCase()==="rock" && computerSelection==="rock"){
    alert("Tie")
    }
    else if (playerSelection.toLowerCase()==="paper" && computerSelection==="scissors"){
    ++computerScore
    alert("Computer Wins")
    }
    else if (playerSelection.toLowerCase()==="paper" && computerSelection==="paper"){
    alert("Tie")
    }
    else if (playerSelection.toLowerCase()==="paper" && computerSelection==="rock"){
    ++playerScore
    alert("Player Wins")
    }
    else if (playerSelection.toLowerCase()==="scissors" && computerSelection==="scissors"){
    alert("Tie")
    }
    else if (playerSelection.toLowerCase()==="scissors" && computerSelection==="paper"){
    ++playerScore
    alert("Player Wins")
    }
    else if (playerSelection.toLowerCase()==="scissors" && computerSelection==="rock"){
    ++computerScore
    alert("Computer Wins")
    }
     
 }

// Test the function

//console.log(playRound(playerSelect, computerSelection));

// Make a function to play a game that keeps score and plays for five rounds.

function game(){
  for (let i = 0; i < 5; i++){
    playerSelection = prompt("Enter rock, paper, scissors", "");
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    
    if (playerScore > computerScore){
        alert("You are ahead. Score is Player:" + playerScore + " Computer:" + computerScore)};
    if (computerScore > playerScore){
        alert("Computer is ahead. Score is Player:" + playerScore + " Computer:" + computerScore)};
    if (playerScore===computerScore){
        alert("Its a tie. Score is Player:" + playerScore + " Computer:" + computerScore)};

    }
}

function pickwinner (){
    game();
    if (playerScore > computerScore){
        alert("You Win")};
    if (computerScore > playerScore){
        alert("You Lose")};
    if (playerScore===computerScore){
        alert("You tied")};
}

console.log(pickwinner());


