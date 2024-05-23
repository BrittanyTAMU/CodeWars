// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

function countSheep(num) {
    let result = '';
    for (let i = 1; i <= num; i++) {
        result += `${i} sheep...`;
    }
    return result;
}

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    // Split the string by spaces to handle multiple spaces
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}


// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

function alphabetPosition(text) {
    return text
        .toLowerCase() // Convert all letters to lowercase
        .split('') // Split the string into an array of characters
        .filter(char => char >= 'a' && char <= 'z') // Filter out non-letter characters
        .map(char => char.charCodeAt(0) - 96) // Convert each letter to its position in the alphabet
        .join(' '); // Join the array of positions into a single string with spaces
}
