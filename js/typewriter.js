/**
 * Typewriter Effects Module
 * Handles animated typing and cursor effects for terminal simulation
 */

/**
 * Creates animated typing effect for terminal text
 * @param {HTMLElement} element - The element to type into
 * @param {string} text - The text to type
 * @param {number} speed - Milliseconds between characters (default: 50)
 * @param {Function} callback - Function to call when typing completes
 */
function typeWriter(element, text, speed = 50, callback) {
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            
            // Skip delay for spaces
            if (text.charAt(i) === " ") {
                type();
            } else {
                setTimeout(type, speed);
            }
        } else if (typeof callback === 'function') {
            callback();
        }
    }
    
    element.textContent = '';
    type();
}

/**
 * Creates blinking cursor animation
 * @param {HTMLElement} element - The element containing the cursor
 * @param {string} text - The base text (unused but kept for API consistency)
 */
function blinkingUnderscore(element, text) {
    let showUnderscore = true;
    const cursor = document.querySelector('.cursor');
    cursor.style.visibility = 'visible';
    
    function blink() {
        if (window.blinkingIsActive) {
            cursor.textContent = showUnderscore ? "_" : "";
            showUnderscore = !showUnderscore;
            setTimeout(blink, 450);
        } else {
            cursor.textContent = "";
            cursor.style.visibility = 'hidden';
        }
    }
    
    blink();
}
