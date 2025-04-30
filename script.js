// Noir Author Website - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Navigation menu toggle for mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Header scroll effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
            header.style.padding = '1rem 2rem';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.9)';
            header.style.padding = '1.5rem 2rem';
        }
    });
    
    // Book cover hover effect
    const bookCovers = document.querySelectorAll('.book-cover img');
    
    bookCovers.forEach(cover => {
        cover.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.7)';
        });
        
        cover.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.5)';
        });
    });
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                // This would normally send the data to a server
                // For now, we'll just show a success message
                this.innerHTML = '<p class="success-message">Thank you for subscribing! Check your email for your free noir short story.</p>';
            }
        });
    }
    
    // Add film grain effect to the page
    addFilmGrainEffect();
});

// Function to add a subtle film grain effect
function addFilmGrainEffect() {
    const filmGrain = document.createElement('div');
    filmGrain.classList.add('film-grain');
    document.body.appendChild(filmGrain);
    
    // Add the CSS for the film grain
    const style = document.createElement('style');
    style.textContent = `
        .film-grain {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            opacity: 0.05;
            z-index: 2000;
            background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1IiBkPSJNMCAwaDMwMHYzMDBIMHoiLz48L3N2Zz4=');
        }
    `;
    document.head.appendChild(style);
}
