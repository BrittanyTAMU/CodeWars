// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString){
    return +inputString[0]
}

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false. 

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAvg(array) {
    if (array.length === 0) {
        return 0;
    }
    return array.reduce((acc, c) => acc + c, 0) / array.length;
}
