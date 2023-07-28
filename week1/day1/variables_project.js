//Part 1 - VARIABLES GYMNASTICS  
//Program 1
let x;
x = 1;
//No output

//Program 2
console.log("The value of x is", x);
//The value of x is 1

//Program 3
let newVar = 'All Star Code!';
console.log(newvar);
//Error Occurs 

//Program 4
let var1 = 20;
let var2 = 30;
let var3 = 'ABC';
let var4 = 'def';
let var5 = '20';
let var6 = '30';

let answer1 = var1 + var2;
let answer2 = var3 + var4;
let answer3 = var5 + var6;

console.log(answer1, answer2, answer3);
//50 ABCdef 2030

//Program 5
let num1 = 5;
let num2 = 3;
num1 = 10;

let sum1 = num1 + num2;
console.log("Sum:", sum1);
//Sum: 13

//Program 6
let num3 = 5;
let num4 = 3;

let sum2 = num3 + num4;
num3 = 10;
console.log("Sum:", sum2);
//Sum: 8

//Program 7
const luckyNumber = 8;
luckyNumber = 2;

console.log(luckyNumber);
//Error Occurs

//Part 2 - FIXING REDUNDANCY 
let regularTicketPrice = 45;
let frontRowTicketPrice = 75;
let regularTicketCount = 4;
let frontRowTicketCount = 2;
let cost = regularTicketPrice * regularTicketCount + frontRowTicketPrice * frontRowTicketCount;

let sellingPricePercentage = 1.5;
let sellingPrice = cost * sellingPricePercentage;

let sellerFeePerecentage = 0.2;
let sellerFee = sellingPrice * sellerFeePerecentage;

let profit = sellingPrice - cost - sellerFee;

// We're going to earn a profit by reselling tickets
// We bought some tickets to see Billie Eilish
// 4 regular tickets for $45 each and 2 front row tickets for $75 each
console.log('Cost:', cost);


// We're reselling the tickets for 50% above the original price
console.log('Selling price:', sellingPrice);


// But StubHub, the online ticket selling platform, charges a 20% seller fee
console.log('Seller fee:', sellerFee);


// Our total profit:
console.log('Profit:', profit);

//Extra Credit - VARIABLES, VARIABLES EVERYWHERE

let x1 = 4;
let y = 5;
const z = -3;
y = y + z;
x1 = x1 * y - 2;
x1 = y ** (-z);
y - 1;

/*
Predictions:
x = 8
y = 2
z = -3
*/