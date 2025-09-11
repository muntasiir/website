// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 15, 28, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 255, 136, 0.2)';
    } else {
        navbar.style.background = 'rgba(10, 15, 28, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 255, 136, 0.1)';
    }
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            showTerminalMessage('ERROR: All fields required', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showTerminalMessage('ERROR: Invalid email format', 'error');
            return;
        }
        
        // Simulate form submission
        showTerminalMessage('Message sent successfully!', 'success');
        this.reset();
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Terminal-style notification system
function showTerminalMessage(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.terminal-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `terminal-notification terminal-${type}`;
    
    const colors = {
        success: '#00ff88',
        error: '#ff0040',
        info: '#00bfff'
    };
    
    notification.innerHTML = `
        <div class="terminal-msg-header">
            <span class="terminal-prompt">system@portfolio:~$</span>
            <span class="terminal-timestamp">${new Date().toLocaleTimeString()}</span>
        </div>
        <div class="terminal-msg-body">${message}</div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: rgba(0, 0, 0, 0.95);
        color: ${colors[type]};
        padding: 1rem;
        border: 1px solid ${colors[type]};
        border-radius: 4px;
        box-shadow: 0 0 20px ${colors[type]}40;
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 350px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.8rem;
        backdrop-filter: blur(10px);
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Glitch effect for text elements
function addGlitchEffect(element) {
    const originalText = element.textContent;
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    let glitchInterval = setInterval(() => {
        if (Math.random() < 0.1) { // 10% chance to glitch
            let glitchedText = '';
            for (let i = 0; i < originalText.length; i++) {
                if (Math.random() < 0.1) {
                    glitchedText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
                } else {
                    glitchedText += originalText[i];
                }
            }
            element.textContent = glitchedText;
            
            setTimeout(() => {
                element.textContent = originalText;
            }, 50);
        }
    }, 100);
    
    // Stop glitching after 10 seconds
    setTimeout(() => {
        clearInterval(glitchInterval);
    }, 10000);
}

// Network rack interactions
document.addEventListener('DOMContentLoaded', () => {
    const serverUnits = document.querySelectorAll('.server-unit');
    
    serverUnits.forEach((unit, index) => {
        unit.addEventListener('click', () => {
            // Add click effect
            unit.style.transform = 'translateZ(20px) scale(1.05)';
            
            // Show server info
            const serverLabel = unit.querySelector('.server-label').textContent;
            showTerminalMessage(`Accessing ${serverLabel}...`, 'info');
            
            // Reset transform after animation
            setTimeout(() => {
                unit.style.transform = '';
            }, 300);
        });
        
        // Add random LED blinking
        const leds = unit.querySelectorAll('.led');
        leds.forEach(led => {
            setInterval(() => {
                if (Math.random() < 0.3) {
                    led.style.opacity = '0.2';
                    setTimeout(() => {
                        led.style.opacity = '1';
                    }, 100);
                }
            }, 2000 + Math.random() * 3000);
        });
    });
});

// Typing animation for hero section
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Add glitch effect after typing is complete
            setTimeout(() => {
                addGlitchEffect(element);
            }, 1000);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 80);
        }, 1500);
    }
    
    // Add glitch effect to navigation logo
    const navLogo = document.querySelector('.nav-logo .glitch-text');
    if (navLogo) {
        setTimeout(() => {
            addGlitchEffect(navLogo);
        }, 3000);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const networkRack = document.querySelector('.network-rack');
    
    if (hero) {
        const rate = scrolled * -0.3;
        hero.style.transform = `translateY(${rate}px)`;
    }
    
    if (networkRack) {
        const rate = scrolled * 0.1;
        networkRack.style.transform = `rotateY(-15deg) rotateX(5deg) translateY(${rate}px)`;
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Add special effects for different elements
            if (entry.target.classList.contains('project-card')) {
                entry.target.style.animation = 'slideInUp 0.6s ease-out';
            }
            
            if (entry.target.classList.contains('skill-category')) {
                entry.target.style.animation = 'fadeInScale 0.6s ease-out';
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .skill-category');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Project card hover effects with sound simulation
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        
        // Simulate terminal beep
        if (Math.random() < 0.3) {
            showTerminalMessage('Project accessed', 'info');
        }
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Show system startup message
    setTimeout(() => {
        showTerminalMessage('System initialized successfully', 'success');
    }, 1000);
});

// Matrix rain effect (subtle)
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1';
    canvas.style.opacity = '0.05';
    
    document.body.appendChild(canvas);
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = '01';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];
    
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }
    
    function draw() {
        ctx.fillStyle = 'rgba(10, 15, 28, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff88';
        ctx.font = fontSize + 'px JetBrains Mono';
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 100);
    
    // Resize handler
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Initialize matrix rain effect
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(createMatrixRain, 2000);
});

// Add CSS animations
const additionalStyles = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: scale(0.9);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    .terminal-msg-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
        font-size: 0.7rem;
        opacity: 0.8;
    }
    
    .terminal-prompt {
        color: #00bfff;
    }
    
    .terminal-timestamp {
        color: #888;
    }
    
    .terminal-msg-body {
        font-weight: 600;
        text-shadow: 0 0 5px currentColor;
    }
    
    .nav-link.active {
        color: #00ff88 !important;
        text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
    }
    
    .nav-link.active .nav-bracket {
        color: #ff0040 !important;
        text-shadow: 0 0 10px rgba(255, 0, 64, 0.5);
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Console message for developers
console.log(`
🚀 High-Tech Portfolio System Online!
📧 Contact: muntasirmkhan@hotmail.com
🔗 GitHub: https://github.com/muntasiir
💼 LinkedIn: https://linkedin.com/in/muntasir-khan

System Status: OPERATIONAL
Network Rack: ACTIVE
Glitch Effects: ENABLED
Matrix Rain: INITIALIZED

Built with HTML, CSS, and JavaScript
Optimized for modern browsers
`);

// Easter egg - Konami code
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        showTerminalMessage('KONAMI CODE ACTIVATED! 🎮', 'success');
        
        // Add special effect
        document.body.style.animation = 'glitch-text 0.5s ease-in-out 3';
        
        setTimeout(() => {
            document.body.style.animation = '';
        }, 1500);
        
        konamiCode = [];
    }
});
