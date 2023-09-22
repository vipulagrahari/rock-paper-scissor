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
// const playerSelection = "paper";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

function updateAnswer(playerSelection, computerSelection){
    const h3 = document.createElement('h3');
    // const container = document.querySelector("#container");
    let answer = playRound(playerSelection, computerSelection);

    // h3.textContent = answer;

    document.getElementById("container").innerHTML = `${answer}`;

    // container.appendChild(h3);
}



const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) =>{
        // alert(button.id);
        // console.log("HI")

        updateAnswer(button.id, getComputerChoice());
    })
}); 