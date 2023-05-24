//btns
let computerResult = document.querySelector("#computer-choice");
let computerBtn = document.querySelector("#computer-choice img");
let playerChoice = document.querySelector(".player-btns");
let playerBtn = document.querySelectorAll(".player-choice");


//score
let playerScore = document.querySelector(".player-result p");
let computerScore = document.querySelector(".computer-result p");

let pscore=Number(localStorage.getItem("pscore")) || 0;
let cscore=Number(localStorage.getItem("cscore")) || 0;
//rock paper scissors
const rock =  document.querySelector(".rock");
const paper =  document.querySelector(".paper");
const scissors =  document.querySelector(".scissors");

let computerChoice =[rock,paper,scissors];



//reset and play again
const reset = document.querySelector("#reset");
const playAgain = document.querySelector("#play-again");

window.addEventListener("load",()=>{
    if(cscore > 0 || pscore>0){
        reset.classList.remove("disable");
        reset.style.backgroundColor="#e21d1d";
    }
    else{
        reset.classList.add("disable");
    }
    playAgain.classList.add("disable");
    computerScore.innerHTML=cscore;
    playerScore.innerHTML=pscore;
})


playerBtn.forEach(e=>{
    e.addEventListener("click",()=>{
        playerChoice.style.transform="translateY(220px)";
        e.classList.add("nothing");
        e.style.transitionDelay="0.6s";
        e.style.transform="translateY(-220px)";
        let playerImage = document.querySelector(".nothing img");

        computerBtn.src=computerChoice[Math.floor(Math.random()*3)].src;
        computerResult.classList.add("disable");
        computerResult.style.transform="translateY(0px)";
        computerResult.style.transitionDelay="0.6s";

        switch(playerImage.src){
            case "http://127.0.0.1:5500/images/rock.png":
                switch(computerBtn.src){
                    case "http://127.0.0.1:5500/images/rock.png":
                        break;
                    case "http://127.0.0.1:5500/images/paper.png":
                        cscore+=1;
                        computerScore.innerHTML=cscore;
                        break;
                    case "http://127.0.0.1:5500/images/scissors.png":
                        pscore+=1;
                        playerScore.innerHTML=pscore;
                        break;
                }
                break;


            case "http://127.0.0.1:5500/images/paper.png":
                switch(computerBtn.src){
                    case "http://127.0.0.1:5500/images/paper.png":
                        computerScore.innerHTML=cscore;
                        playerScore.innerHTML=pscore;
                        break;
                    case "http://127.0.0.1:5500/images/scissors.png":
                        cscore+=1;
                        computerScore.innerHTML=cscore;
                        break;
                    case "http://127.0.0.1:5500/images/rock.png":
                        pscore+=1;
                        playerScore.innerHTML=pscore;
                        break;
                    default:
                        return;
                }
                break;


                case "http://127.0.0.1:5500/images/scissors.png":
                    switch(computerBtn.src){
                        case "http://127.0.0.1:5500/images/scissors.png":
                            break;
                        case "http://127.0.0.1:5500/images/rock.png":
                            cscore+=1;
                            computerScore.innerHTML=cscore;
                            break;
                        case "http://127.0.0.1:5500/images/paper.png":
                            pscore+=1;
                            playerScore.innerHTML=pscore;
                            break;
                        default:
                            return;
                    }
                    break;
        }

        
        e.style.border="none";
        e.classList.add("disable")
        playAgain.style.backgroundColor="#07c737";
        if(cscore > 0 || pscore>0){
            reset.classList.remove("disable");
            reset.style.backgroundColor="#e21d1d";
        }
        playAgain.classList.remove("disable");
        localStorage.setItem("pscore",pscore);
        localStorage.setItem("cscore",cscore);
    })


    reset.addEventListener("click",()=>{
        cscore = 0;
        pscore = 0
        computerScore.innerHTML=cscore;
        playerScore.innerHTML=pscore;

        reset.style.backgroundColor="#8f1919";
        localStorage.setItem("pscore",pscore);
        localStorage.setItem("cscore",cscore);

        window.location.reload();
    })
    

    playAgain.addEventListener("click",()=>{
        playAgain.classList.add("disable");
        window.location.reload();
    })
})
