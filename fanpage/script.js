document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for hero scroll button
    document.querySelector('.hero-scroll').addEventListener('click', function() {
        document.querySelector('#matches').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.toggle('active', i === index);
        });
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    // Auto-rotate testimonials every 5 seconds
    setInterval(nextTestimonial, 5000);

    // Poll voting functionality
    const pollOptions = document.querySelectorAll('.poll-option');
    
    pollOptions.forEach(option => {
        option.addEventListener('click', function() {
            const pollCard = this.closest('.poll-card');
            const allOptions = pollCard.querySelectorAll('.poll-option');
            
            // Remove any existing selection
            allOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Add selection to clicked option
            this.classList.add('selected');
            
            // Animate the bars
            const percentage = this.querySelector('.option-percentage').textContent;
            const fill = this.querySelector('.option-fill');
            
            // Add a slight animation effect
            fill.style.transform = 'scaleX(1.1)';
            setTimeout(() => {
                fill.style.transform = 'scaleX(1)';
            }, 200);
            
            // Show a thank you message
            showVoteMessage(this);
        });
    });

    function showVoteMessage(option) {
        const message = document.createElement('div');
        message.textContent = 'Thanks for voting!';
        message.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #28a745;
            color: white;
            padding: 1rem 2rem;
            border-radius: 25px;
            z-index: 1000;
            font-weight: 600;
            animation: slideIn 0.3s ease-out;
        `;
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.remove();
        }, 3000);
    }

    // Fan club form submission
    const fanClubForm = document.getElementById('fanClubForm');
    
    fanClubForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.innerHTML = '<span class="loading"></span> Processing...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            showSuccessMessage();
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });

    function showSuccessMessage() {
        const message = document.createElement('div');
        message.innerHTML = `
            <div style="display: flex; align-items: center; gap: 1rem;">
                <i class="fas fa-check-circle"></i>
                <span>Welcome to the RCB Fan Club! Check your email for confirmation.</span>
            </div>
        `;
        message.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #28a745;
            color: white;
            padding: 1rem 2rem;
            border-radius: 10px;
            z-index: 1000;
            font-weight: 600;
            max-width: 300px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        `;
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.remove();
        }, 5000);
    }

    // Gallery item click effects
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const overlay = this.querySelector('.gallery-overlay');
            const title = overlay.querySelector('h3').textContent;
            
            // Create modal-like effect (simplified)
            const modal = document.createElement('div');
            modal.innerHTML = `
                <div style="
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                    cursor: pointer;
                ">
                    <div style="
                        background: white;
                        padding: 2rem;
                        border-radius: 15px;
                        text-align: center;
                        max-width: 400px;
                    ">
                        <h3 style="color: #C41E3A; margin-bottom: 1rem;">${title}</h3>
                        <p style="color: #666; margin-bottom: 1rem;">Coming soon: Full gallery view</p>
                        <button style="
                            background: #C41E3A;
                            color: white;
                            border: none;
                            padding: 0.5rem 1rem;
                            border-radius: 5px;
                            cursor: pointer;
                        ">Close</button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            modal.addEventListener('click', function() {
                this.remove();
            });
        });
    });

    // Social media links
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                const platform = this.classList.contains('instagram') ? 'Instagram' :
                               this.classList.contains('twitter') ? 'Twitter' :
                               this.classList.contains('youtube') ? 'YouTube' : 'Facebook';
                alert(`Redirecting to RCB's official ${platform} page...`);
            }
            // Otherwise, let the browser follow the link
        });
    });

    // Match card hover effects
    const matchCards = document.querySelectorAll('.match-card');
    
    matchCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Player card rotation effect
    const playerCards = document.querySelectorAll('.player-card');
    
    playerCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotateY(5deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateY(0)';
        });
    });

    // News card read more functionality
    const readMoreLinks = document.querySelectorAll('.read-more');
    
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const newsCard = this.closest('.news-card');
            const title = newsCard.querySelector('h3').textContent;
            
            // Simulate opening a news article
            const newsModal = document.createElement('div');
            newsModal.innerHTML = `
                <div style="
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                    padding: 2rem;
                ">
                    <div style="
                        background: white;
                        padding: 2rem;
                        border-radius: 15px;
                        max-width: 600px;
                        max-height: 80vh;
                        overflow-y: auto;
                    ">
                        <h2 style="color: #C41E3A; margin-bottom: 1rem;">${title}</h2>
                        <p style="color: #666; line-height: 1.6; margin-bottom: 2rem;">
                            This is a detailed news article about RCB. In a real implementation, 
                            this would contain the full article content, images, and related news.
                        </p>
                        <button style="
                            background: #C41E3A;
                            color: white;
                            border: none;
                            padding: 0.5rem 1rem;
                            border-radius: 5px;
                            cursor: pointer;
                        ">Close</button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(newsModal);
            
            newsModal.addEventListener('click', function(e) {
                if (e.target === this || e.target.tagName === 'BUTTON') {
                    this.remove();
                }
            });
        });
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.match-card, .player-card, .news-card, .poll-card, .gallery-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add click effect to all buttons
    document.querySelectorAll('button, .submit-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // Add sparkle effect to RCB logo
    const heroLogo = document.querySelector('.hero-logo');
    
    setInterval(() => {
        heroLogo.style.textShadow = '0 0 20px #FFD700, 0 0 30px #FFD700, 0 0 40px #FFD700';
        setTimeout(() => {
            heroLogo.style.textShadow = 'none';
        }, 500);
    }, 3000);

    // Squad category filtering
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.dataset.category;
            
            playerCards.forEach(card => {
                const playerRole = card.querySelector('.player-role').textContent.toLowerCase();
                let shouldShow = false;
                
                switch(category) {
                    case 'all':
                        shouldShow = true;
                        break;
                    case 'batsmen':
                        shouldShow = playerRole.includes('batter') || playerRole.includes('batting all-rounder');
                        break;
                    case 'wicketkeepers':
                        shouldShow = playerRole.includes('wicketkeeper batter');
                        break;
                    case 'bowlers':
                        shouldShow = playerRole.includes('bowler');
                        break;
                    case 'allrounders':
                        shouldShow = playerRole.includes('all-rounder');
                        break;
                }
                
                if (shouldShow) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.5s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Add dynamic typing effect to hero tagline
    const heroTagline = document.querySelector('.hero-tagline');
    const originalText = heroTagline.textContent;
    
    function typeEffect() {
        heroTagline.textContent = '';
        let i = 0;
        
        const typeInterval = setInterval(() => {
            heroTagline.textContent += originalText[i];
            i++;
            
            if (i >= originalText.length) {
                clearInterval(typeInterval);
            }
        }, 100);
    }

    // Start typing effect after page load
    setTimeout(typeEffect, 1000);

    // Add pulse effect to notification badges
    function addPulseEffect() {
        const badges = document.querySelectorAll('.fan-badge, .match-result');
        badges.forEach(badge => {
            badge.style.animation = 'pulse 2s infinite';
        });
    }

    // Add pulse animation to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    addPulseEffect();
});