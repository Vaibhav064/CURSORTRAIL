let hue = 0;  // Initial hue for color transition
let lastMoveTime = Date.now(); // Track time between mouse moves
let lastX = 0, lastY = 0; // Track last cursor position

// Function to create the smoke effect
function createSmoke(x, y, speed) {
    const smoke = document.createElement("div");
    smoke.className = "smoke";

    // Set the initial position of the smoke particle
    smoke.style.left = `${x}px`;
    smoke.style.top = `${y}px`;

    // Set color based on the hue, cycling through the rainbow
    smoke.style.backgroundColor = `hsl(${hue}, 100%, 70%)`;
    smoke.style.boxShadow = `0 0 15px hsl(${hue}, 100%, 70%), 0 0 30px hsl(${hue}, 100%, 50%)`;

    // Adjust size and opacity based on speed, making faster movements create larger smoke
    const size = Math.min(40, speed * 1.2); // Limit max size for clarity
    smoke.style.width = `${size}px`;
    smoke.style.height = `${size}px`;
    smoke.style.opacity = Math.min(1, 0.3 + speed / 50);

    // Append smoke particle to body
    document.body.appendChild(smoke);

    // Remove the smoke particle after animation completes
    setTimeout(() => {
        smoke.remove();
    }, 2000); // Duration should match fadeOut animation in CSS

    // Increase hue to transition through colors
    hue = (hue + 5) % 360; // Cycle through hue smoothly
}

// Listen for mouse movement
document.addEventListener("mousemove", (e) => {
    const now = Date.now();
    const timeDiff = now - lastMoveTime; // Time between moves for speed calculation
    const speed = Math.sqrt(Math.pow(e.pageX - lastX, 2) + Math.pow(e.pageY - lastY, 2)) / timeDiff;

    createSmoke(e.pageX, e.pageY, speed * 100); // Adjust speed multiplier for effect intensity

    // Update last position and time
    lastMoveTime = now;
    lastX = e.pageX;
    lastY = e.pageY;
    document.body.style.backgroundColor = neonColor + '10'; // Add transparency for subtle glow
});
