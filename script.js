// Message Bottle Messages
const messages = [
    "Hai manusia favoritku! Thanks for always being there 🌟",
    "You make every day a little brighter just by being you 💬",
    "I'm so grateful to have you in my life 💕",
    "Your smile is HMMM (apalagi klo salting) 😊",
    "Remember that time we... kenalan dan janjian buat lupain nama? 🎉",
    "You're braver than you believe, stronger than you seem, and smarter than you think 💪",
    "Let's make more memories together! 🎨",
    "You're one of a kind and absolutely awesome! ✨",
    "Semoga sukses selalu dahh! 🏖️",
    "Can't wait to see you soon! 🍾"
];

let currentIndex = 0;
const openBtn = document.getElementById('openBtn');
const nextBtn = document.getElementById('nextBtn');
const closeBtn = document.getElementById('closeBtn');
const messageDisplay = document.getElementById('messageDisplay');
const messageText = document.getElementById('messageText');
const messageNumber = document.getElementById('messageNumber');
const messageCounter = document.getElementById('messageCounter');
const bottle = document.getElementById('bottle');

// Initialize
function init() {
    messageCounter.textContent = `${messages.length} messages waiting...`;
}

// Open the bottle
openBtn.addEventListener('click', () => {
    currentIndex = 0;
    messageDisplay.classList.add('active');
    openBtn.style.display = 'none';
    displayMessage();
    bottle.style.animation = 'none';
});

// Display current message
function displayMessage() {
    messageText.textContent = messages[currentIndex];
    messageNumber.textContent = `Message ${currentIndex + 1} of ${messages.length}`;
    
    // Hide next button if it's the last message
    if (currentIndex === messages.length - 1) {
        nextBtn.textContent = '🍾 That\'s all! 🍾';
        nextBtn.disabled = true;
    } else {
        nextBtn.textContent = 'Next Message →';
        nextBtn.disabled = false;
    }
}

// Show next message
nextBtn.addEventListener('click', () => {
    if (currentIndex < messages.length - 1) {
        currentIndex++;
        displayMessage();
    }
});

// Close the bottle
closeBtn.addEventListener('click', () => {
    messageDisplay.classList.remove('active');
    openBtn.style.display = 'block';
    bottle.style.animation = 'rotate 4s linear infinite';
    currentIndex = 0;
});

// Initialize on page load
init();
