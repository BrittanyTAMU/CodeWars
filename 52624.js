// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
    let count = 0;  // Initialize a counter

    // Loop through each element in the array
    for (let i = 0; i < arrayOfSheep.length; i++) {
        // Increment count if the current element is true
        if (arrayOfSheep[i] === true) {
            count++;
        }
    }

    return count;  // Return the final count
}


// The number 
// 89
// 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 
// 89
// =
// 8
// 1
// +
// 9
// 2
// 89=8 
// 1
//  +9 
// 2
 

// The next number in having this property is 
// 135
// 135:

// See this property again: 
// 135
// =
// 1
// 1
// +
// 3
// 2
// +
// 5
// 3
// 135=1 
// 1
//  +3 
// 2
//  +5 
// 3
 

// Task
// We need a function to collect these numbers, that may receive two integers 
// 𝑎
// a, 
// 𝑏
// b that defines the range 
// [
// 𝑎
// ,
// 𝑏
// ]
// [a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Examples
// Let's see some cases (input -> output):

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range 
// [
// 𝑎
// ,
// 𝑏
// ]
// [a,b] the function should output an empty list.

// 90, 100 --> []
// Enjoy it!!

let result = [];  // Initialize an empty array to store the results

// Iterate over each number in the range [a, b]
for (let num = a; num <= b; num++) {
    let sum = 0;
    let digits = String(num).split('');  // Convert number to a string and split into digits

    // Calculate the sum of digits raised to the power of their positions
    for (let i = 0; i < digits.length; i++) {
        sum += Math.pow(parseInt(digits[i]), i + 1);
    }

    // Check if the calculated sum equals the original number
    if (sum === num) {
        result.push(num);  // Add the number to the result array
    }
}

return result;  // Return the final result array
