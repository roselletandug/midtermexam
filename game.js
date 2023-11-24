// Generate a random number between 1 and 10
let correctNumber = Math.floor(Math.random() * 10) + 1;
let chances = 3;

function checkGuess() {
    const userGuessInput = document.getElementById('userGuess');
    const resultMessage = document.getElementById('result');
    const feedbackImage = document.getElementById('feedbackImage');
    const retryButton = document.getElementById('retryButton');

    // Validate user input
    const userGuess = parseInt(userGuessInput.value);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        resultMessage.textContent = 'Please enter a valid number between 1 and 10.';
        return;
    }

    // Check the user's guess
    if (userGuess === correctNumber) {
        resultMessage.textContent = 'Congratulations! You guessed the correct number.';
        feedbackImage.src = 'correct.png'; // Replace with the correct image URL
        feedbackImage.style.display = 'block';
        retryButton.disabled = false;
    } else {
        chances--;
        if (chances > 0) {
            resultMessage.textContent = `Wrong guess! Try again. Chances left: ${chances}.`;
        } else {
            resultMessage.textContent = `Sorry, you ran out of chances. The correct number was ${correctNumber}.`;
            feedbackImage.src = 'wrong.png'; // Replace with the wrong image URL
            feedbackImage.style.display = 'block';
            retryButton.disabled = false;
        }
    }
}

function retryGame() {
    // Reset game state
    const userGuessInput = document.getElementById('userGuess');
    const resultMessage = document.getElementById('result');
    const feedbackImage = document.getElementById('feedbackImage');
    const retryButton = document.getElementById('retryButton');

    userGuessInput.value = '';
    resultMessage.textContent = '';
    feedbackImage.style.display = 'none';
    retryButton.disabled = true;

    // Generate a new random number
    correctNumber = Math.floor(Math.random() * 10) + 1;
    chances = 3;
}
