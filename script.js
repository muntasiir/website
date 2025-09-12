// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
}

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
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(18, 25, 39, 0.95)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.backdropFilter = 'none';
        }
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
        // Mouse interaction with cube - subtle movement
        cubeContainer.addEventListener('mousemove', (e) => {
            const rect = cubeContainer.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const mouseX = e.clientX - centerX;
            const mouseY = e.clientY - centerY;
            
            const rotateX = (mouseY / rect.height) * 15;
            const rotateY = (mouseX / rect.width) * 15;
            
            cube.style.transform = `rotateX(${10 + rotateX}deg) rotateY(${rotateY}deg) rotateZ(2deg)`;
        });
        
        // Reset cube rotation when mouse leaves
        cubeContainer.addEventListener('mouseleave', () => {
            cube.style.transform = '';
        });
        
        // Click interaction - elegant spin
        cube.addEventListener('click', () => {
            cube.style.animation = 'none';
            cube.style.transform = 'rotateX(10deg) rotateY(720deg) rotateZ(2deg) scale(1.05)';
            
            setTimeout(() => {
                cube.style.animation = 'cube-rotate 25s linear infinite, cube-hover 8s ease-in-out infinite';
                cube.style.transform = '';
            }, 1200);
        });
    }
});

// Subtle parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const cube = document.querySelector('.cube');
    const heroContent = document.querySelector('.hero-content');
    
    if (cube) {
        const rate = scrolled * 0.05;
        cube.style.transform = `translateY(${rate}px)`;
    }
    
    if (heroContent) {
        const rate = scrolled * -0.1;
        heroContent.style.transform = `translateY(${rate}px)`;
    }
});

// Intersection Observer for smooth animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Add elegant entrance animations
            if (entry.target.classList.contains('project-card')) {
                entry.target.style.animation = 'slideInUp 1s ease-out';
            }
            
            if (entry.target.classList.contains('skill-category')) {
                entry.target.style.animation = 'fadeInScale 1s ease-out';
            }
            
            if (entry.target.classList.contains('about-text')) {
                entry.target.style.animation = 'fadeIn 1.2s ease-out';
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .about-text');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 1s ease, transform 1s ease';
        observer.observe(el);
    });
});

// Elegant hover effects for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 15px 30px rgba(255, 255, 255, 0.08)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

// Subtle hover effects for skill tags
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-1px)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Smooth hover effects for contact methods
document.querySelectorAll('.contact-method').forEach(method => {
    method.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(3px)';
    });
    
    method.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// Enhanced cube face interactions
document.addEventListener('DOMContentLoaded', () => {
    const cubeFaces = document.querySelectorAll('.cube-face');
    
    cubeFaces.forEach((face, index) => {
        // Staggered animation delays for elegance
        face.style.animationDelay = `${index * 0.3}s`;
        
        // Subtle individual face hover effects
        face.addEventListener('mouseenter', () => {
            face.style.background = `linear-gradient(135deg, 
                rgba(255, 255, 255, 0.18) 0%, 
                rgba(255, 255, 255, 0.06) 50%, 
                rgba(0, 0, 0, 0.06) 100%)`;
        });
        
        face.addEventListener('mouseleave', () => {
            face.style.background = `linear-gradient(135deg, 
                rgba(255, 255, 255, 0.12) 0%, 
                rgba(255, 255, 255, 0.04) 50%, 
                rgba(0, 0, 0, 0.08) 100%)`;
        });
    });
});

// Add CSS animations for smooth entrance effects
const additionalStyles = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: scale(0.95);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Enhanced scroll-based cube rotation
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollProgress = scrolled / (documentHeight - windowHeight);
    
    // Subtle cube rotation based on scroll
    const cube = document.querySelector('.cube');
    if (cube) {
        const rotationY = scrollProgress * 180;
        cube.style.setProperty('--scroll-rotation', `${rotationY}deg`);
    }
});

// Smooth page load animation
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Keyboard accessibility for cube interaction
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault();
        const cube = document.querySelector('.cube');
        if (cube) {
            // Trigger click animation
            cube.click();
        }
    }
});

// Console message for developers
console.log(`
✨ Cinematic Portfolio Experience
📧 Contact: muntasirmkhan@hotmail.com
🔗 GitHub: https://github.com/muntasiir
💼 LinkedIn: https://linkedin.com/in/muntasir-khan

Status: Online
3D Cube: Active
Animations: Enabled
Design: Cinematic & Premium

Built with modern web technologies
Optimized for immersive experience
`);
