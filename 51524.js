// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

function numberToWord(num) {
    switch (num) {
        case 0:
            return "Zero";
        case 1:
            return "One";
        case 2:
            return "Two";
        case 3:
            return "Three";
        case 4:
            return "Four";
        case 5:
            return "Five";
        case 6:
            return "Six";
        case 7:
            return "Seven";
        case 8:
            return "Eight";
        case 9:
            return "Nine";
        default:
            return "Invalid input"; // Handle cases where input is not between 0 and 9
    }
}

// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function sumArrays(arr1, arr2) {
    // Calculate the sum of elements in arr1
    const sum1 = arr1.reduce((acc, curr) => acc + curr, 0);
    
    // Calculate the sum of elements in arr2
    const sum2 = arr2.reduce((acc, curr) => acc + curr, 0);
    
    // Return the sum of sums
    return sum1 + sum2;
}

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

function blankPagesNeeded(n, m) {
    // Check if n or m is negative, return 0 if true
    if (n < 0 || m < 0) {
        return 0;
    }

    // Calculate the total number of blank pages
    return n * m;
}

// Example usage:
console.log(blankPagesNeeded(5, 5));  // Output: 25 (5 classmates * 5 pages = 25)
console.log(blankPagesNeeded(-5, 5)); // Output: 0 (negative n, return 0)
