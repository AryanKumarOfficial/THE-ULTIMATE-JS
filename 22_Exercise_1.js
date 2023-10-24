const promptSync = require("prompt-sync")({ sigint: true });
// write a javascript program to generate a random number and store it in a variable. Then program takes an output from the user and wethear the guess was correct, grater or lower than the original number.

// 100 is the score of the user (100 trials of guess)
// This program is expected to terminate once the number is guessed. number should be between one to 100.

const randomNumber = Math.floor(Math.random() * 100) + 1
let guessed;

let i = 0;
while (i < 100) {
    guessed = parseInt(promptSync("Guess the number"))
    if (guessed === randomNumber) {
        console.log("You got it! The number is ", randomNumber, "\n");
        break;
    }
    else if (guessed > randomNumber) {
        console.log("Oops!,the actaual number is smaller.\nGuess something smaller.\n");
    }
    else {
        console.log("Oops!,the actaual number is bigger.\nGuess something bigger\n");
    }
    i++
}

console.log("Your score =", 100 - i);