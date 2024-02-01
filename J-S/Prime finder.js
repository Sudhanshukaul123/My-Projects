const prompt = require("prompt-sync")({ sigint: true });
const num = parseInt(prompt("Enter the number to check if it's Prime or not: "));

function PrimeChecker(x) {
    let yes = "This is a prime number";
    let no = "This isn't a prime number";

    if (x <= 1) {
        return no;
    }

    for (let i = 2; i <= x/2; i++) {
        if (x % i === 0) {
            return no;
        }
    }

    return yes;
}

let result = PrimeChecker(num);
console.log(result);
