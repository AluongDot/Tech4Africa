/ Course Data/
const courses = [
    {
        id: 1,
        title: "HTML & CSS Fundamentals",
        category: "programming",
        level: "Beginner",
        duration: "4 weeks",
        students: "2.5k",
        description: "Learn the building blocks of web development with HTML and CSS.",
        icon: "🌐"
    },
    {
        id: 2,
        title: "JavaScript for Beginners",
        category: "programming",
        level: "Beginner",
        duration: "6 weeks",
        students: "3.2k",
        description: "Master the fundamentals of JavaScript programming.",
        icon: "⚡"
    },
    {
        id: 3,
        title: "Python Programming",
        category: "programming",
        level: "Intermediate",
        duration: "8 weeks",
        students: "2.1k",
        description: "Learn Python for web development, data science, and automation.",
        icon: "🐍"
    },
    {
        id: 4,
        title: "UI/UX Design Principles",
        category: "design",
        level: "Beginner",
        duration: "5 weeks",
        students: "1.8k",
        description: "Design beautiful and user-friendly interfaces.",
        icon: "🎨"
    },
    {
        id: 5,
        title: "Mobile App Development",
        category: "mobile",
        level: "Advanced",
        duration: "10 weeks",
        students: "1.2k",
        description: "Build native mobile apps for iOS and Android.",
        icon: "📱"
    },
    {
        id: 6,
        title: "Digital Marketing Strategy",
        category: "business",
        level: "Intermediate",
        duration: "6 weeks",
        students: "2.8k",
        description: "Master digital marketing for African markets.",
        icon: "📈"
    },
    {
        id: 7,
        title: "React.js Development",
        category: "programming",
        level: "Advanced",
        duration: "8 weeks",
        students: "1.5k",
        description: "Build modern web applications with React.js.",
        icon: "⚛️"
    },
    {
        id: 8,
        title: "Graphic Design Essentials",
        category: "design",
        level: "Beginner",
        duration: "4 weeks",
        students: "2.2k",
        description: "Create stunning graphics and visual content.",
        icon: "🖼️"
    },
    {
        id: 9,
        title: "Tech Entrepreneurship",
        category: "business",
        level: "Intermediate",
        duration: "7 weeks",
        students: "1.9k",
        description: "Start and scale your tech business in Africa.",
        icon: "🚀"
    },
    {
        id: 10,
        title: "Flutter Development",
        category: "mobile",
        level: "Intermediate",
        duration: "9 weeks",
        students: "980",
        description: "Cross-platform mobile development with Flutter.",
        icon: "💙"
    },
    {
        id: 11,
        title: "Data Science Fundamentals",
        category: "programming",
        level: "Intermediate",
        duration: "10 weeks",
        students: "1.4k",
        description: "Analyze data and build predictive models with Python.",
        icon: "📊"
    },
    {
        id: 12,
        title: "Brand Identity Design",
        category: "design",
        level: "Advanced",
        duration: "6 weeks",
        students: "750",
        description: "Create compelling brand identities and visual systems.",
        icon: "✨"
    }
];

// Innovation Stories Data
const stories = [
    {
        id: 1,
        name: "Flutterwave",
        location: "Nigeria",
        description: "Revolutionary fintech platform processing billions in transactions across Africa, connecting the continent to global commerce.",
        icon: "💰",
        link: "#"
    },
    {
        id: 2,
        name: "M-Pesa",
        location: "Kenya",
        description: "Mobile money service that transformed financial inclusion, serving over 50 million users across Africa.",
        icon: "📲",
        link: "#"
    },
    {
        id: 3,
        name: "Andela",
        location: "Multi-country",
        description: "Global talent accelerator training world-class software engineers across Africa for international opportunities.",
        icon: "👩‍💻",
        link: "#"
    },
    {
        id: 4,
        name: "Zipline",
        location: "Rwanda",
        description: "Drone delivery service revolutionizing healthcare logistics by delivering medical supplies to remote areas.",
        icon: "🚁",
        link: "#"
    },
    {
        id: 5,
        name: "Jumia",
        location: "Multi-country",
        description: "Africa's leading e-commerce platform, connecting millions of consumers with thousands of sellers.",
        icon: "🛒",
        link: "#"
    },
    {
        id: 6,
        name: "Paystack",
        location: "Nigeria",
        description: "Modern payment infrastructure for African businesses, acquired by Stripe for $200M.",
        icon: "💳",
        link: "#"
    }
];

// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const coursesGrid = document.getElementById('coursesGrid');
const storiesGrid = document.getElementById('storiesGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('courseSearch');
const contactForm = document.getElementById('contactForm');

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    renderCourses();
    renderStories();
    initializeFilters();
    initializeSearch();
    initializeForm();
    initializeAnimations();
    initializeButtons();
});

// Navigation Functions
function initializeNavigation() {
    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = link.getAttribute('data-page');
            navigateToPage(targetPage);
            
            // Close mobile menu
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Handle hamburger menu
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Handle footer links
    document.querySelectorAll('a[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = link.getAttribute('data-page');
            navigateToPage(targetPage);
        });
    });
}

function navigateToPage(targetPage) {
    // Hide all pages
    pages.forEach(page => page.classList.remove('active'));
    
    // Show target page
    const targetElement = document.getElementById(targetPage);
    if (targetElement) {
        targetElement.classList.add('active');
    }
    
    // Update active nav link
    navLinks.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`[data-page="${targetPage}"]`);
    if (activeLink && activeLink.classList.contains('nav-link')) {
        activeLink.classList.add('active');
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Add fade-in animation to page content
    setTimeout(() => {
        const fadeElements = targetElement.querySelectorAll('.fade-in');
        fadeElements.forEach((el, index) => {
            el.style.animation = 'none';
            el.offsetHeight; // Trigger reflow
            el.style.animation = `fadeInUp 0.6s ease forwards`;
            el.style.animationDelay = `${index * 0.1}s`;
        });
    }, 50);
}

// Course Functions
function renderCourses() {
    if (!coursesGrid) return;
    
    coursesGrid.innerHTML = courses.map(course => `
        <div class="course-card" data-category="${course.category}" data-level="${course.level.toLowerCase()}">
            <div class="course-image">${course.icon}</div>
            <div class="course-content">
                <h3>${course.title}</h3>
                <span class="course-level">${course.level}</span>
                <p>${course.description}</p>
                <div class="course-meta">
                    <span>📅 ${course.duration}</span>
                    <span>👥 ${course.students} students</span>
                </div>
                <button class="course-btn" onclick="enrollCourse(${course.id})">Start Learning</button>
            </div>
        </div>
    `).join('');
}

function enrollCourse(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (course) {
        showNotification(`🎉 Successfully enrolled in "${course.title}"! Check your email for next steps.`);
    }
}

// Stories Functions
function renderStories() {
    if (!storiesGrid) return;
    
    storiesGrid.innerHTML = stories.map(story => `
        <div class="story-card">
            <div class="story-image">${story.icon}</div>
            <div class="story-content">
                <h3>${story.name}</h3>
                <div class="story-location">📍 ${story.location}</div>
                <p>${story.description}</p>
                <a href="${story.link}" class="read-more-btn" target="_blank">Read More</a>
            </div>
        </div>
    `).join('');
}

// Filter Functions
function initializeFilters() {
    if (!filterBtns) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active filter button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            filterCourses(filter);
        });
    });
}

function filterCourses(category) {
    const courseCards = document.querySelectorAll('.course-card');
    
    courseCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
            card.classList.remove('hidden');
            // Stagger animation
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            }, Math.random() * 200);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.8)';
            setTimeout(() => {
                card.style.display = 'none';
                card.classList.add('hidden');
            }, 300);
        }
    });
}

// Search Functions
function initializeSearch() {
    if (!searchInput) return;
    
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchCourses(e.target.value.toLowerCase());
        }, 300);
    });
}

function searchCourses(query) {
    const courseCards = document.querySelectorAll('.course-card');
    
    courseCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        const category = card.getAttribute('data-category').toLowerCase();
        
        if (title.includes(query) || description.includes(query) || category.includes(query)) {
            card.style.display = 'block';
            card.classList.remove('hidden');
        } else {
            card.style.display = 'none';
            card.classList.add('hidden');
        }
    });
}

// Form Functions
function initializeForm() {
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            submitForm();
        }
    });
    
    // Real-time validation
    const inputs = contactForm.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => clearError(input));
    });
}

function validateForm() {
    let isValid = true;
    const formData = new FormData(contactForm);
    
    // Required fields validation
    const requiredFields = ['fullName', 'email', 'country'];
    requiredFields.forEach(field => {
        const input = document.getElementById(field);
        if (!formData.get(field) || formData.get(field).trim() === '') {
            showError(input, 'This field is required');
            isValid = false;
        }
    });
    
    // Email validation
    const email = formData.get('email');
    if (email && !isValidEmail(email)) {
        showError(document.getElementById('email'), 'Please enter a valid email address');
        isValid = false;
    }
    
    // Phone validation (if provided)
    const phone = formData.get('phone');
    if (phone && !isValidPhone(phone)) {
        showError(document.getElementById('phone'), 'Please enter a valid phone number');
        isValid = false;
    }
    
    return isValid;
}

function validateField(input) {
    const value = input.value.trim();
    
    if (input.hasAttribute('required') && !value) {
        showError(input, 'This field is required');
        return false;
    }
    
    if (input.type === 'email' && value && !isValidEmail(value)) {
        showError(input, 'Please enter a valid email address');
        return false;
    }
    
    if (input.type === 'tel' && value && !isValidPhone(value)) {
        showError(input, 'Please enter a valid phone number');
        return false;
    }
    
    clearError(input);
    return true;
}

function showError(input, message) {
    const formGroup = input.parentNode;
    const errorElement = formGroup.querySelector('.error-message');
    
    formGroup.classList.add('error');
    errorElement.textContent = message;
}

function clearError(input) {
    const formGroup = input.parentNode;
    const errorElement = formGroup.querySelector('.error-message');
    
    formGroup.classList.remove('error');
    errorElement.textContent = '';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

function submitForm() {
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    
    // Get checkbox values
    const interests = Array.from(contactForm.querySelectorAll('input[name="interest"]:checked'))
        .map(cb => cb.value);
    data.interests = interests;
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Joining...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        showSuccessMessage(' Welcome to Tech4Africa! Check your email for next steps.');
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Log data (in real app, send to server)
        console.log('Form submitted:', data);
    }, 2000);
}

function showSuccessMessage(message) {
    // Create success message element
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    
    // Insert before form
    contactForm.parentNode.insertBefore(successDiv, contactForm);
    
    // Show with animation
    setTimeout(() => successDiv.classList.add('show'), 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        successDiv.classList.remove('show');
        setTimeout(() => successDiv.remove(), 300);
    }, 5000);
}

// Button Functions
function initializeButtons() {
    // Hero buttons
    document.querySelectorAll('.btn[data-page]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = btn.getAttribute('data-page');
            navigateToPage(targetPage);
        });
    });
    
    // Download buttons
    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const guideName = btn.parentNode.querySelector('h3').textContent;
            showNotification(`📥 Downloading "${guideName}"...`);
            
            // Simulate download
            setTimeout(() => {
                showNotification(`✅ "${guideName}" downloaded successfully!`);
            }, 1500);
        });
    });
}

// Animation Functions
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.highlight-card, .stat-item, .course-card, .story-card, .guide-card').forEach(el => {
        observer.observe(el);
    });
    
    // Navbar scroll effect
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        // Add background blur when scrolled
        if (scrollTop > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Add hover effects to cards
    document.querySelectorAll('.course-card, .story-card, .highlight-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Utility Functions
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--primary-blue);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 350px;
    `;
    
    if (type === 'success') {
        notification.style.background = 'var(--success-green)';
    } else if (type === 'error') {
        notification.style.background = '#ef4444';
    }
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => removeNotification(notification));
    
    // Auto-remove after 5 seconds
    setTimeout(() => removeNotification(notification), 5000);
}

function removeNotification(notification) {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Statistics Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-card h3, .stat-item h3');
    
    counters.forEach(counter => {
        const target = counter.textContent;
        const numericValue = parseInt(target.replace(/[^0-9]/g, ''));
        
        if (numericValue) {
            let current = 0;
            const increment = numericValue / 100;
            const timer = setInterval(() => {
                current += increment;
                if (current >= numericValue) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current) + target.replace(/[0-9]/g, '').replace(/[.,]/g, '');
                }
            }, 20);
        }
    });
}

// Course Category Icons
const categoryIcons = {
    programming: '💻',
    design: '🎨',
    business: '💼',
    mobile: '📱'
};

// Enhanced Course Filtering with Animation
function filterCoursesAnimated(category) {
    const courseCards = document.querySelectorAll('.course-card');
    const visibleCards = [];
    const hiddenCards = [];
    
    courseCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
            visibleCards.push(card);
        } else {
            hiddenCards.push(card);
        }
    });
    
    // Hide cards first
    hiddenCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.8)';
    });
    
    setTimeout(() => {
        hiddenCards.forEach(card => {
            card.style.display = 'none';
        });
        
        // Show visible cards with staggered animation
        visibleCards.forEach((card, index) => {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            }, index * 100);
        });
    }, 300);
}

// Mobile Menu Enhancement
function initializeMobileMenu() {
    const navLinks = document.querySelectorAll('.nav-menu .nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Close mobile menu when link is clicked
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// Lazy Loading for Images
function initializeLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Course Progress Tracking
function trackCourseProgress(courseId) {
    let progress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
    
    if (!progress[courseId]) {
        progress[courseId] = {
            enrolled: new Date().toISOString(),
            completed: 0,
            lastAccessed: new Date().toISOString()
        };
    } else {
        progress[courseId].lastAccessed = new Date().toISOString();
    }
    
    localStorage.setItem('courseProgress', JSON.stringify(progress));
}

// Dynamic Content Loading
function loadDynamicContent() {
    // Simulate loading additional content
    const loadMoreBtn = document.createElement('button');
    loadMoreBtn.textContent = 'Load More Courses';
    loadMoreBtn.className = 'btn primary load-more-btn';
    loadMoreBtn.style.cssText = `
        display: block;
        margin: 2rem auto;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
    `;
    
    if (coursesGrid) {
        coursesGrid.parentNode.appendChild(loadMoreBtn);
        
        setTimeout(() => {
            loadMoreBtn.style.opacity = '1';
            loadMoreBtn.style.transform = 'translateY(0)';
        }, 500);
        
        loadMoreBtn.addEventListener('click', () => {
            loadMoreBtn.textContent = 'Loading...';
            loadMoreBtn.disabled = true;
            
            setTimeout(() => {
                showNotification('✨ All courses loaded! Explore our full catalog.', 'success');
                loadMoreBtn.style.display = 'none';
            }, 1500);
        });
    }
}

// Enhanced Form Validation with Real-time Feedback
function initializeAdvancedForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        // Add focus effects
        input.addEventListener('focus', () => {
            input.parentNode.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            input.parentNode.classList.remove('focused');
            if (input.value.trim() === '') {
                input.parentNode.classList.remove('filled');
            } else {
                input.parentNode.classList.add('filled');
            }
        });
        
        // Real-time validation
        input.addEventListener('input', () => {
            debounce(() => validateFieldRealTime(input), 300)();
        });
    });
}

function validateFieldRealTime(input) {
    const value = input.value.trim();
    const formGroup = input.parentNode;
    
    // Clear previous validation state
    formGroup.classList.remove('valid', 'invalid');
    
    if (value) {
        if (input.type === 'email' && isValidEmail(value)) {
            formGroup.classList.add('valid');
        } else if (input.type === 'tel' && isValidPhone(value)) {
            formGroup.classList.add('valid');
        } else if (input.type === 'text' && value.length >= 2) {
            formGroup.classList.add('valid');
        } else if (input.tagName === 'SELECT' && value !== '') {
            formGroup.classList.add('valid');
        }
    }
}

// Debounce utility function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scrolling for internal links
function initializeSmoothScrolling() {
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
}

// Performance monitoring
function initializePerformanceTracking() {
    // Track page load time
    window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Page loaded in ${loadTime}ms`);
        
        // Show notification if load time is too high
        if (loadTime > 3000) {
            setTimeout(() => {
                showNotification('⚡ Optimizing experience for better performance...', 'info');
            }, 2000);
        }
    });
}

// Enhanced initialization
document.addEventListener('DOMContentLoaded', function() {
    // Core functionality
    initializeNavigation();
    renderCourses();
    renderStories();
    initializeFilters();
    initializeSearch();
    initializeForm();
    initializeAnimations();
    initializeButtons();
    
    // Enhanced features
    initializeMobileMenu();
    initializeLazyLoading();
    initializeAdvancedForm();
    initializeSmoothScrolling();
    initializePerformanceTracking();
    loadDynamicContent();
    
    // Animate counters when page loads
    setTimeout(animateCounters, 1000);
    
    // Show welcome message
    setTimeout(() => {
        showNotification('🌍 Welcome to Tech4Africa! Explore our free courses and resources.', 'success');
    }, 2000);
});

// Service Worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Export functions for testing (if needed)
window.Tech4Africa = {
    navigateToPage,
    enrollCourse,
    filterCourses: filterCoursesAnimated,
    searchCourses,
    showNotification,
    validateForm
};