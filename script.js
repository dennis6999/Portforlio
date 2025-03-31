// JavaScript for Tab Functionality
const tabs = document.querySelectorAll('.tab');
const skillCards = document.querySelectorAll('.skill-card');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        // Add active class to the clicked tab
        tab.classList.add('active');

        // Get the category of the clicked tab
        const category = tab.getAttribute('data-category');

        // Show only the skill cards that match the category
        skillCards.forEach(card => {
            if (card.getAttribute('data-category') === category || category === 'all') {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
    });
});

// Set default active tab and cards
document.querySelector('.tab.active').click();

function createCircularChart(canvasId, percentage) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [percentage, 100 - percentage],
                backgroundColor: ['#f9a825', '#333'], // Primary and background colors
                borderWidth: 0
            }]
        },
        options: {
            cutout: '80%', // Creates the circular "donut" effect
            responsive: true,
            plugins: {
                legend: { display: false }, // Hides the legend
                tooltip: { enabled: false } // Disables tooltips
            }
        }
    });
}

// Create charts for each skill
createCircularChart('htmlChart', 95);
createCircularChart('cssChart', 90);
createCircularChart('jsChart', 85);
createCircularChart('reactChart', 80);

// JavaScript for Navbar Toggle
const navToggle = document.querySelector('.nav-toggle');
const navbar = document.querySelector('.navbar');

navToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});