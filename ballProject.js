//Library of Functions for balls

//Generates a random value base on the value input
function getRandom(value){
    Math.floor(math.random() * value );
}

//Creates balls
function makeBall(color, positionX, positionY){
    ball = document.createElement('div');
    ball.style.backgroundColor = color;
    ball.className = 'ball';
    ball.style.heigth = 50;
    ball.style.width = 50;
    ball.style.left = positionX;
    ball.style.top = positionY;
    document.body.appendChild(ball);
}

//checks boundaries of walls
function checkBoundaries(maxX, maxY){
    if (reverseX){
        positionX = positionX + velocityX;
      } else {
        positionX = positionX - velocityX;
        };
   
    if (reverseY){  
        positionY = positionY + velocityY;
    } else {
        positionY =positionY - velocityY;
        };
    
    if(positionX >= maxX || positionX <= 0){
        reverseX =!reverseX};
    if(positionY >= maxY || positionY <=0){
        reverseY = !reverseY};
       
    ball.style.left = positionX + 'px';
    ball.style.top = positionY + 'px';
}