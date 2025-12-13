// GLOBAL VARIABLES
let blinkingIsActive = true;
let lsExecuted = false;

// Runs typewriter effect on load, after typewriter is done, blinking curser is started via callback
document.addEventListener('DOMContentLoaded', function() {
	const p = document.querySelector('#name');
	typeWriter(p, 'Lucas_Monroe@Portfolio ~ % ls', 50, () => {
        blinkingUnderscore(p, 'Lucas_Monroe@Portfolio ~ % ls');
    });
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && !lsExecuted) {
        console.log('Enter key pressed!');
        ls();
    }
});

setTimeout(() => {
    document.getElementById("directions").classList.add("show");
}, 3000); // ms


/**
 * TERMINAL WINDOW CONTROL
 * Minimizes terminal to show app icon
 */
function redCircle() {
    const screen = document.getElementById('screen');
    
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
 * TERMINAL WINDOW CONTROL
 * Restores terminal from minimized state
 */
function restoreTerminal() {
    const screen = document.getElementById('screen');
    screen.innerHTML = screen.dataset.originalContent;
    screen.style.border = screen.dataset.originalBorder;

    // Restart the typewriter effect and blinking underscore
    blinkingIsActive = true; // Reset global variable
    lsExecuted = false;
    const p = document.querySelector('#name');
    typeWriter(p, 'Lucas_Monroe@Portfolio ~ % ls', 50, () => {
        blinkingUnderscore(p, 'Lucas_Monroe@Portfolio ~ % ls');
    });
}

/**
 * TYPEWRITING EFFECTS
 * Creates animated typing effect for terminal text
 */
function typeWriter(element, text, speed = 50, callback) {
	let i = 0;
	function type() {
		if (i < text.length) {
			element.textContent += text.charAt(i);
            console.log(text.charAt(i))
			i++;
            if(text.charAt(i) === " "){
                type()
            } else {
                setTimeout(type, speed)
            }
            		
		} else if (typeof callback === 'function') {
            console.log("Called")
			callback();
		}
	}
	element.textContent = '';
	type();
}

/**
 * TYPEWRITING EFFECTS
 * Creates blinking cursor animation
 */
function blinkingUnderscore(element, text) {
    let showUnderscore = true;
    const cursor = document.getElementById('cursor');
    cursor.style.visibility = 'visible';
    function blink() {
        if(blinkingIsActive){ // Use global variable directly
            cursor.textContent = showUnderscore ? "_" : "";
            showUnderscore = !showUnderscore;
            setTimeout(blink, 450);
        } else {
            cursor.textContent = "";
            cursor.style.visibility = 'hidden';
            return;
        }
    }

    blink();
}

/**
 * LS COMMAND FUNCTIONALITY
 * Executes the ls command in terminal
 */
function ls() {
    lsExecuted = true;
    blinkingIsActive = false;
    document.getElementById('directions').classList.remove('show');
    
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
 * LINK FUNCTIONALITY
 * Makes an element's text into a clickable link
 */
function makeClickable(element, url) {
    const text = element.textContent;
    element.innerHTML = `<a href="${url}">${text}</a>`;
}