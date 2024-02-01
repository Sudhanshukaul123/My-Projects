const prompt = require("prompt-sync")({ signit: true });
let num;
let checker = parseInt(prompt("Enter the number : "));
    for (let i = 0; i <=0; i++) {

    if (checker % 3 === 0 && checker % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (checker % 3 === 0) {
        console.log("Fizz");
    }
    else if (checker % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}



