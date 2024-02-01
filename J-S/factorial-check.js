const prompt = require("prompt-sync")({ signit: true });

let factorial = 1;
let i ;

let num = parseInt(prompt("Enter a number : "));
// console.log(typeof (num));

if (num <= 0) {
    console.log("Invalid number");
}
else {
    for ( i = num; i > 0; i--) {
        factorial = factorial * i;
        // console.log(factorial);
    }
    console.log(`Factorial of ${num} is: ${factorial}`);
}
