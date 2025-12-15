/**
 * Main Application Entry Point
 * Initializes the portfolio terminal simulation
 */

// Global State
window.blinkingIsActive = true;
window.headingBlinkingIsActive = true;
window.lsExecuted = false;

/**
 * Page-specific initialization configurations
 */
const PAGE_CONFIGS = {
    '#name': {
        text: 'Lucas_Monroe@Portfolio ~ % ls',
        enableBlink: true
    },
    '#experience-header': {
        text: 'Lucas_Monroe@Experience ~ % ', // NOT WORKING
        enableBlink: true
    },
    '#projects-header': {
        text: 'Projects',
        enableBlink: true
    },
    '#about-header': {
        text: 'About Me',
        enableBlink: true
    }
};

/**
 * Initialize typewriter effect for a specific element
 * @param {string} selector - CSS selector for the element
 * @param {Object} config - Configuration object with text and blink settings
 */
function initTypewriter(selector, config) {
    const element = document.querySelector(selector);
    if (element) {
        typeWriter(element, config.text, 50, () => {
            if (config.enableBlink) {
                blinkingUnderscore(element, config.text);
            }
        });
    }
}

/**
 * Initialize all typewriter effects on page load
 */
function initializeApp() {
    Object.entries(PAGE_CONFIGS).forEach(([selector, config]) => {
        initTypewriter(selector, config);
    });
}

/**
 * Handle Enter key press for ls command
 * @param {KeyboardEvent} event
 */
function handleEnterKey(event) {
    if (event.key === 'Enter' && !window.lsExecuted) {
        ls();
    }
}

/**
 * Show instructions after a delay
 */
function showInstructionsWithDelay() {
    setTimeout(() => {
        const directions = document.getElementById('directions');
        if (directions && !window.lsExecuted) {
            directions.classList.add('show');
        }
    }, 2500);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', initializeApp);
document.addEventListener('keydown', handleEnterKey);

// Show instructions on home page
document.addEventListener('DOMContentLoaded', showInstructionsWithDelay);
