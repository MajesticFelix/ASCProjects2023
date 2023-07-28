// Part 1 - RANDOM SUM
let randNum1 = Math.floor(Math.random()*11);
console.log("Random number #1:", randNum1);
let randNum2 = Math.floor(Math.random()*11);
console.log("Random number #2:", randNum2);
console.log("Sum:", randNum1, '+', randNum2, '=', randNum1+randNum2);

//Part 2 - LUCKY STAR
let days = ['Friday', 'Monday', 'Today', 'Yesterday', 'Your Birthday', 'Never', 'Sundae'];
let reactions = ['Yay!', 'Ahhhhh!!!', 'Wu wi wa wa', 'Guli Guli', 'Ka chow'];

console.log("Your lucky day:", days[Math.floor(Math.random()*days.length)]);
console.log(reactions[Math.floor(Math.random()*reactions.length)]);

//Extra Credit - RANDOM NUMBER GENERATOR (ADVANCED)
// Task #1
console.log("Random number:", Math.floor(Math.random()*(17+1))+37);

// Task #2
console.log("Random number:", Math.floor(Math.random()*(Number(process.argv[3])-Number(process.argv[2])+1))+Number(process.argv[2]));