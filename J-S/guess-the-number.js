const prompt = require("prompt-sync")({ signit: true });
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
const num = random(1, 100);
const MaxAttempt = 100;
let AttemptCount = 0;

console.log("Welcome to the Number Guessing Game!");
console.log("Game rules - You will attempt to guess a secret number.");
console.log("You have a hundred chances to guess it right.");
console.log("The fewer guesses you make, the higher your score.");
console.log("Pay attention to the feedback after each guess.");
console.log("The result will depend on the no of attepmt you take - maximum number of attempts");
console.log();
while (AttemptCount < MaxAttempt) {
    const guessedNumber = parseInt(prompt("Hie, guess the number between 1-100!! : "));
    AttemptCount++;

    if (guessedNumber == num) {
        console.log(AttemptCount == 1 ? "JACKPOT!!! You got it in first try." : "Oh finally you have guessed it right");
        break;
    }
    console.log(guessedNumber < num ? "Your guess is smaller than the actual number" : "Your guess is greater than the actual number");
    console.log("try again");
}
console.log("Your final score is....  " + (MaxAttempt - AttemptCount) + "", (AttemptCount == MaxAttempt ? " You, should better die then play again" : "!!! well played "))
console.log("And you took " + AttemptCount + "", (AttemptCount == MaxAttempt ? "attempts to guess the right number still u couln't guessed it right" : "attempts to guess the right number."))