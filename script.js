const puzzles = [
    {
        firstName1: 'Margot',
        lastName1: 'Robbie',
        firstName2: 'Robbie',
        lastName2: 'Amell',
        imageUrl1: 'https://image.tmdb.org/t/p/w500/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg',
        imageUrl2: 'https://image.tmdb.org/t/p/w500/5MPx1TEdgPs9UEXV65nd80JikSH.jpg'
    },
    {
        firstName1: 'Daniel',
        lastName1: 'Craig',
        firstName2: 'Craig',
        lastName2: 'Robinson',
        imageUrl1: 'https://image.tmdb.org/t/p/w500/nWZI2ghokrha2lYnr5Z48agItL7.jpg',
        imageUrl2: 'https://image.tmdb.org/t/p/w500/iFerDZUmC5Fu26i4qI8xnUVEHc7.jpg'
    }
];

function setupPuzzle() {
    // Randomly select a puzzle
    let puzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
    currentPuzzle = puzzle; // Store the current puzzle for later use
    displayPuzzle(puzzle);
}

function displayPuzzle(puzzle) {
    if (!puzzle) {
        console.error('No puzzle to display:', puzzle);
        return;
    }

    document.getElementById('first-name').textContent = puzzle.firstName1;
    document.getElementById('last-name').textContent = puzzle.lastName2;
    document.querySelector('#image1 img').src = puzzle.imageUrl1;
    document.querySelector('#image2 img').src = puzzle.imageUrl2;
    document.querySelector('#image1 img').classList.add('hidden-image');
    document.querySelector('#image2 img').classList.add('hidden-image');
    document.getElementById('result-message').textContent = ''; // Clear previous result message
}

function revealImages() {
    document.querySelectorAll('.hidden-image').forEach(img => img.classList.remove('hidden-image'));
}

document.getElementById('submit-button').addEventListener('click', () => {
    const input = document.getElementById('user-input').value.trim();
    const correctAnswer = `${currentPuzzle.firstName2}`.toLowerCase();
    if (input.toLowerCase() === correctAnswer) {
        document.getElementById('result-message').textContent = 'Correct!';
        revealImages();
    } else {
        document.getElementById('result-message').textContent = 'Try again!';
    }
});

document.getElementById('new-puzzle-button').addEventListener('click', () => {
    setupPuzzle();
});

let currentPuzzle;

// Initialize with a puzzle
setupPuzzle();
