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
    if(field.style.color === "red" || field.style.color === "blue"){
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
        if(gameField[i].textContent ==="X" && gameField[i+3].textContent ==="X" && gameField[i+6].textContent ==="X"){
            if(!alert("X is the winner")){
                playerX+=1;
                xScore.textContent=playerX;
                window.location.reload();
                localStorage.setItem("xScore",playerX);
            }
        }
        if(i===0 || i===3 || i==6){
            if(gameField[i].textContent ==="X" && gameField[i+1].textContent ==="X" && gameField[i+2].textContent ==="X"){
                if(!alert("X is the winner")){
                    playerX+=1;
                    xScore.textContent=playerX;
                    window.location.reload();
                    localStorage.setItem("xScore",playerX);
                }
            }
            if(gameField[6].textContent ==="X" && gameField[7].textContent ==="X" && gameField[8].textContent ==="X"){
                if(!alert("X is the winner")){
                    playerX+=1;
                    xScore.textContent=playerX;
                    window.location.reload();
                    localStorage.setItem("xScore",playerX);
                }
            }
        }

        else if(gameField[i].textContent ==="X" && gameField[i+4].textContent ==="X" && gameField[i+8].textContent ==="X"){
            if(!alert("X is the winner")){
                playerX+=1;
                xScore.textContent=playerX;
                window.location.reload();
                localStorage.setItem("xScore",playerX);
            }
        }

        if(i===0){
            if(gameField[i+2].textContent ==="X" && gameField[i+4].textContent ==="X" && gameField[i+6].textContent ==="X"){
                if(!alert("X is the winner")){
                    playerX+=1;
                    xScore.textContent=playerX;
                    window.location.reload();
                    localStorage.setItem("xScore",playerX);
                }
            }
        }

        else if(gameField[i].textContent ==="O" && gameField[i+3].textContent ==="O" && gameField[i+6].textContent ==="O"){
            if(!alert("O is the winner")){
                playerO+=1;
                oScore.textContent=playerO;
                window.location.reload();
                localStorage.setItem("oScore",playerO);
            }
        }

        if(i===0 || i===3 || i===6){
            if(gameField[i].textContent ==="O" && gameField[i+1].textContent ==="O" && gameField[i+2].textContent ==="O"){
                if(!alert("O is the winner")){
                    playerO+=1;
                    oScore.textContent=playerO;
                    window.location.reload();
                    localStorage.setItem("oScore",playerO);
                }
            }
            if(gameField[6].textContent ==="O" && gameField[7].textContent ==="O" && gameField[8].textContent ==="O"){
                if(!alert("O is the winner")){
                    playerO+=1;
                    oScore.textContent=playerO;
                    window.location.reload();
                    localStorage.setItem("oScore",playerO);
                }
            }
        }


        else if(gameField[i].textContent ==="O" && gameField[i+4].textContent ==="O" && gameField[i+8].textContent ==="O"){
            if(!alert("O is the winner")){
                playerO+=1;
                oScore.textContent=playerO;
                window.location.reload();
                localStorage.setItem("oScore",playerO);
            }
        }

        if(i===0){
            if(gameField[i+2].textContent ==="O" && gameField[i+4].textContent ==="O" && gameField[i+6].textContent ==="O"){
                if(!alert("O is the winner")){
                    playerO+=1;
                    oScore.textContent=playerO;
                    window.location.reload();
                    localStorage.setItem("oScore",playerO);
                }
            }
        }

        else if(gameField[8].textContent!=" " && gameField[1].textContent!=" " && gameField[2].textContent!=" "&& gameField[3].textContent!=" "&& gameField[4].textContent!=" "&& gameField[5].textContent!=" "&& gameField[6].textContent!=" "&& gameField[7].textContent!=" "&& gameField[0].textContent!=" "){
            alert("It's a tie");
            window.location.reload();
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