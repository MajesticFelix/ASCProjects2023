function setup() {
    createCanvas(500, 500);
    background(135, 206, 235);
    noStroke();

    fill(124, 252, 0);
    rect(0,450,500,50);
    let gray = color(184, 190, 195);
    fill(gray);
    circle(100,50,75);
    circle(100,80,75);
    circle(50,65,75);
    circle(150,65,75);

    circle(200,50,75);
    circle(200,80,75);
    circle(250,65,75);

    circle(300,50,75);
    circle(300,80,75);
    circle(350,65,75);

    circle(400,50,75);
    circle(400,80,75);
    circle(450,65,75);

    stroke(252, 192, 30);
    strokeWeight(20);
    line(250,110,150,250);
    line(150,250,275,350);

    stroke(255,255,0);
    strokeWeight(2);
    fill(255, 165, 0);
    triangle(200,450,220,350,240,450);
    triangle(240,450,260,350,280,450);
    triangle(280,450,300,350,320,450);
 }
 