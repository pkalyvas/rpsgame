function getComputerChoice(){
    const choices = ["paper","rock","scissors"];
    const choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

function playRound(computerSelection,playerSelection){
    let pcchoice = computerSelection.toString().toLowerCase();
    let plrchoice = playerSelection.toString().toLowerCase();
    console.log(pcchoice,plrchoice);
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
        if (cpcchoice == "paper"){
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


function game(){
    let plrscore = 0;
    let pcscore = 0;
    for(let i = 0; i < 5; i++){
        let plrchoice = prompt("Please choose(write) : paper | rock | scissors ");
        let x = playRound(getComputerChoice(),plrchoice);
       
        if ( x == 1 ){
            console.log("Congratulations you won the round !");
            plrscore ++;
        }else if(x == -1){
            console.log("You lost the round !");
            pcscore ++;
        }
    }
    if (pcscore > plrscore){
        console.log("Lost the game !",pcscore," ",plrscore);
    }else if(pcscore < plrscore){
        console.log("Won the game !", pcscore," ",plrscore);
    }else{
        console.log("Draw !", pcscore," ",plrscore);
    }
}
game();