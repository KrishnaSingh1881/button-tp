// Select elements
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let yesScale = 1;

// Function to move No button within 50% viewport bounds while staying visible
function moveNoBtn() {
    const containerWidth = window.innerWidth * 0.5; // 50% of viewport width
    const containerHeight = window.innerHeight * 0.5; // 50% of viewport height

    const maxLeft = Math.max(10, containerWidth - noBtn.offsetWidth - 10);
    const maxTop = Math.max(10, containerHeight - noBtn.offsetHeight - 10);

    const randTop = Math.floor(Math.random() * maxTop) + "px";
    const randLeft = Math.floor(Math.random() * maxLeft) + "px";

    noBtn.style.position = "absolute"; // Ensures it stays within the area
    noBtn.style.top = randTop;
    noBtn.style.left = randLeft;
}

// Function to trigger confetti
function triggerConfetti() {
    setInterval(() => {
        confetti({
            particleCount: 30,
            spread: 360,
            startVelocity: 25,
            ticks: 90,
            zIndex: 1000,
            colors: ["#ff69b4", "#ffb6c1", "#fff", "#ffccff"]
        });
    }, 1000); // Confetti bursts every second
}

// Function to spawn GIFs infinitely at random positions
function startInfiniteGifs() {
    setInterval(() => {
        const gifs = ["hearts.gif", "stars.gif"]; // List of GIFs
        const gif = document.createElement("img");
        gif.src = gifs[Math.floor(Math.random() * gifs.length)]; // Pick random GIF
        gif.className = "animated-gif"; // Apply animation styling
        gif.style.left = Math.random() * 80 + "%"; // Random position
        gif.style.top = Math.random() * 80 + "%";
        document.body.appendChild(gif);

        setTimeout(() => {
            gif.remove(); // Remove GIF after animation completes
        }, 3000);
    }, 500); // New GIF every 500ms
}

// Function to spawn emojis infinitely
function startInfiniteEffects() {
    setInterval(() => {
        const effects = ["❤️", "✨", "💥"];
        const effect = document.createElement("div");
        effect.innerText = effects[Math.floor(Math.random() * effects.length)];
        effect.className = "floating-effect"; // Apply animation
        effect.style.left = Math.random() * 99 + "%";
        effect.style.top = Math.random() * 99 + "%";
        document.body.appendChild(effect);

        setTimeout(() => {
            effect.remove();
        }, 3000);
    }, 300);
}

// Grow Yes button on click and start animations
yesBtn.addEventListener("click", () => {
    yesScale += 0.2;
    yesBtn.style.transform = `scale(${yesScale})`;
    triggerConfetti();
    startInfiniteGifs();
    startInfiniteEffects();
});

// Move No button when hovered
noBtn.addEventListener("mouseenter", moveNoBtn);