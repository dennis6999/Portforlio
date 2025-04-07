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
            
            // Create form data object
            const formData = {
                name: name,
                email: email,
                subject: subject,
                message: message
            };
            
            // Send data to Formspree
            fetch('https://formspree.io/f/mkgjqqbl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => {
                if (response.ok) {
                    // Show success message
                    showSuccessMessage(name);
                    // Reset form
                    contactForm.reset();
                } else {
                    // Show error message
                    showErrorMessage();
                }
            })
            .catch(error => {
                console.error('Error:', error);
                showErrorMessage();
            });
        });
        
        // Function to show success message
        function showSuccessMessage(name) {
            // Create success message element
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = `
                <div class="success-content">
                    <i class="fas fa-check-circle"></i>
                    <h3>Thank you, ${name}!</h3>
                    <p>Your message has been sent successfully. I'll get back to you soon.</p>
                    <button class="btn close-message">Close</button>
                </div>
            `;
            
            // Add to body
            document.body.appendChild(successMessage);
            
            // Add active class after a small delay for animation
            setTimeout(() => {
                successMessage.classList.add('active');
            }, 10);
            
            // Add event listener to close button
            successMessage.querySelector('.close-message').addEventListener('click', () => {
                successMessage.classList.remove('active');
                setTimeout(() => {
                    successMessage.remove();
                }, 300);
            });
        }
        
        // Function to show error message
        function showErrorMessage() {
            // Create error message element
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.innerHTML = `
                <div class="error-content">
                    <i class="fas fa-exclamation-circle"></i>
                    <h3>Oops! Something went wrong</h3>
                    <p>There was a problem sending your message. Please try again later.</p>
                    <button class="btn close-message">Close</button>
                </div>
            `;
            
            // Add to body
            document.body.appendChild(errorMessage);
            
            // Add active class after a small delay for animation
            setTimeout(() => {
                errorMessage.classList.add('active');
            }, 10);
            
            // Add event listener to close button
            errorMessage.querySelector('.close-message').addEventListener('click', () => {
                errorMessage.classList.remove('active');
                setTimeout(() => {
                    errorMessage.remove();
                }, 300);
            });
        }

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