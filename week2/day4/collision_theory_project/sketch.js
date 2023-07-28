let myXPos = 100;
let myYPos = 100;
let enemyXPos = 300;
let enemyYPos = 300;


let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;
let enemyColor;
let score = 0;
let myImage;
let enemyImage;
let enemySize = 50;

function setup() {
   createCanvas(500, 500);
   noStroke();
   myImage = loadImage("images/charmander.png");
   enemyImage = loadImage("images/bulbasaur.png");

   rectMode(CENTER);
   imageMode(CENTER);
   enemyColor = color(0, 0, 255);
}


function draw() {
   background(0);


   /*fill(enemyColor);
   rect(enemyXPos, enemyYPos, 50, 50);*/
   image(enemyImage, enemyXPos, enemyYPos, enemySize, enemySize);


   /*fill(255, 0, 0);
   rect(myXPos, myYPos, 50, 50);*/
   image(myImage, myXPos, myYPos, 50, 50);

   if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
       myXPos -= 3;
   }


   if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
       myXPos += 3;
   }


   if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
       myYPos -= 3;
   }


   if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
       myYPos += 3;
   }


   myLeft = myXPos - 25;
   myRight = myXPos + 25;
   myTop = myYPos - 25;
   myBottom = myYPos + 25;


   enemyLeft = enemyXPos - 25;
   enemyRight = enemyXPos + 25;
   enemyTop = enemyYPos - 25;
   enemyBottom = enemyYPos + 25;

   fill(255,255,255);
   textSize(20);
   text(`Score: ${score}`, 10, 30);

   if(myLeft <= enemyRight && myRight >= enemyLeft && myTop <= enemyBottom && myBottom >= enemyTop){
       enemyXPos = random(25, 475);
       enemyYPos = random(25, 475);
       enemyColor = color(random(0,255),random(0,255),random(0,255));
       enemySize = random(25, 100);
       score++;
   }
}
