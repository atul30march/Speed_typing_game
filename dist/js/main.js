window.addEventListener('load', init);



//Globals

// Available Levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
};
// To change level
const currentLevel = levels.easy;
let time = currentLevel;
let score = 0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'hello',
    'hero',
    'echo',
    'joke',
    'javascripts',
    'react',
    'express',
    'node',
    'game',
    'type',
    'given',
    'love',
    'again',
    'score',
    'digital',
    'introductions',
    'change',
    'speed',
    'ride',
    'race',
    'design',
    'domain',
    'level',
    'history',
    'invert',
    'selections',
    'system'
];
// Initialize Game
function init() {
    //Load world from array
    showWord(words);
    // Start maching on word input
    wordInput.addEventListener('input', startMatch);
    //Call countdown every seconds
    setInterval(countdown, 1000);
    //Check gmane status
    setInterval(checkStatus, 50);
}
//start match
function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    // if score is -1 display 0
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }

}
//Match currentWord to wordInput
function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}
//Pick a random word
function showWord(words) {
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    // Output random word 
    currentWord.innerHTML = words[randIndex];
}
//Countdown timer
function countdown() {
    //Make sure time is not run out
    if (time > 0) {
        //Decrement
        time--;
    } else if (time === 0) {
        isPlaying = false;
    }
    //Show time
    timeDisplay.innerHTML = time;
}
//Check Game Status
function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = ' Game Over!!!';
        score = -1;
    }
}