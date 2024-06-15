// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function sumOfPositives(arr) {
    // Initialize sum to 0
    let sum = 0;

    // Loop through each number in the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the number is positive
        if (arr[i] > 0) {
            // Add the positive number to sum
            sum += arr[i];
        }
    }

    // Return the calculated sum
    return sum
}