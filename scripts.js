        // Luxury Loading Experience
        window.addEventListener('load', function() {
            setTimeout(function() {
                document.getElementById('luxuryLoader').classList.add('hidden');
                
                // Start the hero content reveal after loader disappears
                setTimeout(function() {
                    document.querySelector('.hero-content').classList.add('luxury-reveal');
                }, 500);
            }, 5000); // 5 seconds luxury loading
        });

        // Luxury Scroll Reveal System
        const luxuryObserverOptions = {
            threshold: 0.05,
            rootMargin: '0px 0px -100px 0px'
        };

        const luxuryObserver = new IntersectionObserver(function(entries) {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Staggered luxury reveal
                    setTimeout(() => {
                        entry.target.classList.add('active');
                        
                        // Special handling for skills section
                        if (entry.target.classList.contains('skills')) {
                            const title = entry.target.querySelector('h2');
                            const cards = entry.target.querySelectorAll('.skill-card');
                            
                            setTimeout(() => {
                                title.classList.add('luxury-revealed');
                            }, 800);
                            
                            cards.forEach((card, cardIndex) => {
                                setTimeout(() => {
                                    card.classList.add('luxury-card-reveal');
                                }, 1500 + (cardIndex * 400));
                            });
                        }
                    }, index * 200);
                }
            });
        }, luxuryObserverOptions);

        document.querySelectorAll('.scroll-animate').forEach(el => {
            luxuryObserver.observe(el);
        });

        // Smooth scrolling with luxury easing
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                
                // Luxury smooth scroll
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });

        // Luxury Header Transform
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.style.background = 'rgba(0, 0, 0, 0.98)';
                header.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.5)';
                header.style.backdropFilter = 'blur(30px)';
                header.style.transform = currentScroll > lastScroll ? 'translateY(-100%)' : 'translateY(0)';
            } else {
                header.style.background = 'rgba(0, 0, 0, 0.9)';
                header.style.boxShadow = 'none';
                header.style.transform = 'translateY(0)';
            }
            
            lastScroll = currentScroll;
        });

        // Luxury Parallax for floating elements
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelectorAll('.floating-element');
            
            parallax.forEach((element, index) => {
                const speed = 0.3 + (index * 0.1);
                const rotation = scrolled * 0.05 * (index + 1);
                element.style.transform = `translateY(${scrolled * speed}px) rotate(${rotation}deg) scale(${1 + Math.sin(scrolled * 0.01) * 0.1})`;
            });
        });

        // Luxury Skill Cards Interaction
        document.querySelectorAll('.skill-card').forEach((card, index) => {
            card.addEventListener('mouseenter', function() {
                this.style.background = 'rgba(255, 255, 255, 0.25)';
                this.style.borderColor = '#06ffa5';
                this.style.transform = 'translateY(-20px) scale(1.08) rotateX(5deg)';
                this.style.boxShadow = '0 40px 80px rgba(131, 56, 236, 0.6)';
                
                // Ripple effect
                const ripple = document.createElement('div');
                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(6, 255, 165, 0.3);
                    transform: scale(0);
                    animation: ripple 0.8s linear;
                    pointer-events: none;
                    width: 100px;
                    height: 100px;
                    left: 50%;
                    top: 50%;
                    margin-left: -50px;
                    margin-top: -50px;
                `;
                
                this.style.position = 'relative';
                this.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 800);
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.background = 'rgba(255, 255, 255, 0.1)';
                this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                this.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
                this.style.boxShadow = '0 10px 30px rgba(131, 56, 236, 0.2)';
            });
        });

        // Luxury Dynamic Title
        let titleText = "Dimitri Blanchard - Génie ✨ ";
        let titleIndex = 0;
        
        setInterval(() => {
            titleIndex = (titleIndex + 1) % titleText.length;
            document.title = titleText.substring(titleIndex) + titleText.substring(0, titleIndex);
        }, 300);

        // Add ripple animation keyframe
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
