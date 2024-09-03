// Extract the amount of this string "please gie rs 1000"
let str = "please givee rs 1000";

// Find the position of the first space after "rs"
let startIndex = str.indexOf("rs") + 3; // Adding 3 to skip "rs "

// Extract the substring starting from the position after "rs"
let amountString = str.substring(startIndex);

// Convert the extracted string to a number (if needed)
let amount = parseInt(amountString);

// Print the extracted amount
console.log("Extracted amount:", amount);

// NIII AATAAAAAA>>>>>>