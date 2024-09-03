// write a prgogram to print "try again" until the user enters the correct number
const prompt=require('prompt-sync')();

let number = 4;
let usernumber = null;

while (usernumber !== number) {
    usernumber = parseInt(prompt("Enter the number"), 10);

    if (usernumber === number) {
        console.log("You won");
    } else {
        console.log("Try again");
    }
}
