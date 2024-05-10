// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
    return text.toUpperCase().split('').map(char => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        return code - 64;
      }
    }).filter(Boolean).join(' ');
  }
  
//   Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
    const count = (arr, val) => arr.filter((item) => item === val).length;
    let target = 0;
    A.forEach((arrnum) => {
      if (count(A, arrnum) % 2 !== 0) {
        target = arrnum;
      }
    });
    return target;
  }

//   If the first day of the month is a Friday, it is likely that the month will have an Extended Weekend. That is, it could have five Fridays, five Saturdays and five Sundays.

// In this Kata, you will be given a start year and an end year. Your task will be to find months that have extended weekends and return:

function solve(startYear, endYear) {
    let firstMonth = "";
    let lastMonth = "";
    let extendedWeekendCount = 0;

    for (let year = startYear; year <= endYear; year++) {
        for (let month = 0; month < 12; month++) {
            const firstDayOfMonth = new Date(year, month, 1).getDay();

            // Check if the first day of the month is a Friday (Friday is 5 in JavaScript Date object)
            if (firstDayOfMonth === 5) {
                let fridayCount = 0;
                let saturdayCount = 0;
                let sundayCount = 0;

                const daysInMonth = new Date(year, month + 1, 0).getDate();

                for (let day = 1; day <= daysInMonth; day++) {
                    const dayOfWeek = new Date(year, month, day).getDay();

                    if (dayOfWeek === 5) fridayCount++;
                    if (dayOfWeek === 6) saturdayCount++;
                    if (dayOfWeek === 0) sundayCount++;
                }

                // If there are five Fridays, five Saturdays, and five Sundays, it's an extended weekend month
                if (fridayCount === 5 && saturdayCount === 5 && sundayCount === 5) {
                    if (firstMonth === "") {
                        firstMonth = monthName(month);
                    }
                    lastMonth = monthName(month);
                    extendedWeekendCount++;
                }
            }
        }
    }

    return [firstMonth, lastMonth, extendedWeekendCount];
}

// Function to convert month number to month name
function monthName(month) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[month];
}

// Example usage:
console.log(solve(2016, 2020)); // Output: ["Jan", "May", 5]

// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

function differenceInAges(ages) {
    const youngest = Math.min(...ages);
    const oldest = Math.max(...ages);
    const difference = oldest - youngest;
    return [youngest, oldest, difference];
}



