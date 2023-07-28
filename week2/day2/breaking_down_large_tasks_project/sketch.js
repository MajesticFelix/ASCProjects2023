let square1color, square2color, square3color;

function setup(){
    createCanvas(500, 500);
    background(0, 0 ,0);
    square1color = color(255,0,0);
    square2color = color(0,255,0);
    square3color = color(0,0,255);
}

function draw(){
    background(0, 20);
    fill(square1color);
    rect(mouseX-37.5, 100, 75, 75);
    fill(square2color);
    rect(mouseX-37.5, 200, 75, 75);
    fill(square3color);
    rect(mouseX-37.5, 300, 75, 75);
}

function mouseClicked(){
    square1color = color(random(0,255), random(0,255), random(0,255));
    square2color = color(random(0,255), random(0,255), random(0,255));
    square3color = color(random(0,255), random(0,255), random(0,255));
}