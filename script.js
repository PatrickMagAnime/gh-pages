document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

/* Contact Form Submission (Dummy Implementation) */
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! Thank you for contacting me.');
});
