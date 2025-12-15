/**
 * Terminal Commands Module
 * Handles terminal command execution (ls, etc.)
 */

/**
 * Executes the ls command - displays portfolio navigation links
 */
function ls() {
    window.lsExecuted = true;
    window.blinkingIsActive = false;
    
    const directions = document.getElementById('directions');
    if (directions) {
        directions.classList.remove('show');
    }
    
    // Type out each menu item sequentially
    const experience = document.querySelector('#experience');
    typeWriter(experience, 'Experience', 50, () => {
        makeClickable(experience, 'experience.html');
        
        const projects = document.querySelector('#projects');
        typeWriter(projects, 'Projects', 50, () => {
            makeClickable(projects, 'projects.html');
            
            const about = document.querySelector('#about');
            typeWriter(about, 'About Me', 50, () => {
                makeClickable(about, 'about.html');
            });
        });
    });
}

/**
 * Makes an element's text into a clickable link
 * @param {HTMLElement} element - The element to make clickable
 * @param {string} url - The URL to link to
 */
function makeClickable(element, url) {
    const text = element.textContent;
    element.innerHTML = `<a href="${url}">${text}</a>`;
}