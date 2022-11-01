let round = 0; 
let plrscore = 0;
let pcscore = 0;
document.getElementById("Rock").addEventListener("click",rockclick);
document.getElementById("Paper").addEventListener("click",paperclick);
document.getElementById("Scissors").addEventListener("click",scissorsclick);

function rockclick(){
    game("rock");
}
function paperclick(){
    game("paper");
}
function scissorsclick(){
    game("scissors");
}

function getComputerChoice(){
    const choices = ["paper","rock","scissors"];
    const choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

function playRound(computerSelection,playerSelection){
    round++;
    let pcchoice = computerSelection.toString().toLowerCase();
    let plrchoice = playerSelection.toString().toLowerCase();
    let txt = ' Round ' + round + ' Player chooses : ' + plrchoice +' and Computer chooses : ' + pcchoice  ;
    document.getElementById("textchoice").innerHTML = txt;

    if (plrchoice == "paper"){
        if (pcchoice == "paper"){
            return 0;
        }else if (pcchoice == "rock"){
            return 1;
        }else{
            return -1
        }
    }
    if (plrchoice == "rock" ){
        if (pcchoice == "paper"){
            return -1;
        }else if (pcchoice == "scissors"){
            return 1;
        }else{
            return 0;
        }
    }
    if (plrchoice == "scissors" ){
        if (pcchoice == "paper"){
            return 1;
        }else if (pcchoice == "scissors"){
            return 0;
        }else{
            return -1;
        }
    }
}


function game(plrchoice){    

    let x = playRound(getComputerChoice(),plrchoice);
    
    if ( x == 1 ){
        plrscore ++;
        document.getElementById("textwinners").innerHTML = "Congratulations! You won the round !" ;
        document.getElementById("player-score").innerHTML = plrscore ;
    }else if(x == -1){
        pcscore ++;
        document.getElementById("textwinners").innerHTML = "You lost the round !" ;
        document.getElementById("computer-score").innerHTML = pcscore ;
    }else{
        document.getElementById("textwinners").innerHTML = "Draw !" ;
    }
    if (pcscore >= 5 || plrscore >= 5){
        document.getElementById("Rock").removeEventListener("click",rockclick);
        document.getElementById("Paper").removeEventListener("click",paperclick);
        document.getElementById("Scissors").removeEventListener("click",scissorsclick);
        document.getElementById("textinfo").innerHTML = "";
        if (pcscore > plrscore){
            document.getElementById("textfinalwinners").innerHTML = "Lost the game !" ;
        }else if(pcscore < plrscore){
            document.getElementById("textfinalwinners").innerHTML = "Won the game !" ;
        }else{
            document.getElementById("textfinalwinners").innerHTML = "Draw !" ;
        }
        rps.forEach(button => button.remove());
    }
}