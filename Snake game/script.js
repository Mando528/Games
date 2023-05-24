//size of the board
var blockSize = 25;
var rows = 16;
var cols = 20;

//intial place for the snake
let snakeX= blockSize*8;
let snakeY= blockSize*10;

//position of the food
let foodX;
let foodY;

//direction of the snake movement
let velocityX=0;
let velocityY=0;

//the board
var board;
var context;

//snakebody
let snakeBody=[];

//score
let score =0;
let highScore =localStorage.getItem("highScore") || 0;
let highScoreNumber = document.querySelector(".high-score-number");
let scoreNumber = document.querySelector(".score-number");

//game over boolean
let gameOver =false;



//loading the page
window.addEventListener("load",()=>{
    board = document.querySelector(".board");
    board.width=blockSize*cols;
    board.height=blockSize*rows;
    context = board.getContext("2d");

    highScoreNumber.innerHTML=highScore;
    
    placeFood();
    document.addEventListener("keyup",changeDirection);
    update();

    setInterval(update,1000/10);
})


//update the canvas
function update(){

    if(gameOver){
        return;
    }

    context.fillStyle="#060614";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = 'red';
    context.fillRect(foodX, foodY, blockSize, blockSize);


    //snake grow up and score increament
    if(snakeX === foodX && snakeY===foodY){
        snakeBody.push([foodX,foodY]);
        score+=1;
        scoreNumber.innerHTML=score;
        placeFood();
    }


    //move the snake
    for(i=snakeBody.length-1;i>0;i--){
        snakeBody[i]=snakeBody[i-1];
    }
    if(snakeBody.length){
        snakeBody[0]=[snakeX,snakeY];
    }

    //draw snake
    context.fillStyle="lime";
    snakeX+=velocityX*blockSize;
    snakeY+=velocityY*blockSize;
    for(i=0;i<snakeBody.length;i++){
        context.fillRect(snakeBody[i][0],snakeBody[i][1],blockSize,blockSize);
    }
    context.fillRect(snakeX,snakeY,blockSize,blockSize);


    //game over by colliding with the wall 
    if(snakeX<0 || snakeX>=board.width || snakeY<0 || snakeY>=board.height){
        gameOver=true;
        if(!alert(`Game is over, Your score is ${score}`)){
            window.location.reload();
        }
        if(score>=highScore){
            highScore=score;
            localStorage.setItem("highScore",highScore);
            highScoreNumber.innerHTML=highScore;
            }
        }

            //game over by hitting the tail
    for(i=0;i<snakeBody.length;i++){
        if(snakeX===snakeBody[i][0] && snakeY===snakeBody[i][1]){
            gameOver=true;
            if(!alert(`Game is over, Your score is ${score}`)){
                window.location.reload();
            }
            if(score>=highScore){
                highScore=score;
                localStorage.setItem("highScore",highScore);
                highScoreNumber.innerHTML=highScore;
                }
            }
    }

}



//place the food on the board
function placeFood(){
    foodX=Math.floor(Math.random()*cols)*blockSize;
    foodY=Math.floor(Math.random()*rows)*blockSize;
    for(i=0;i<snakeBody.length;i++){
        if(foodX===snakeBody[i][0] && foodY ===snakeBody[i][1]){
        foodX=Math.floor(Math.random()*cols)*blockSize;
        foodY=Math.floor(Math.random()*rows)*blockSize;
        }
    }
}


//change the direction of the snake movement
function changeDirection(e){
    if(e.code=="ArrowUp" && velocityY !=1){
        velocityX=0;
        velocityY=-1;
    }
    else if(e.code=="ArrowRight" && velocityX !=-1){
        velocityX=1;
        velocityY=0;
    }
    else if(e.code=="ArrowDown" && velocityY !=-1){
        velocityX=0;
        velocityY=1;
    }
    else if(e.code=="ArrowLeft" && velocityX !=1){
        velocityX=-1;
        velocityY=0;
    }
}





