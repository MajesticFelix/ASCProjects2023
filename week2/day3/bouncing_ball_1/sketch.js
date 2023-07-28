let xPos = 25;
let direction = 1;

function setup() {
   createCanvas(500, 500);
   background(0);
}


function draw() {
   background(0);


   fill(0, 255, 0);
   ellipse(xPos, 250, 50, 50);


   xPos += 3 * direction;


   if (xPos > 475 || xPos < 25) {
       direction *= -1;
   }
}
