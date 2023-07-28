let counter = 0;

function setup() {
    createCanvas(500, 500);
    background(255, 255, 255);
 }
 
 
 function draw() {
    fill(0, 0,0);
    rect(0,0,90,60);
    textSize(20);
    fill(255, 255, 255);
    text("Clear \nCanvas", 10, 20);
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    let opacity = random (120, 180);
    fill(r, g, b, opacity);
    noStroke();
 
 
    let size = random(5, 35);
    let offSetX = random(-25, 25);
    let offSetY = random(-25, 25);
    if(counter == 0){
        ellipse(mouseX + offSetX, mouseY + offSetY, size, size);
    }else if(counter == 1){
        rect(mouseX + offSetX, mouseY + offSetY, size, size);
    }else if(counter == 2){
        triangle(mouseX + offSetX, mouseY + offSetY, mouseX, mouseY, mouseX + size, mouseY + size);
    }
 }
 
 
 function mouseClicked() {
    counter++;
    if(mouseX <= 90 && mouseY <= 60){
        counter--;
        background(255,255,255);
    }
    if(counter == 3){
        counter = 0;
    }
 }
 