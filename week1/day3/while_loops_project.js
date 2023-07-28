//Part 1a - COUNTING DOWN

/*let count = 100;
while(count > -1){
    console.log(count);
    count--;
}*/

//Part 1b - COUNTING DOWN + USER INPUT

/*let count = Number(process.argv[2]);
while(count > -1){
    console.log(count);
    count--;
}*/

//Part 2 - WHILE LOOP GYMNASTICS

/* 
1. 3 times
2. infinite times
3. 5 times
4. 2 times
5. let num = 0;
   while(num < 10){
    console.log("Little Donald Drumpf");
    num++;
   }
*/

//Part 3a - TWO RANDOM NUMBERS 

/*let num1 = 0;
let num2 = 1;
while(num1 != num2){
    num1 = Math.floor(Math.random()*11);
    num2 = Math.floor(Math.random()*11);
    console.log("1st random number:", num1, "2nd random numnber:", num2);
}
console.log("Same random numbers! End loop");*/

//Part 3b - TWO RANDOM NUMBERS 

let num1 = 0;
let num2 = 1;
let count = 0;
while(num1 != num2){
    num1 = Math.floor(Math.random()*11);
    num2 = Math.floor(Math.random()*11);
    console.log("1st random number:", num1, "2nd random numnber:", num2);
    count++;
}
console.log("Same random numbers on try #" + count + "! End loop");

//Extra Credit - BINARY NUMBERS 

let input = Number(process.argv[2]);
let binaryNum = "";
while(input != 0){
    let remainder = input%2;    
    binaryNum = remainder + binaryNum;
    console.log(input, "%", 2, "=", remainder, "---", Number(binaryNum));    
    console.log(input, "/", 2, "=", Math.floor(input/2));
    input = Math.floor(input/2);
    console.log();
}
console.log();
console.log("Number in decimal:", Number(process.argv[2]));
console.log("Number in binary :", Number(binaryNum));