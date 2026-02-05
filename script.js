const noBtn = document.getElementById('noBtn');

// The "runaway" logic remains the same
noBtn.addEventListener('mouseover', () => {
    const x = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// The new and improved celebration function
function celebrate() {
    // 1. Fire the confetti!
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff0000', '#ff69b4', '#ffffff'] // Red, Pink, and White
    });

    // 2. Change the text to something sweet
    document.querySelector('h1').innerText = "I love you! ❤️";

    // 3. Hide the "No" button so it doesn't distract anymore
    noBtn.style.display = 'none';

    // 4. Optional: Animate the "Yes" button
    const yesBtn = document.getElementById('yesBtn');
    yesBtn.innerHTML = "Success! ✨";
    yesBtn.style.transform = "scale(1.2)";
    yesBtn.style.transition = "transform 0.5s ease";
}