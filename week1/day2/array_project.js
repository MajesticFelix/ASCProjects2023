// Part 1 - DO I KNOW REALLY ARRAYS? 
/*
A. B
   D
   undefined

B. Mon
   Sun
   7
   undefined
   Sun

C. [ "Do", "Re", "Mi", "Fa", "So" ]
   [ "Do", "Re" ]
   []
*/

// Part 2 - AVERAGE SCORE

let scores = [85, 93, 65, 65, 92, 81, 93];
let sum = 0;
for(let i = 0; i < scores.length; i++){
    sum += scores[i];
}
console.log('Average:', sum/scores.length);

// Part 3 - ARRAY TRANSFORMATION

let myArray = ['a', 'b', 'c', 'd'];

console.log('Transformation #1:')
console.log('Before:', myArray);
myArray.reverse();
console.log('After: ', myArray);

console.log('Transformation #2:')
myArray = ['a', 'b', 'c', 'd'];
console.log('Before:', myArray);
myArray.push(1, 2);
console.log('After: ', myArray);

console.log('Transformation #3:')
myArray = ['a', 'b', 'c', 'd'];
console.log('Before:', myArray);
myArray.pop();
console.log('After: ', myArray);

console.log('Transformation #4:')
myArray = ['a', 'b', 'c', 'd'];
console.log('Before:', myArray);
myArray.splice(1, 1);
myArray.push('e');
console.log('After: ', myArray);

console.log('Transformation #5:')
myArray = ['a', 'b', 'c', 'd'];
console.log('Before:', myArray);
myArray.pop();
myArray.push('e', 'f');
myArray.reverse();
console.log('After: ', myArray);

//Extra Credit - SO MANY ARRAYS @.@

myArray = ['Hi', 90, '90', [1, 2, 3, 4], ':p'];
console.log(myArray[3]);
console.log(myArray[3][1]);