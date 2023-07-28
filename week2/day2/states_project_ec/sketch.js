let red;
let blue;
let rect1Color, rect2Color;

function setup(){
    createCanvas(500, 500);
    red = color(255, 0, 0);
    blue = color(0, 0, 255);
    rect1Color = red;
    rect2Color = blue;
}

function draw(){
    fill(rect1Color);
    rect(0,0,250);
    fill(rect2Color);
    rect(250,0,250);
}

function mouseClicked(){
    if(mouseX <= 250 && mouseY <= 250){
        if(rect1Color == red){
            rect1Color = blue;
        }else{
            rect1Color = red;
        }
    }else{
        if(rect2Color == red){
            rect2Color = blue;
        }else{
            rect2Color = red;
        }
    }
}