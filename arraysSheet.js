// 8. Write an algorithm to count the total number of evene and odd elements in an array 

let arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenAcc = 0;
let oddAcc = 0;
for (let i = 0; i < arr8.length; i++) {

    if (arr8[i] % 2 === 0) evenAcc = evenAcc + arr8[i];
    else oddAcc = oddAcc + arr8[i];
}
console.log('The Even numbers Total is ', evenAcc);
console.log('The Odd numbers Total is ', oddAcc);

// 9. Write an algorithm to count the total number of negative elements in an array 
let arr9 = [-1, -2, -3, -4, 0, 1, 2, 3, 4];
let negAcc = 0;
for (let i = 0; i < arr9.length; i++) {
    if (arr9[i] < 0) negAcc = negAcc + arr9[i];
}
console.log('The Negative numbers Total is ', negAcc);

// take a user input then check if it is in the array or not
// run in the console
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let userInput = Number(prompt('Enter a Number'));
// let exists = false;
// let foundIndex;

// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] === userInput) {
//         exists = true;
//         foundIndex = i;
//     }
// }
// if (exists) {
//     console.log('Number Exists at index: ', foundIndex);
// } else console.log('Not found');


// determine the number of occurances of an element in an array

let arr = [1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9, 10];
let userInput = Number(prompt('Enter a Number'));

let numberOfOccurances = 0;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] === userInput) {
        numberOfOccurances++;
    }
}
console.log('Number of Occurances is : ', numberOfOccurances);

