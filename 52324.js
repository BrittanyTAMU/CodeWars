// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

 // Step 1: Combine the strings
 const combined = s1 + s2;
    
 // Step 2: Extract distinct characters using a Set
 const distinctCharsSet = new Set(combined);
 
 // Step 3: Convert the Set to an array and sort it
 const sortedCharsArray = Array.from(distinctCharsSet).sort();
 
 // Step 4: Join the sorted characters into a single string
 const result = sortedCharsArray.join('');
 
 return result;

//  Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
function breakCamelCase(str) {
    return str.split(/(?=[A-Z])/).join(' ');
}

// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"

function numberToString(num) {
    return num.toString();
}
