//position of player, allows player to move;
let pacmanIdle, pacmanLeft, pacmanRight, pacmanUp, pacmanDown, pacmanSize = 30, pacmanX = 300, pacmanY = 300, speed = 5;
let pacmanMusic, biteSound, explosionSound;
let pauseImg, playImg, restartImg;
let lifeImg, noLifeImg;
let direction = "idle";
//Fruits
let strawberry, apple, orange, spike;
let itemPositions = [];
let itemCount = 0;
//Status
let lifeCount = -1;
let score = 0;
let pause = false;

// variable for switch between screens
let screen = 1;
// game end variable
let death = false;


function preload(){
    //Load images
    pacmanIdle = loadImage("images/pacmanIdle.png");
    pacmanLeft = loadImage("images/pacmanLeft.png");
    pacmanRight = loadImage("images/pacmanRight.png");
    pacmanUp = loadImage("images/pacmanUp.png");
    pacmanDown = loadImage("images/pacmanDown.png");
    pauseImg = loadImage("images/pause.png");
    playImg = loadImage("images/play.png");
    restartImg = loadImage("images/restart.png");
    lifeImg = loadImage("images/life.png");
    noLifeImg = loadImage("images/emptylife.png");
    strawberry = loadImage("images/strawberry.png");
    apple = loadImage("images/apple.png");
    orange = loadImage("images/orange.png");
    spike = loadImage("images/spike.png");
    
    //Load sounds
    pacmanMusic = loadSound("sounds/pacmanthemesong.mp3"); 
    biteSound = loadSound("sounds/bite.mp3");
    explosionSound = loadSound("sounds/explosion.wav");
}

function setup(){
    //Create canvas and play background music
    createCanvas(600,700);
    background(255);
    pacmanMusic.play();
    imageMode(CENTER);

    image(playImg, 525, 675, 50, 40);
    image(restartImg, 575, 675, 50, 40);
}

function draw(){
    //Game Frame and Boundaries
    strokeWeight(2);
    stroke(31, 81, 255);
    fill(0);
    rect(0,0,600,650, 20);
    //Starting screen for game
    if(screen == 1){
        createButtons();
    }
    //Game Screen
    if(screen == 2){     
        //Movement
        if(direction == "idle"){
            image(pacmanIdle, pacmanX, pacmanY, pacmanSize, pacmanSize);
        }else{
            if (direction == "up") {
                pacmanY -= speed;
                image(pacmanUp, pacmanX, pacmanY, pacmanSize, pacmanSize);
            } else if (direction == "down") {
                pacmanY += speed;
                image(pacmanDown, pacmanX, pacmanY, pacmanSize, pacmanSize);
            } else if (direction == "left") {
                pacmanX -= speed;
                image(pacmanLeft, pacmanX, pacmanY, pacmanSize, pacmanSize);
            } else if (direction == "right") {
                pacmanX += speed;
                image(pacmanRight, pacmanX, pacmanY, pacmanSize, pacmanSize);
            }
        }
        checkBorder();
        updateLife();
        updateItems();
    }
    //Win Screen
    if(score == 25){
        screen = 3;
    }
    if(screen == 3){
        fill(57,255,20);
        rect(0,0,600,650);
        noStroke();
        fill(0);
        textSize(100);
        text("Winner\nWinner\nChicken\nDinner", 120,150);
    }
    //loss screen
    if(death == true){
        screen = 4;
    }
    if(screen == 4){
        fill(255,0,0);
        noStroke();
        rect(0, 0, 600, 650);
        fill(0);
        textSize(100);
        text("GAME\nOVER", 150, 250);
    }

    //Score Tracker
    noStroke();
    fill(255);
    rect(127,660,50,40);
    textSize(40);
    fill(0);
    text(`Score: ${score}`,0,695);
}

function checkBorder(){
    let pacmansLeft = pacmanX - pacmanSize/2;
    let pacmansRight = pacmanX + pacmanSize/2;
    let pacmansTop = pacmanY - pacmanSize/2;
    let pacmansBottom = pacmanY + pacmanSize/2;

    if(pacmansLeft <= 0 ){
        pacmanX += pacmanSize/2;
    }
    if(pacmansRight >= 600){
        pacmanX -= pacmanSize/2;
    }
    if(pacmansTop <= 0){
        pacmanY += pacmanSize/2;
    }
    if(pacmansBottom >= 650){
        pacmanY -= pacmanSize/2;
    }
}

//Play or Pause Button function
function pressedPlayOrPauseButtons(){
    noStroke();
    fill(255,255,255);
    rect(500, 660, 50, 40);
    if(pause){
        image(playImg, 525, 675, 50, 40);
        pacmanMusic.play();
        frameRate(60);
        pause = false;    
    }else{
        image(pauseImg, 525, 675, 50, 40);
        pacmanMusic.stop();
        frameRate(0);
        pause = true;
    }
}

//Restart function
function pressedRestart(){
    frameRate(60);
    pacmanMusic.stop();
    pacmanSize = 30;
    pacmanX = 300;
    pacmanY = 300;
    speed = 5;
    screen = 1;
    score = 0;
    difficulty = "";
    lifeCount = -1;
    itemCount = 0;
    itemPositions = [];
    direction = "idle";
    death = false;
    setup();
}

function createButtons(){
    //Easy button
    stroke(57,255,20);
    fill(255, 255, 255);
    rect(200,100,200,100);
    fill(0,0,0);
    noStroke();
    textSize(30);
    text("Easy", 265, 160);

    //Medium Button
    stroke(57,255,20);
    fill(255, 255, 255);
    rect(200,250,200,100);
    fill(0,0,0);
    noStroke();
    textSize(30);
    text("Medium", 250, 310);

    //Hard Button
    stroke(57,255,20);
    fill(255, 255, 255);
    rect(200,400,200,100);
    fill(0,0,0);
    noStroke();
    textSize(30);
    text("Hard", 265, 460);
}

function updateItems(){
    let spikeCount = 0;
    let fruitCount = 0;

    // Count the number of spikes and fruits
    for (let i = 0; i < itemPositions.length; i++) {
        let item = itemPositions[i];
        if (item.type == "spike") {
            spikeCount++;
        } else {
            fruitCount++;
        }
    }

    //If there are more than 5 spikes, convert half of them to fruits
    if(spikeCount > 5){
        let spikesToReplace = Math.floor(spikeCount / 2);
        for(let i = 0; i < itemPositions.length; i++){
            let item = itemPositions[i];
            if(item.type == "spike"){
                let randomItem = Math.floor(Math.random()*3)+1;
                if(randomItem == 1){
                    item.type = "strawberry";
                }else if(randomItem == 2){
                    item.type = "apple";
                }else if(randomItem == 3){
                    item.type = "orange";
                }
                spikesToReplace--;
                if(spikesToReplace == 0){
                    break;
                }
            }
        }
    }

    //Picks random item
    //Fruits are 1, while spikes are 2 or bigger
    while (itemCount < 10) {
        // Add a new fruit
        let itemSize = random(30, 50);
          
        let itemX = Math.round(random(0, 600 - itemSize)) + itemSize;
        let itemY = Math.round(random(0, 600 - itemSize)) + itemSize;
        let randomItem = Math.floor(Math.random()*4)+1;     
        let itemType;

        let distance = pacmanSize / 2 + itemSize / 2 + 10; // Add a small buffer to avoid close spawns
        let overlap = false;

        // Check for overlap with existing items
        for(let i = 0; i < itemPositions.length; i++){
            let existingItem = itemPositions[i];
            let existingDistance = dist(existingItem.x, existingItem.y, itemX, itemY);
            if(existingDistance < distance){
                overlapping = true;
                break;
            }
        }

        // Check if the new item position overlaps with Pacman
        let distanceToPacman = dist(pacmanX, pacmanY, itemX, itemY);
        if (distanceToPacman < distance) {
            overlapping = true;
        }
        
        if(!overlap){
            if(randomItem == 1) {
                itemType = "strawberry";
            }else if (randomItem == 2) {
                itemType = "apple";
            }else if (randomItem == 3) {
                itemType = "orange";
            }else if (randomItem == 4){
                itemType = "spike";
            }
            // Store the fruit's position and type
            itemPositions.push({x: itemX, y: itemY, size: itemSize, type: itemType});
    
            // Increase the itemCount
            itemCount++;
        }   
    }
    
    // Display items
    for (let i = 0; i < itemPositions.length; i++) {
        let item = itemPositions[i];
        if (item.type == "strawberry") {
            image(strawberry, item.x, item.y, item.size, item.size);
        }else if (item.type == "apple") {
            image(apple, item.x, item.y, item.size, item.size);
        }else if (item.type == "orange") {
            image(orange, item.x, item.y, item.size, item.size);
        }else if (item.type == "spike"){
            image(spike, item.x, item.y, item.size, item.size);
        }
    }

    //Checks for collision with a fruit or spike
    for(let i = 0; i < itemPositions.length; i++){
        let item = itemPositions[i];
        let distance = dist(pacmanX, pacmanY, item.x, item.y);
        if(distance < pacmanSize/2 + item.size/2){
            //Collsion with fruit
            if(item.type == "strawberry") {
                biteSound.play();
                score += 1;
            }else if (item.type == "apple") {
                biteSound.play();
                score += 1;
            }else if (item.type == "orange") {
                biteSound.play();
                score += 1;
            }else if (item.type == "spike"){
                explosionSound.play();
                lifeCount--;
            }
            itemPositions.splice(i, 1);
            itemCount--;
            break; // Exit the loop after detecting one collision to avoid processing unnecessary checks
        }
    }
}

function updateLife(){
    let life1;
    let life2;
    let life3;
    if(lifeCount == 3){
        life1 = lifeImg;
        life2 = lifeImg;
        life3 = lifeImg;
    }else if(lifeCount == 2){
        life1 = lifeImg;
        life2 = lifeImg;
        life3 = noLifeImg;
    }else if(lifeCount == 1){
        life1 = lifeImg;
        life2 = noLifeImg;
        life3 = noLifeImg; 
    }else{
        life1 = noLifeImg;
        life2 = noLifeImg;
        life3 = noLifeImg;
        death = true;
    }
    image(life1,275,675,50,40);
    image(life2,325,675,50,40);
    image(life3,375,675,50,40);
}

function mouseClicked(){
    //Dificulty buttons
    if(mouseX > 200 && mouseX < 400){
        //Easy
        if(mouseY > 100 && mouseY < 200){
            screen = 2
            lifeCount = 3;
        }
        //Medium
        if(mouseY > 250 && mouseY < 350){
            screen = 2;
            lifeCount = 2;
        }
        //Hard
        if(mouseY > 400 && mouseY < 500){
            screen = 2;
            lifeCount = 1;
        }
    }

    //Pause/Play Button
    if(mouseX <= 550 && mouseX >= 500 && mouseY <= 700 && mouseY >= 660){
        pressedPlayOrPauseButtons();
    }
    //Restart Button
    if(mouseX <= 600 && mouseX >= 550 && mouseY <= 700 && mouseY >= 660){
        pressedRestart();
    }
}

function keyPressed(){
    //Spacebar or esc key to pause/play
    if(keyCode == 32 || keyCode == 27){
        pressedPlayOrPauseButtons();
    }

    //R key to reset
    if(keyCode == 82){
        pressedRestart();
    }

    //Movement
    if(keyCode == UP_ARROW || keyCode == 87){
        direction = "up";
    }
    if(keyCode == DOWN_ARROW || keyCode == 83){
        direction = "down";
    }
    if(keyCode == LEFT_ARROW || keyCode == 65){
        direction = "left";
    }
    if(keyCode == RIGHT_ARROW || keyCode == 68){
        direction = "right";
    } 
}