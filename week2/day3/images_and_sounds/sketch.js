let charmanderImage, bulbasaurImage, squirtleImage;
let charmanderSound, bulbasaurSound, squirtleSound;

function preload(){
    charmanderImage = loadImage("images/charmander.png");
    bulbasaurImage = loadImage("images/bulbasaur.png");
    squirtleImage = loadImage("images/squirtle.png");

    charmanderSound = loadSound("sounds/charmander.mp3");
    bulbasaurSound = loadSound("sounds/bulbasaur.mp3");
    squirtleSound = loadSound("sounds/squirtle.mp3");
}

function setup() {
    createCanvas(500, 500);
    background(0);
    noStroke();
 }
 
 
 function draw() {
    fill(255,0,0);
    rect(100,200,100,100);
    fill(0,255,0);
    rect(200,200,100,100);
    fill(0,0,255);
    rect(300,200,100,100);

    image(charmanderImage, 100,200,100,100);
    image(bulbasaurImage, 200,200,100,100);
    image(squirtleImage, 300,200,100,100);
 }

 function mouseClicked(){
    if(mouseX > 100 && mouseX < 200 && mouseY > 200 && mouseY < 300){
        charmanderSound.play();
    }
    if (mouseX > 200 && mouseX < 300 && mouseY > 200 && mouseY < 300) {
        bulbasaurSound.play();
    }
    if (mouseX > 300 && mouseX < 400 && mouseY > 200 && mouseY < 300) {
        squirtleSound.play();
    }
 }