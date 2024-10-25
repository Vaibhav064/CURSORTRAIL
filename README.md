3D Colorful Neon Cursor Trail
This project implements a 3D, colorful neon cursor trail effect on a webpage. The trail is thin, horizontal, smooth, and sparkles as it follows the cursor’s movement.

Features
Smooth, horizontal neon trail: The cursor leaves a sleek, 3D trail that smoothly fades out.
Customizable color: Users can choose a neon color for the trail.
Sparkle effect: Adds a slight sparkle that changes dynamically as the trail follows the cursor.
Background glow: The background subtly lights up based on the trail color for an immersive effect.
Demo
To see the effect in action, open the index.html file in a web browser.

Installation
Clone or download this repository to your local machine.
Open the index.html file in a web browser to view the neon cursor effect.
Usage
Files
index.html: Contains the main HTML structure and color picker.
style.css: Holds the CSS styles for the cursor trail and background effects.
script.js: JavaScript code that handles the trail creation, sparkle effect, and color customization.
Code Structure
HTML: Sets up the page structure and includes the color picker to adjust the trail color.
CSS: Styles the trail, defines animations for fading and sparkling, and adds a background glow effect.
JavaScript: Adds the trail at each cursor position and adjusts the trail's color, size, and sparkle based on cursor movement.
Instructions
Open index.html in your preferred web browser.
Move your cursor across the page to see the neon trail.
Use the color picker in the top-left corner to change the neon color of the trail.
Customization
Modify Trail Thickness
In the style.css file, adjust the width and height properties in the .trail class to make the trail thinner or thicker.

css
Copy code
.trail {
    width: 30px; /* Change width to adjust trail thickness */
    height: 6px;  /* Change height to adjust trail thickness */
}
Change Sparkle Intensity
In the style.css file, adjust the values in the @keyframes sparkle to change the frequency and intensity of the sparkle effect.

css
Copy code
@keyframes sparkle {
    0% {
        box-shadow: 0 0 8px rgba(255, 255, 255, 0.7), 0 0 15px rgba(255, 255, 255, 0.5);
    }
    100% {
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.3);
    }
}
Adjust Background Glow
In the script.js file, modify the backgroundColor in the mousemove event listener to change the intensity of the background glow.

javascript
Copy code
document.body.style.backgroundColor = neonColor + '10'; // Add transparency for subtle glow
Additional Color Customization
If you want to cycle through colors automatically, add code in script.js to increment the neonColor hue on each movement.

License
This project is open-source and available for modification. Feel free to adapt the code for personal or commercial use.
