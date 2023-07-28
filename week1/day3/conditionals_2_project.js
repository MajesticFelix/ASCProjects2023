// Part 1 - TRUTH TABLE MANIA
/*
1. false
2. true
3. true
4. false
*/

// Part 2 - WHAT’S MY GRADE?

let grade = process.argv[2];
if(grade == undefined){
    console.log("Empty response...")
}else{
    if(grade > 100 || grade < 0){
        console.log("Invalid input - Score out of range...");
    }else if(grade >= 90){
        console.log("Grade: A - Congrats!!! Keep it up!");
    }else if(grade >= 80){
        console.log("Grade: B - Good work. Keep at it.");
    }else if(grade >= 70){
        console.log("Grade: C - Please try harder");
    }else if(grade >= 60){
        console.log("Grade: D - Please try harder");
    }else if(grade < 60){
        console.log("Grade: F - Come see me :(");
    }else{
        console.log("Invalid input - Please enter a numeric value");
    }
}