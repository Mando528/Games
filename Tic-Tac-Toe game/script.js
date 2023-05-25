//whose player turn
let whoseTurn = document.querySelector(".x-o");

//score board
let playerX=Number(localStorage.getItem("xScore")) || 0;
let playerO=Number(localStorage.getItem("oScore")) || 0;
let xScore = document.querySelector(".xscore");
let oScore = document.querySelector(".oscore");

//play field
let gameField = document.querySelectorAll(".game-field");

//score reset btn
const resetBtn = document.querySelector(".reset-btn");

//winning message
const winningMessage = document.querySelector(".winning-message");
let whoWon = document.querySelector(".winning-message .x-o");
let winnerIs = document.querySelector(".winning-message p");
const playAgain = document.querySelector(".play-again");

window.addEventListener("load",()=>{
    xScore.textContent=playerX;
    oScore.textContent=playerO;
    resetBtn.classList.add("disable");
    if(playerX>0||playerO>0){
        resetBtn.style.backgroundColor="#e41a1a";
        resetBtn.classList.remove("disable");
    }
})

gameField.forEach(field =>{

    //mouse over hover
    field.addEventListener("mouseover",()=>{
        mouseOver(field);
    });

    //remove hover on mouseout
    field.addEventListener("mouseout",()=>{
        mouseOut(field);
    });

    //type on click
    field.addEventListener("click",()=>{
        type(field);
        gameover(gameField);

    });

    
})



//hover on mouse over function
function mouseOver(field){
    if(field.textContent === " "){
        if(whoseTurn.textContent === "X"){
            field.textContent = "X";
        }
        else if(whoseTurn.textContent === "O"){
            field.textContent = "O";
        }
        field.style.color="#807777";
    }
    else{
        return;
    }
}

//remove the hover when mouse out
function mouseOut(field){
    if(field.style.color === "red" || field.style.color === "blue" || field.style.color === "white"){
        return;
    }
    else{
        field.textContent = " ";
    }
}

//Type the symbol when u click on the field
function type(field){
    if(field.style.color === "red" || field.style.color === "blue"){
        return;
    }
    else{
        if(whoseTurn.textContent === "X"){
            field.style.color="red";
            field.textContent ="X";
            whoseTurn.textContent = "O";
        }
        else if(whoseTurn.textContent === "O"){
            field.style.color="blue";
            field.textContent ="O";
            whoseTurn.textContent = "X";
        }
    }
}

//game over function
function gameover(gameField){
    for(i=0; i<=8 ; i++){

        //column win
        if(gameField[i].textContent ===gameField[i+3].textContent && gameField[i+3].textContent ===gameField[i+6].textContent && gameField[i].textContent !=" "){
            
            gameField[i].style.color="white";
            gameField[i].style.backgroundColor="black";
            gameField[i+3].style.color="white";
            gameField[i+3].style.backgroundColor="black";
            gameField[i+6].style.color="white";
            gameField[i+6].style.backgroundColor="black";

            if(gameField[i].textContent==="X"){
                playerX+=1;
                xScore.textContent=playerX;
                localStorage.setItem("xScore",playerX);
                winningMessage.style.display="flex";
                whoWon.textContent="X";
                winnerIs.style.color="red";
                }

            else if(gameField[i].textContent==="O"){
                    playerO+=1;
                    oScore.textContent=playerO;
                    localStorage.setItem("oScore",playerO);
                    winningMessage.style.display="flex";
                    whoWon.textContent="O";
                    winnerIs.style.color="blue";
                    }
            }

        //row win
        if(i===0 || i===3 || i==6){
            if(gameField[i].textContent ===gameField[i+1].textContent && gameField[i+1].textContent ===gameField[i+2].textContent && gameField[i].textContent !=" "){
                
                gameField[i].style.color="white";
                gameField[i].style.backgroundColor="black";
                gameField[i+1].style.color="white";
                gameField[i+1].style.backgroundColor="black";
                gameField[i+2].style.color="white";
                gameField[i+2].style.backgroundColor="black";

                if(gameField[i].textContent==="X"){
                    playerX+=1;
                    xScore.textContent=playerX;
                    localStorage.setItem("xScore",playerX);
                    winningMessage.style.display="flex";
                    whoWon.textContent="X";
                    winnerIs.style.color="red";
                    }
    
                else if(gameField[i].textContent==="O"){
                        playerO+=1;
                        oScore.textContent=playerO;
                        localStorage.setItem("oScore",playerO);
                        winningMessage.style.display="flex";
                        whoWon.textContent="O";
                        winnerIs.style.color="blue";
                        }
                }

            }
        
            //last row win cuz it's glitching idk why
            if(gameField[6].textContent ===gameField[7].textContent && gameField[7].textContent ===gameField[8].textContent && gameField[6].textContent !=" "){

                gameField[6].style.color="white";
                gameField[6].style.backgroundColor="black";
                gameField[7].style.color="white";
                gameField[7].style.backgroundColor="black";
                gameField[8].style.color="white";
                gameField[8].style.backgroundColor="black";

                if(gameField[6].textContent==="X"){
                    playerX+=1;
                    xScore.textContent=playerX;
                    localStorage.setItem("xScore",playerX);
                    winningMessage.style.display="flex";
                    whoWon.textContent="X";
                    winnerIs.style.color="red";
                }
                
                else if(gameField[6].textContent==="O"){
                        playerO+=1;
                        oScore.textContent=playerO;
                        localStorage.setItem("oScore",playerO);
                        winningMessage.style.display="flex";
                        whoWon.textContent="O";
                        winnerIs.style.color="blue";
                    }
                }
            
        //diagonal win
        if(i===0){
             //diagonal win from top left to right bottom
            if(gameField[i].textContent === gameField[i+4].textContent && gameField[i+4].textContent ===gameField[i+8].textContent && gameField[i].textContent !=" "){

                gameField[i].style.color="white";
                gameField[i].style.backgroundColor="black";
                gameField[i+4].style.color="white";
                gameField[i+4].style.backgroundColor="black";
                gameField[i+8].style.color="white";
                gameField[i+8].style.backgroundColor="black";

                if(gameField[i].textContent==="X"){
                    playerX+=1;
                    xScore.textContent=playerX;
                    localStorage.setItem("xScore",playerX);
                    winningMessage.style.display="flex";
                    whoWon.textContent="X";
                    winnerIs.style.color="red";
                }

                else if(gameField[i].textContent==="O"){
                        playerO+=1;
                        oScore.textContent=playerO;
                        localStorage.setItem("oScore",playerO);
                        winningMessage.style.display="flex";
                        whoWon.textContent="O";
                        winnerIs.style.color="blue";
                }
            }

            //diagonal win from top right to left bottom
            else if(gameField[i+2].textContent ===gameField[i+4].textContent && gameField[i+4].textContent ===gameField[i+6].textContent && gameField[i+2].textContent !=" "){

                gameField[i+2].style.color="white";
                gameField[i+2].style.backgroundColor="black";
                gameField[i+4].style.color="white";
                gameField[i+4].style.backgroundColor="black";
                gameField[i+6].style.color="white";
                gameField[i+6].style.backgroundColor="black";

                if(gameField[i+2].textContent==="X"){
                    playerX+=1;
                    xScore.textContent=playerX;
                    localStorage.setItem("xScore",playerX);
                    winningMessage.style.display="flex";
                    whoWon.textContent="X";
                    winnerIs.style.color="red";
                }

                else if(gameField[i+2].textContent==="O"){
                        playerO+=1;
                        oScore.textContent=playerO;
                        localStorage.setItem("oScore",playerO);
                        winningMessage.style.display="flex";
                        whoWon.textContent="O";
                        winnerIs.style.color="blue";
                }
            }
        }

        else if(gameField[0].textContent!=" " && gameField[1].textContent!=" " && gameField[2].textContent!=" "&& gameField[3].textContent!=" "&& gameField[4].textContent!=" "&& gameField[5].textContent!=" "&& gameField[6].textContent!=" "&& gameField[7].textContent!=" "&& gameField[8].textContent!=" "){
            winnerIs.textContent="It's a tie";
            winnerIs.style.color="#fff";
        }   
    }
}


//reset the score when u press reset button
resetBtn.addEventListener("click",()=>{
    window.location.reload();
    playerX=0;
    playerO=0;
    localStorage.setItem("xScore",playerX);
    localStorage.setItem("oScore",playerO);
    resetBtn.style.backgroundColor="#830e0e";
    resetBtn.classList.add("disable");
})


playAgain.addEventListener("click",()=>{
    window.location.reload();
})