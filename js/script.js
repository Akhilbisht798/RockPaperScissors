let msg = document.getElementById("msg");
let player = document.getElementById("player");
let computer = document.getElementById("computer");
let btn = document.querySelector(".btn")
let end = document.getElementById("end");

function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function WhoWin(ComputerChoice, playerChoice) {
    if(ComputerChoice == playerChoice) {
        msg.innerHTML = "Tie game";
    }
    if(ComputerChoice == "Rock" && playerChoice == "Paper") {
        msg.innerHTML = "You Win! Paper beats Rock";
        return true;
    }
    else if(ComputerChoice == "Paper" && playerChoice == "Scissor") {
        msg.innerHTML = "You Win! Scissor Cuts Paper";
        return true;
    }
    else if(ComputerChoice == "Scissor" && playerChoice == "Rock") {
        msg.innerHTML = "You Win! Rock breaks Scissor";
        return true;
    }
    else if(ComputerChoice == "Paper" && playerChoice == "Rock") {
        msg.innerHTML = "You Loss! Paper beats Rock";
        return false;
    }
    else if(ComputerChoice == "Scissor" && playerChoice == "Paper") {
        msg.innerHTML = "You Loss! Scissor Cuts Paper";
        return false;
    }
    else if(ComputerChoice == "Rock" && playerChoice == "Scissor") {
        msg.innerHTML = "You Loss! Rock breaks Scissor";
        return false;
    }
}

let playerScore = 0; 
let computerScore = 0;

function game(playerinput) {
    let computerinput = getComputerChoice();
    let win = WhoWin(computerinput, playerinput);
    if(win == true) {
        playerScore = playerScore + 1;
    }
    else if(win == false){
        computerScore = computerScore + 1;
    }
    player.innerHTML = playerScore;
    computer.innerHTML = computerScore;
    if(playerScore >= 5) {
        msg.innerHTML = "You win";
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissor").disabled = true;
        end.innerHTML = "Refresh to Play again";
    }
    else if(computerScore >= 5){
        msg.innerHTML = "Computer Win";
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissor").disabled = true;
        end.innerHTML = "Refresh to Play again";
    }
}