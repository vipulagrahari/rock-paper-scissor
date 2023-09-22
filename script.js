function helper(choice, playerSelection, computerSelection){
    if(computerSelection == choice){
        return `you win! ${playerSelection} beats ${computerSelection}`;
    }
    return `you lose! ${computerSelection} beats ${playerSelection}`;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    if(playerSelection == computerSelection){
        return "Draw!";
    }

    switch(playerSelection){
        case "rock":
            return helper("scissor", playerSelection, computerSelection);
        
        case "paper":
            return helper("rock", playerSelection, computerSelection);
        
        case "scissor":
            return helper("paper", playerSelection, computerSelection);           

    }
}

function getComputerChoice(){
    let arr = ["rock", "paper", "scissor"];

    return arr[Math.floor(Math.random()*arr.length)];

}
const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
