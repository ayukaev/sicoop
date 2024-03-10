// Get the modal
var modal = document.getElementById('contactModal');

// Get the button that opens the modal
var btn = document.getElementById('contactBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Optional: Listen for a submit event on your form
// This example assumes you want to do something when the form is submitted, like logging input or preparing to send an email
var form = document.getElementById('contactForm');
form.onsubmit = function(event) {
    // Prevent the form from submitting the traditional way
    event.preventDefault();
    
    // Example: log the name and email
    console.log("Name:", form.name.value);
    console.log("Email:", form.email.value);
    console.log("Message:", form.message.value);

    // Here you can add what you want to do with the form data, like sending an email

    // Close the modal after form submission or show a message
    // modal.style.display = "none";
    // Optionally, display a thank-you message or reset the form fields
};

// Any additional JavaScript functionality can go here
