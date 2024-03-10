document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'

            
        });
    });
});


document.getElementById('contact-btn').addEventListener('click', function() {
    document.getElementById('contact-form-popup').classList.remove('hidden');
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('contact-form-popup').classList.add('hidden');
});

// Optional: Add functionality to prevent form submit for demonstration
document.getElementById('contact-form').addEventListener('submit', function(event) {
    alert('Form submitted!');
    event.preventDefault(); // Prevent actual submit
    document.getElementById('contact-form-popup').classList.add('hidden');
});
