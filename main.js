


const computerchoice = ["rock", "paper", "scissors"];


//this is the function that randomizes the computer choice for the game
function getComputerChoice () {
    let cchoice = computerchoice[Math.floor(Math.random() * computerchoice.length)];
    return cchoice;
    
}

//variables for the score and rounds
let playerScore = 0;
let computerScore = 0;
let roundNo = 0;

const scissorsIMG = document.getElementById("sciss");
const papersIMG = document.getElementById("paperS");
const rockIMG = document.getElementById("rockS");

scissorsIMG.addEventListener('click', playSciss);
papersIMG.addEventListener('click', playPapers);
rockIMG.addEventListener('click', playRocks);

//function that plays each round
function playSciss(){
    let computerSelection = getComputerChoice();
        if (computerSelection==="scissors"){
        ++roundNo
        alert("Tie")
        }
        else if (computerSelection==="paper"){
        ++roundNo
        ++playerScore
        alert("Player Wins")
        }
        else if (computerSelection==="rock"){
        ++roundNo
        ++computerScore
        alert("Computer Wins")
        }
    
        document.getElementById("playerScores").textContent = "Player Score: " + playerScore;
        document.getElementById("computerScores").textContent = "Computer Score: " + computerScore;
        document.getElementById("roundCounter").textContent = "Rounds: " + roundNo;

        if (roundNo===5 && playerScore > computerScore){
            document.getElementById("theWinner").textContent = "Player Wins"
        }
        if (roundNo===5 && playerScore < computerScore){
            document.getElementById("theWinner").textContent = "Computer Wins"
        }
        if (roundNo===5 && playerScore === computerScore){
            document.getElementById("theWinner").textContent = "Tie"
        }
         
    
}

function playPapers(){
    let computerSelection = getComputerChoice();
        if (computerSelection==="scissors"){
        ++roundNo
        ++computerScore
        alert("Computer Wins")
        }
        else if (computerSelection==="paper"){
        ++roundNo
        alert("Tie")
        }
        else if (computerSelection==="rock"){
        ++roundNo
        ++playerScore
        alert("Player Wins")}

        document.getElementById("playerScores").textContent = "Player Score: " + playerScore;
        document.getElementById("computerScores").textContent = "Computer Score: " + computerScore;
        document.getElementById("roundCounter").textContent = "Rounds: " + roundNo;

        if (roundNo===5 && playerScore > computerScore){
            document.getElementById("theWinner").textContent = "Player Wins"
        }
        if (roundNo===5 && playerScore < computerScore){
            document.getElementById("theWinner").textContent = "Computer Wins"
        }
        if (roundNo===5 && playerScore === computerScore){
            document.getElementById("theWinner").textContent = "Tie"
        }

}

function playRocks(){
    let computerSelection = getComputerChoice();
        if (computerSelection==="scissors"){
        ++roundNo
        ++playerScore
        alert("Player Wins")
        }
        else if (computerSelection==="paper"){
        ++roundNo
        ++computerScore
        alert("Computer Wins")
        }
        else if (computerSelection==="rock"){
        ++roundNo
        alert("Tie")
        }

        document.getElementById("playerScores").textContent = "Player Score: " + playerScore;
        document.getElementById("computerScores").textContent = "Computer Score: " + computerScore;
        document.getElementById("roundCounter").textContent = "Rounds: " + roundNo;

        if (roundNo===5 && playerScore > computerScore){
            document.getElementById("theWinner").textContent = "Player Wins"
        }
        if (roundNo===5 && playerScore < computerScore){
            document.getElementById("theWinner").textContent = "Computer Wins"
        }
        if (roundNo===5 && playerScore === computerScore){
            document.getElementById("theWinner").textContent = "Tie"
        }

}

//papersIMG.addEventListener('click', playRound("paper"));
//rockIMG.addEventListener('click', playRound("rock"));

//this is a test function to ensure Event Listener is working properly
/*function testF (e){
    console.log("Test Works");
}*/

//this plays a round of the game
/*function playRound (playerChoice){
    let computerSelection = getComputerChoice();
    if (playerChoice==="rock" && computerSelection==="scissors"){
    ++playerScore
    alert("Player Wins")
    }
    else if (playerChoice==="rock" && computerSelection==="paper"){
    ++computerScore
    alert("Computer Wins")
    }
    else if (playerChoice==="rock" && computerSelection==="rock"){
    alert("Tie")
    }
    else if (playerChoice==="paper" && computerSelection==="scissors"){
    ++computerScore
    alert("Computer Wins")
    }
    else if (playerChoice==="paper" && computerSelection==="paper"){
    alert("Tie")
    }
    else if (playerChoice==="paper" && computerSelection==="rock"){
    ++playerScore
    alert("Player Wins")
    }
    else if (playerChoice==="scissors" && computerSelection==="scissors"){
    alert("Tie")
    }
    else if (playerChoice==="scissors" && computerSelection==="paper"){
    ++playerScore
    alert("Player Wins")
    }
    else if (playerChoice==="scissors" && computerSelection==="rock"){
    ++computerScore
    alert("Computer Wins")
    }

    document.getElementById("playerScores").textContent = playerScore;
    document.getElementById("computerScores").textContent = computerScore;
     
 }



 //!Old code below, ignore!//

//console.log(getComputerChoice());



//let playerSelection;
//let computerSelection;



//this plays one round of the game
/*function playRound (playerSelection, computerSelection){

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
/*


//console.log(playRound(playerSelect, computerSelection));


//this plays the game five times
/*function game(){
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
}*/

//this declares a winner
/*function pickwinner (){
    game();
    if (playerScore > computerScore){
        alert("You Win")};
    if (computerScore > playerScore){
        alert("You Lose")};
    if (playerScore===computerScore){
        alert("You tied")};
}*/

//console.log(pickwinner());
