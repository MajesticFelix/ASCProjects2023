// Part 1 - USER INPUT GYMNASTICS  
/*
1. undefined
2. PIKACHU
3. BoooooooSpoooooky
   undefined
4. string
   undefined
5. twothree
*/

//Part 2 - WHAT'S YOUR INFO?

console.log('Name ', process.argv[2]);
console.log('Age  ', process.argv[3]);
console.log('Gender', process.argv[4]);
console.log('DOB  ', process.argv[5]);
console.log('Phone No.', process.argv[6]);

//Extra Credit - ADD’EM UP! 

console.log('Calculating...');
console.log();
console.log('Result:')
console.log(Number(process.argv[2]), '+', Number(process.argv[3]), '=', Number(process.argv[2])+Number(process.argv[3]));