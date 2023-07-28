let yPos;
let xPos;
let shapeColor;
let speed;
let reached;

function setup() {
   createCanvas(500, 500);
   background(0);
   yPos = 25;
   xPos = 25;
   shapeColor = color(0, 255, 0);
   speed = 3;
   reached = false;
}


function draw() {
   background(0, 20);
   fill(shapeColor);
   if(reached){
    ellipse(xPos, 250, 50, 50);
    xPos += speed;
    if(xPos > 525){
        reached = false;
        xPos = -25;
    }
   }else{ 
     ellipse(250, yPos, 50, 50);
     yPos += speed;
     if (yPos > 525){
        reached = true;
        yPos = -25;
     }
    }
}

function mouseClicked(){
    if(reached){
        xPos = -25;
    }else{
        yPos = -25;
    }
    shapeColor = color(random(0,255), random(0,255), random(0,255));
    speed = random(3,7);
}
