//It will give an alert message when form is submitted
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Form submitted successfully!');
    resetForm();
});

// clearing the inputs when form is submitted
function resetForm() {
    document.getElementById('contact-form').reset();
}