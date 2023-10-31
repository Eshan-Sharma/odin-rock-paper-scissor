//Game logic
function play(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection=="rock" && computerSelection=="paper"){
        return "You Lose! Paper beats Rock";
    }
    if(playerSelection=="rock" && computerSelection=="scissor"){
        return "You Win! Rock beats Scissor";
    }
    if(playerSelection=="rock" && computerSelection=="rock"){
        return "Draw!";
    }
//
    if(playerSelection=="paper" && computerSelection=="paper"){
        return "Draw!";
    }
    if(playerSelection=="paper" && computerSelection=="scissor"){
        return "You Lose! Scissor beats Paper";
    }
    if(playerSelection=="paper" && computerSelection=="rock"){
        return "You Win! Paper beats Rock";
    }
//
    if(playerSelection=="scissor" && computerSelection=="paper"){
        return "You Win! Scissor beats Paper";
    }
    if(playerSelection=="scissor" && computerSelection=="scissor"){
        return "Draw!";
    }
    if(playerSelection=="scissor" && computerSelection=="rock"){
        return "You Lose! Rock beats Scissor";
    }
//
 };


 function getComputerChoice(){
    let rand = Math.floor(Math.random()*3); 
    if(rand==0){
        return "rock";
    }
    if(rand==1){
        return "paper";
    }
    if(rand==2){
        return "scissor";
    }
};
let playerSelection = prompt("Select from rock, paper scissor");
const computerSelection = getComputerChoice();
console.log("computer is :"+computerSelection);
console.log(play(playerSelection,computerSelection));
console.log(play(playerSelection,computerSelection));
console.log(play(playerSelection,computerSelection));
console.log(play(playerSelection,computerSelection));
console.log(play(playerSelection,computerSelection));