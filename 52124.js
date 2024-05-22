// You are given a binary string (a string consisting of only '1' and '0'). The only operation that can be performed on it is a Flip operation.

// It flips any binary character ( '0' to '1' and vice versa) and all characters to the right of it.

// For example, applying the Flip operation to the 4th character of string "1001010" produces the "1000101" string, since all characters from the 4th to the 7th are flipped.

// Your task is to find the minimum number of flips required to convert the binary string to string consisting of all '0'.

// Example
// For s = "0101", the output should be 3.

// It's possible to convert the string in three steps:

// "0101" -> "0010"
//    ^^^
// "0010" -> "0001"
//     ^^
// "0001" -> "0000"
//      ^
// Input/Output
// [input] string s
// A binary string.

// [output] an integer
// The minimum number of flips required.

function minFlips(s) {
    let flips = 0;
    let n = s.length;
    let flipped = false; // To track if we are in a flipped state

    for (let i = 0; i < n; i++) {
        if ((s[i] === '1' && !flipped) || (s[i] === '0' && flipped)) {
            flips++;
            flipped = !flipped;
        }
    }
    
    return flips;
}


// Many programming languages provide the functionality of converting a string to uppercase or lowercase. For example, upcase/downcase in Ruby, upper/lower in Python, and toUpperCase/toLowerCase in Java/JavaScript, uppercase/lowercase in Kotlin. Typically, these methods won't change the size of the string.

// For example, in Ruby, str.upcase.downcase.size == str.size is true for most cases.

// However, in some special cases, the length of the transformed string may be longer than the original. Can you find a string that satisfies this criteria?

// For example, in Ruby, That means str.upcase.downcase.size > str.size

// You should just set the value of STRANGE_STRING to meet the previous criteria.

// Note: Meta programming is not allowed in this kata. So, the size of your solution is limited.

const STRANGE_STRING = "ß";

// We've got a very long string, containing a bunch of User IDs. This string is a listing, which seperates each user ID with a comma and a whitespace ("' "). Sometimes there are more than only one whitespace. Keep this in mind! Futhermore, some user Ids are written only in lowercase, others are mixed lowercase and uppercase characters. Each user ID starts with the same 3 letter "uid", e.g. "uid345edj". But that's not all! Some stupid student edited the string and added some hashtags (#). User IDs containing hashtags are invalid, so these hashtags should be removed!

// Task
// Remove all hashtags
// Remove the leading "uid" from each user ID
// Return an array of strings --> split the string
// Each user ID should be written in only lowercase characters
// Remove leading and trailing whitespaces
// Note
// Even if this kata can be solved by using Regex, please try to find a solution by using only the built-in String methods.

// Some references from MDN:

// String.prototype.trim()
// String.prototype.split()
// String.prototype.toLowerCase()
// String.prototype.replace()
// String.prototype.substring()
// Array.prototype.map()

function getUserIds(str){
    return str.toLowerCase().split(', ').map(e=>e.trim().replace(/^(\#*uid)|\#+/g,'').trim());
}
