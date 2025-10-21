// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Animate hero section elements
    const heroTitle = document.querySelector('h1');
    const heroSubtitle = document.querySelector('.hero p');
    const heroButtons = document.querySelectorAll('.hero a');
    
    if (heroTitle) heroTitle.classList.add('fade-in');
    if (heroSubtitle) heroSubtitle.classList.add('fade-in', 'delay-100');
    heroButtons.forEach((btn, index) => {
        btn.classList.add('fade-in', `delay-${(index + 2) * 100}`);
    });
    
    // Initialize menu filtering
    const filterButtons = document.querySelectorAll('.menu-filter button');
    if (filterButtons) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('bg-primary', 'text-white'));
                // Add active class to clicked button
                this.classList.add('bg-primary', 'text-white');
                // Filter menu items (simplified example)
                const category = this.textContent.trim();
                console.log(`Filtering by: ${category}`);
                // In a real app, you would filter and display only relevant items
            });
        });
    }
    
    // Initialize date picker for reservation form
    const dateInput = document.getElementById('date');
    if (dateInput) {
        // Set min date to today
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        dateInput.min = `${yyyy}-${mm}-${dd}`;
        
        // Set a default date (today + 2 days)
        const defaultDate = new Date();
        defaultDate.setDate(defaultDate.getDate() + 2);
        const defaultDD = String(defaultDate.getDate()).padStart(2, '0');
        const defaultMM = String(defaultDate.getMonth() + 1).padStart(2, '0');
        const defaultYYYY = defaultDate.getFullYear();
        dateInput.value = `${defaultYYYY}-${defaultMM}-${defaultDD}`;
    }
    
    // Form submission handling
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real app, you would handle form submission here
            console.log('Form submitted');
            // Show success message
            alert('Your request has been submitted successfully!');
        });
    });
});