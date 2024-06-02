// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function getInitials(name) {
    // Split the input string into an array of words
    const names = name.split(' ');
    
    // Get the first character of each word and convert to uppercase
    const firstInitial = names[0].charAt(0).toUpperCase();
    const secondInitial = names[1].charAt(0).toUpperCase();
    
    // Combine the initials with a dot in between
    return `${firstInitial}.${secondInitial}`;
}