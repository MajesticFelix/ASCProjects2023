// Part 1 - CONDITIONALS GYMNASTICS
// Program 1:
// @
// #
// Program 2:
// @
// Program 3:
// @
// ^
// Program 4:
// 7
// Program 5: 
// true blocks are executed

//Part 2 - GUESS THAT NUMBER

let userNumber = process.argv[2];
let randomNumber = Math.floor(Math.random()*101);
console.log("Your guess:", userNumber);
console.log("Random Number Generated:", randomNumber);
console.log();
if(userNumber > randomNumber){
    console.log("Your guess is TOO HIGH");
}else if(userNumber < randomNumber){
    console.log("Your guess is TOO LOW");
}else{
    console.log("You guessed right!");
}

//Part 3 - GRADER BOT

console.log();
let userInput = process.argv[2];
let score = 0;
console.log("Initial score:", score);
console.log();
if(userInput == undefined){
    console.log("Empty response… Bad user");
}else if(userInput == "A" || userInput == "B"){
    console.log("Wrong answer :(");
    score--;
}else if(userInput == "C"){
    console.log("RIGHT ANSWER! WOHOO!!!");
    score+=5;
}else if(userInput == "D"){
    console.log("Bad bad bad...");
    score-=50;
}else if(userInput == "I.KNOW.THE.SECRET"){
    console.log("Welcome to NIRVANA");
    score+=1000000;
}
console.log("Final score:", score);

//Extra Credit - WHO’S THAT POKEMON?

let species = process.argv[2];
let nameOfSpecies = process.argv[3];
if(species == "Pokemon"){
    if(nameOfSpecies == "Pikachu"){
        console.log("Hello Pikachu, you’re an electric mouse!");
    }else if(nameOfSpecies == "Charmander"){
        console.log("Hello Charmander, your final evolution is cool beans!");
    }else{
        console.log("Hello " + nameOfSpecies + ", we do not have your Pokemon data yet…");
    }
}else if(species == "human"){
    console.log("Hello " + nameOfSpecies + ", you're a human, not a Pokemon :(");
}else{
    console.log("Unknown species… INTRUDER INTRUDER!");
}