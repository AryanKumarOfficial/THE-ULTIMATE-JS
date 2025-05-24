console.log("Script loaded successfully!");
// use ./jokes.json here
import jokes from './jokes.json' with { type: 'json' };
const jokeElement = document.getElementById("joke-container");
const jokeButton = document.getElementById("joke-button")

const getRandom = () => {
    return Math.floor(Math.random() * 100);
}

const getRandomJoke = (random) => {
    return jokes.jokes[random];
}
document.addEventListener("DOMContentLoaded", () => {
    jokeElement.innerText = getRandomJoke(getRandom())
})

jokeButton.addEventListener("click", () => {
    jokeElement.innerText = getRandomJoke(getRandom())
})