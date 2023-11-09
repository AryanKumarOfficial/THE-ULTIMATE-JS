// snake water gun game
// snake vs. water: snake wins
// water vs. gun: water wins
// gun vs. snake: gun wins
// snake vs. snake: draw
// water vs. water: draw
// gun vs. gun: draw

const snake = document.querySelector('#snake');
const water = document.querySelector('#water');
const gun = document.querySelector('#gun');
const resultDiv = document.querySelector('#score');
const computers = document.querySelector('#computer');
const user = document.querySelector('#you');


const result = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "draw";
    }
    else if (userChoice === "snake") {
        if (computerChoice === "water") {
            return "You won :)";
        }
        else {
            return "you lost :(";
        }
    }
    else if (userChoice === "water") {
        if (computerChoice === "snake") {
            return "you lost :(";
        }
        else {
            return "you won :)";
        }
    }
    else if (userChoice === "gun") {
        if (computerChoice === "snake") {
            return "you won :)";
        }
        else {
            return "you lost :(";
        }
    }
    else {
        return "invalid input";
    }
}

const computerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "snake";
    }
    else if (choice === 1) {
        return "water";
    }
    else {
        return "gun";
    }
}

const userChoice = (e) => {
    let user = e.target.id;
    let computer = computerChoice();
    let gameResult = result(user, computer);
    you.innerHTML = user;
    computers.innerHTML = computer;
    resultDiv.innerHTML = gameResult;
}

snake.addEventListener('click', userChoice);
water.addEventListener('click', userChoice);
gun.addEventListener('click', userChoice);
