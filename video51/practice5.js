// try to change 4th character of a given string were you able to doi it 
let str = "please givee rs 1000";
let chars=str.split("");
if (chars.length>=4) {
    chars[3] ="o";
}
let finalstr =chars.join("");


console.log(finalstr)