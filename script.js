        // Dark Mode Toggle
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        const body = document.body;

        // Check for saved user preference
        if (localStorage.getItem('theme') === 'dark-mode') {
            body.classList.add('dark-mode');
            darkModeToggle.checked = true;
        }

        // Toggle dark mode
        darkModeToggle.addEventListener('change', function() {
            if (this.checked) {
                body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark-mode');
            } else {
                body.classList.remove('dark-mode');
                localStorage.setItem('theme', '');
            }
        });

        // Mobile Navigation
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Sticky Header
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            header.classList.toggle('scrolled', window.scrollY > 50);
        });

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Back to Top Button
        const backToTopButton = document.querySelector('.back-to-top');

        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
            }
        });

        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Form Submission
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For this example, we'll just log it and show an alert
            console.log({ name, email, subject, message });
            
            alert('Thank you for your message, ' + name + '! I will get back to you soon.');
            contactForm.reset();
        });

        // Resume Download
        document.getElementById('download-resume').addEventListener('click', function(e) {
            e.preventDefault();
            alert('Downloading resume...');
            // In a real implementation, this would trigger a file download
        });

        // Scroll Animation
        const fadeElements = document.querySelectorAll('.fade-in');

        const fadeInOnScroll = function() {
            for (let i = 0; i < fadeElements.length; i++) {
                const element = fadeElements[i];
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementPosition < windowHeight - 100) {
                    element.classList.add('visible');
                }
            }
        };

        // Set current year in footer
        document.getElementById('year').textContent = new Date().getFullYear();

        // Check animations on load and scroll
        window.addEventListener('load', fadeInOnScroll);
        window.addEventListener('scroll', fadeInOnScroll);