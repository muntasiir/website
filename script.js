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
        navbar.style.background = 'rgba(18, 25, 39, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.backdropFilter = 'none';
        navbar.style.borderBottom = 'none';
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

// 3D Cube Interactions
document.addEventListener('DOMContentLoaded', () => {
    const cube = document.querySelector('.cube');
    const cubeContainer = document.querySelector('.cube-container');
    
    if (cube && cubeContainer) {
        // Mouse interaction with cube
        cubeContainer.addEventListener('mousemove', (e) => {
            const rect = cubeContainer.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const mouseX = e.clientX - centerX;
            const mouseY = e.clientY - centerY;
            
            const rotateX = (mouseY / rect.height) * 30;
            const rotateY = (mouseX / rect.width) * 30;
            
            cube.style.transform = `rotateX(${15 + rotateX}deg) rotateY(${rotateY}deg) rotateZ(5deg)`;
        });
        
        // Reset cube rotation when mouse leaves
        cubeContainer.addEventListener('mouseleave', () => {
            cube.style.transform = '';
        });
        
        // Click interaction
        cube.addEventListener('click', () => {
            cube.style.animation = 'none';
            cube.style.transform = 'rotateX(15deg) rotateY(720deg) rotateZ(5deg) scale(1.1)';
            
            setTimeout(() => {
                cube.style.animation = 'cube-rotate 20s linear infinite, cube-hover 6s ease-in-out infinite';
                cube.style.transform = '';
            }, 1000);
        });
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const cube = document.querySelector('.cube');
    const heroContent = document.querySelector('.hero-content');
    
    if (cube) {
        const rate = scrolled * 0.1;
        cube.style.transform = `translateY(${rate}px)`;
    }
    
    if (heroContent) {
        const rate = scrolled * -0.2;
        heroContent.style.transform = `translateY(${rate}px)`;
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
                entry.target.style.animation = 'slideInUp 0.8s ease-out';
            }
            
            if (entry.target.classList.contains('skill-category')) {
                entry.target.style.animation = 'fadeInScale 0.8s ease-out';
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .about-text');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 20px 40px rgba(255, 255, 255, 0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

// Skill tag hover effects
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Contact method hover effects
document.querySelectorAll('.contact-method').forEach(method => {
    method.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(5px)';
    });
    
    method.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// Cube face individual animations
document.addEventListener('DOMContentLoaded', () => {
    const cubeFaces = document.querySelectorAll('.cube-face');
    
    cubeFaces.forEach((face, index) => {
        // Add subtle individual animations to each face
        face.style.animationDelay = `${index * 0.5}s`;
        
        // Add hover effect to individual faces
        face.addEventListener('mouseenter', () => {
            face.style.background = `linear-gradient(135deg, 
                rgba(255, 255, 255, 0.25) 0%, 
                rgba(255, 255, 255, 0.1) 50%, 
                rgba(0, 0, 0, 0.05) 100%)`;
        });
        
        face.addEventListener('mouseleave', () => {
            face.style.background = `linear-gradient(135deg, 
                rgba(255, 255, 255, 0.15) 0%, 
                rgba(255, 255, 255, 0.05) 50%, 
                rgba(0, 0, 0, 0.1) 100%)`;
        });
    });
});

// Enhanced scroll effects
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollProgress = scrolled / (documentHeight - windowHeight);
    
    // Update cube rotation based on scroll
    const cube = document.querySelector('.cube');
    if (cube) {
        const rotationY = scrollProgress * 360;
        cube.style.setProperty('--scroll-rotation', `${rotationY}deg`);
    }
    
    // Parallax effect for background layers
    const body = document.body;
    body.style.setProperty('--scroll-offset', `${scrolled * 0.5}px`);
});

// Keyboard navigation enhancement
document.addEventListener('keydown', (e) => {
    // Space bar to pause/resume cube animation
    if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault();
        const cube = document.querySelector('.cube');
        if (cube) {
            const currentAnimation = cube.style.animationPlayState;
            cube.style.animationPlayState = currentAnimation === 'paused' ? 'running' : 'paused';
        }
    }
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
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Console message for developers
console.log(`
🚀 Photorealistic 3D Cube Portfolio Online!
📧 Contact: muntasirmkhan@hotmail.com
🔗 GitHub: https://github.com/muntasiir
💼 LinkedIn: https://linkedin.com/in/muntasir-khan

System Status: OPERATIONAL
3D Cube: ACTIVE
Animations: ENABLED
Dark Landscape: INITIALIZED

Built with HTML, CSS, and JavaScript
Optimized for modern browsers with 3D transforms
`);
