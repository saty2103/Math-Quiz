'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value) ;
    console.log( guess, typeof guess);

    // If there's no input
    if (!guess) {     
        displayMessage('Blank Input Received');
     
    // if the guesses number is correct    
    } else if ( guess === secretNumber) {
        displayMessage('Congratulations! You guessed it right.');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = 'rgb(73, 236, 141)';
        document.querySelector('.number').width = '45rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    // if the guess is wrong    
    } else if ( guess !== secretNumber) {
        if (score>1) {
            displayMessage(guess > secretNumber ? 'Too High !' : 'Too Low !');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('Alas ! You lost the quiz.');
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Guess the number ...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});