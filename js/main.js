/**
 * אוהד חיים - מוביל פרויקטים של נוף
 * Vanilla JavaScript v1.0
 * Mobile-First, No Dependencies
 */

(function() {
    'use strict';
    
    // DOM Elements
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.nav--mobile');
    const navLinks = document.querySelectorAll('.nav__link[href^="#"]');
    const video = document.querySelector('#main-video');
    
    /**
     * Mobile Menu Toggle
     */
    function initMobileMenu() {
        if (!menuToggle || !mobileNav) return;
        
        menuToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            // Toggle aria-expanded
            this.setAttribute('aria-expanded', !isExpanded);
            
            // Toggle mobile nav
            if (isExpanded) {
                mobileNav.classList.remove('is-open');
            } else {
                mobileNav.classList.add('is-open');
            }
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!menuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
                menuToggle.setAttribute('aria-expanded', 'false');
                mobileNav.classList.remove('is-open');
            }
        });
        
        // Close mobile menu on window resize (desktop)
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 1024) {
                menuToggle.setAttribute('aria-expanded', 'false');
                mobileNav.classList.remove('is-open');
            }
        });
    }
    
    /**
     * Smooth Scrolling for Anchor Links
     */
    function initSmoothScrolling() {
        navLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Only handle anchor links
                if (!href.startsWith('#')) return;
                
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Close mobile menu if open
                    if (mobileNav) {
                        mobileNav.classList.remove('is-open');
                        if (menuToggle) {
                            menuToggle.setAttribute('aria-expanded', 'false');
                        }
                    }
                    
                    // Calculate offset for fixed header
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    // Smooth scroll
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    /**
     * Hero Slideshow Functionality
     */
    function initHeroSlideshow() {
        const slides = document.querySelectorAll('.slide');
        const indicators = document.querySelectorAll('.indicator');
        const scrollIndicator = document.querySelector('.scroll-indicator');
        
        if (!slides.length || !indicators.length) return;
        
        let currentSlide = 0;
        let slideInterval;
        
        // טען תמונות רקע לכל slide
        slides.forEach(slide => {
            const bgUrl = slide.dataset.bg;
            if (bgUrl) {
                slide.style.backgroundImage = `url(${bgUrl})`;
            }
        });
        
        // מעבר לתמונה הבאה
        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            indicators[currentSlide].classList.remove('active');
            
            currentSlide = (currentSlide + 1) % slides.length;
            
            slides[currentSlide].classList.add('active');
            indicators[currentSlide].classList.add('active');
        }
        
        // מעבר לתמונה ספציפית
        function goToSlide(slideIndex) {
            if (slideIndex === currentSlide) return;
            
            slides[currentSlide].classList.remove('active');
            indicators[currentSlide].classList.remove('active');
            
            currentSlide = slideIndex;
            
            slides[currentSlide].classList.add('active');
            indicators[currentSlide].classList.add('active');
            
            // איפוס הטיימר
            resetSlideTimer();
        }
        
        // התחלת טיימר אוטומטי
        function startSlideTimer() {
            slideInterval = setInterval(nextSlide, 6000); // 6 שניות
        }
        
        // איפוס טיימר
        function resetSlideTimer() {
            clearInterval(slideInterval);
            startSlideTimer();
        }
        
        // מאזין לקליקים על אינדיקטורים
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                goToSlide(index);
            });
        });
        
        // מאזין לקליק על חץ הגלילה
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', () => {
                const projectsSection = document.querySelector('#projects');
                if (projectsSection) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = projectsSection.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        }
        
        // מאזין להשהיה כשעוברים עם העכבר על הslideshow
        const slideshowContainer = document.querySelector('.slideshow-container');
        if (slideshowContainer) {
            slideshowContainer.addEventListener('mouseenter', () => {
                clearInterval(slideInterval);
            });
            
            slideshowContainer.addEventListener('mouseleave', () => {
                startSlideTimer();
            });
        }
        
        // התחלת הטיימר האוטומטי
        startSlideTimer();
        
        // נגישות - מאזין למקלדת
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    goToSlide(index);
                }
            });
        });
        
        console.log('✨ Slideshow initialized with', slides.length, 'slides');
    }
    
    /**
     * Video Player Enhancement
     */
    function initVideoPlayer() {
        if (!video) return;
        
        // Add loading state
        video.addEventListener('loadstart', function() {
            this.style.opacity = '0.7';
        });
        
        video.addEventListener('canplay', function() {
            this.style.opacity = '1';
        });
        
        // Pause video when not in viewport (performance)
        const observerOptions = {
            threshold: 0.25
        };
        
        const videoObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    // Video is visible - allow playing
                    video.removeAttribute('data-paused-by-observer');
                } else {
                    // Video is not visible - pause if playing
                    if (!video.paused && !video.hasAttribute('data-paused-by-observer')) {
                        video.pause();
                        video.setAttribute('data-paused-by-observer', 'true');
                    }
                }
            });
        }, observerOptions);
        
        videoObserver.observe(video);
        
        // Handle video errors gracefully
        video.addEventListener('error', function(e) {
            console.warn('Video playback error:', e);
            this.poster = this.poster || 'images/video-placeholder.jpg';
        });
    }
    
    /**
     * Project Cards Interaction Enhancement
     */
    function initProjectCards() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(function(card) {
            // Add keyboard navigation
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'button');
            
            // Handle keyboard interaction
            card.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    // Future: could open project detail page
                    console.log('Project card activated:', this.querySelector('.project-card__title').textContent);
                }
            });
            
            // Lazy load images when they come into view
            const img = card.querySelector('img');
            if (img) {
                const imgObserver = new IntersectionObserver(function(entries) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            if (img.dataset.src) {
                                img.src = img.dataset.src;
                                img.removeAttribute('data-src');
                            }
                            imgObserver.unobserve(img);
                        }
                    });
                });
                
                imgObserver.observe(img);
            }
        });
    }
    
    /**
     * Header Scroll Effect
     */
    function initHeaderScroll() {
        const header = document.querySelector('.header');
        if (!header) return;
        
        let lastScrollTop = 0;
        let ticking = false;
        
        function updateHeader() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 100) {
                header.classList.add('header--scrolled');
            } else {
                header.classList.remove('header--scrolled');
            }
            
            // Optional: Hide header when scrolling down, show when scrolling up
            if (scrollTop > lastScrollTop && scrollTop > 200) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
            ticking = false;
        }
        
        function onScroll() {
            if (!ticking) {
                requestAnimationFrame(updateHeader);
                ticking = true;
            }
        }
        
        window.addEventListener('scroll', onScroll, { passive: true });
    }
    
    /**
     * Performance Monitoring
     */
    function initPerformanceMonitoring() {
        // Monitor Core Web Vitals if supported
        if ('web-vital' in window) {
            // This would integrate with actual web-vitals library if added
            console.log('Web Vitals monitoring ready');
        }
        
        // Simple performance logging
        window.addEventListener('load', function() {
            if ('performance' in window) {
                const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
                console.log(`Page load time: ${loadTime}ms`);
            }
        });
    }
    
    /**
     * Accessibility Enhancements
     */
    function initAccessibility() {
        // Skip to main content link
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.textContent = 'דלג לתוכן הראשי';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: #000;
            color: #fff;
            padding: 8px;
            text-decoration: none;
            z-index: 10000;
            transition: top 0.3s;
        `;
        
        skipLink.addEventListener('focus', function() {
            this.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', function() {
            this.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        // Add main ID if not present
        const main = document.querySelector('.main');
        if (main && !main.id) {
            main.id = 'main';
        }
    }
    
    /**
     * Initialize All Functions
     */
    function init() {
        // Core functionality
        initMobileMenu();
        initSmoothScrolling();
        initHeroSlideshow();
        initVideoPlayer();
        initProjectCards();
        initHeaderScroll();
        
        // Enhancements
        initAccessibility();
        initPerformanceMonitoring();
        
        // Add loaded class to body for CSS transitions
        document.body.classList.add('js-loaded');
        
        console.log('🚀 Site initialized successfully - Mobile-first & accessible');
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();