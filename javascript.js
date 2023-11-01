let playerScore = 0;
let computerScore = 0;

function displayCurrentScore(){
    document.getElementById('playerScore').textContent = 
    "Player Score: "+playerScore;
    document.getElementById('computerScore').textContent = "Computer Score: "+computerScore;
};

function game(obj){
    let playerSelection = obj.getAttribute('class');
    //console.log(playerSelection);
    let computerSelection = getComputerChoice();
    //console.log(computerSelection);
    //console.log(play(playerSelection, computerSelection));
    let result = play(playerSelection, computerSelection);
    
    const resultDiv = document.createElement('div');
    resultDiv.className = "temp";
    resultDiv.textContent = result;
    resultDiv.style.fontSize="18px";
    resultDiv.style.textAlign="center";
    resultDiv.style.borderStyle = "solid";
    resultDiv.style.borderRadius = "5px";
    resultDiv.style.padding = "5px";
    resultDiv.style.margin = "5px";
    document.body.appendChild(resultDiv);

};
//Game logic
function play(playerSelection, computerSelection){
    //playerSelection = playerSelection.toLowerCase();
    displayCurrentScore();
    if(playerScore==5){
        alert("Player Won!");
        cleanUp();
    }else if(computerScore==5){
        alert("Computer Won!");
        cleanUp();
    }

    if(playerSelection=="rock" && computerSelection=="paper"){
        computerScore++;
        return "You Lose! Paper beats Rock";
    }
    if(playerSelection=="rock" && computerSelection=="scissor"){
        playerScore++;
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
        computerScore++;
        return "You Lose! Scissor beats Paper";
    }
    if(playerSelection=="paper" && computerSelection=="rock"){
        playerScore++;
        return "You Win! Paper beats Rock";
    }
//
    if(playerSelection=="scissor" && computerSelection=="paper"){
        playerScore++;
        return "You Win! Scissor beats Paper";
    }
    if(playerSelection=="scissor" && computerSelection=="scissor"){
        return "Draw!";
    }
    if(playerSelection=="scissor" && computerSelection=="rock"){
        computerScore++;
        return "You Lose! Rock beats Scissor";
    }
//
 };
function cleanUp(){
    displayCurrentScore();
    playerScore=0;
    computerScore=0;
    const elements = document.getElementsByClassName("temp");
    while(elements.length>=0){
        elements[0].parentNode.removeChild(elements[0]);
    }
};

 function getComputerChoice(){
    const rand = Math.floor(Math.random()*3); 
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

