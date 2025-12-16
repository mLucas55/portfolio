/**
 * Terminal Window Controls Module
 * Handles terminal minimize/restore functionality
 */

/**
 * Minimizes terminal to show app icon (red circle button)
 */
function redCircle() {
    const screen = document.getElementById('index-screen');
    
    // Store original content before replacing
    if (!screen.dataset.originalContent) {
        screen.dataset.originalContent = screen.innerHTML;
        screen.dataset.originalBorder = screen.style.border || '';
    }
    
    screen.innerHTML = `
        <div onclick="restoreTerminal()" style="cursor: pointer; text-align: center;">
            <img src="terminal.png" alt="Terminal" style="width: 30%; height: 30%; object-fit: contain; display: block; margin: 0 auto;">
            <p style="margin-top: 10px; color: #e2e8f0;">Terminal.app</p>
        </div>
    `;
    screen.style.border = 'none';
}

/**
 * Restores terminal from minimized state
 */
function restoreTerminal() {
    const screen = document.getElementById('index-screen');
    screen.innerHTML = screen.dataset.originalContent;
    screen.style.border = screen.dataset.originalBorder;

    // Reset state
    window.blinkingIsActive = true;
    window.lsExecuted = false;
    
    // Restart the typewriter effect
    const nameElement = document.querySelector('#name');
    if (nameElement) {
        typeWriter(nameElement, 'Lucas_Monroe@Portfolio ~ % ls', 50, () => {
            blinkingUnderscore(nameElement, 'Lucas_Monroe@Portfolio ~ % ls');
        });
    }
}
