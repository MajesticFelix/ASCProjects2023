// Part 1 - EVEN OR ODD

evenOrOdd(7);
evenOrOdd(6872);
evenOrOdd(-5);
evenOrOdd(0);

function evenOrOdd(num){
    console.log("Your number is:", num);
    if(num%2==0){
        console.log(num, "is even");
    }else{
        console.log(num, "is odd");
    }
}

// Part 2 - DIVISIBLE OR NOT?

divisor(9, 3);
divisor(27, 5);
divisor(10001, 10);
divisor(598, 13);

function divisor(dividend, divisor){
    if(dividend%divisor==0){
        console.log(dividend, "is divisible by", divisor);
        return true;
    }else{
        console.log(dividend, "is NOT divisible by", divisor);
        return false;
    }
}

// Part 3 - THE DISTANCE CALCULATOR

distanceCalculator("Michael", 3.28, 2.26, "Anthony", 3.92, 3);
distanceCalculator("you", 0, 0, "I", 0, 0);

function distanceCalculator(name1, x1, y1, name2, x2, y2){
    let distance = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
    console.log(name1, "and", name2, "are", distance, "meter(s) apart");
}

// Part 4 - ARRAY AND DATA TYPES

arrayHandler([1, "a", 2, "b", 3, "c"]);
arrayHandler(['H', 'E', 'L', false, true, 1, 2, 55, 'L', 'O']);
arrayHandler(['string numbers', '1', '2', '3']);

function arrayHandler(array){ 
    for(let i = 0; i < array.length; i++){
        if(typeof(array[i]) == "string"){
            console.log(array[i]);
        }
    }
    console.log();
}

// Extra Credit - PRIME NUMBERS

primeOrNot(7);
primeOrNot(9);
primeOrNot(13);

function primeOrNot(num){
    for(let i = 2; i < num; i++){
        if(divisor(num, i) == true){
            console.log(num , "is NOT a PRIME NUMBER");
            console.log();
            return;
        }
    }
    console.log(num , "is a PRIME NUMBER");
    console.log();
}