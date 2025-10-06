document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.form-section form');
    const newsletterForm = document.querySelector('.newsletter-form');
    const newsletterSection = document.querySelector('.newsletter');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const emailInput = contactForm.querySelector('input[type="email"]');
            const nameInput = contactForm.querySelector('input[type="text"]');
            const messageInput = contactForm.querySelector('textarea');

            clearErrors(contactForm);

            let isValid = true;

            if (!emailInput.value.trim()) {
                showError(emailInput, 'Email is required');
                isValid = false;
            } else if (!isValidEmail(emailInput.value)) {
                showError(emailInput, 'Please enter a valid email address');
                isValid = false;
            }

            if (!nameInput.value.trim()) {
                showError(nameInput, 'Name is required');
                isValid = false;
            } else if (nameInput.value.trim().length < 3) {
                showError(nameInput, 'Name must be at least 3 characters');
                isValid = false;
            } else if (/\d/.test(nameInput.value)) {
                showError(nameInput, 'Name cannot contain numbers');
                isValid = false;
            }

            if (!messageInput.value.trim()) {
                showError(messageInput, 'Message is required');
                isValid = false;
            } else if (messageInput.value.trim().length < 10) {
                showError(messageInput, 'Message must be at least 10 characters');
                isValid = false;
            }

            if (isValid) {
                showSuccessMessage(contactForm, 'Thank you! Your message has been sent successfully.');
                contactForm.reset();
            }
        });
    }

    if (newsletterForm && newsletterSection) {
        const newsletterBtn = newsletterForm.querySelector('.btn');
        
        newsletterBtn.addEventListener('click', (e) => {
            e.preventDefault();

            const emailInput = newsletterForm.querySelector('input[type="email"]');

            clearNewsletterMessages();

            let isValid = true;

            if (!emailInput.value.trim()) {
                showNewsletterError('Email is required');
                isValid = false;
            } else if (!isValidEmail(emailInput.value)) {
                showNewsletterError('Please enter a valid email address');
                isValid = false;
            }

            if (isValid) {
                showNewsletterSuccess('Successfully subscribed to our newsletter!');
                emailInput.value = '';
            }
        });
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showError(input, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.color = '#e74c3c';
        errorDiv.style.fontSize = '14px';
        errorDiv.style.marginTop = '5px';
        errorDiv.style.marginBottom = '10px';
        
        input.style.borderColor = '#e74c3c';
        input.parentElement.insertBefore(errorDiv, input.nextSibling);
    }

    function clearErrors(form) {
        const errors = form.querySelectorAll('.error-message');
        errors.forEach(error => error.remove());

        const successMsg = form.querySelector('.success-message');
        if (successMsg) successMsg.remove();

        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.style.borderColor = '';
        });
    }

    function showSuccessMessage(form, message) {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = message;
        successDiv.style.color = '#27ae60';
        successDiv.style.fontSize = '14px';
        successDiv.style.padding = '10px 15px';
        successDiv.style.marginBottom = '10px';
        successDiv.style.backgroundColor = '#d4edda';
        successDiv.style.border = '1px solid #c3e6cb';
        successDiv.style.borderRadius = '5px';
        successDiv.style.textAlign = 'center';
        
        form.insertBefore(successDiv, form.firstChild);

        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    }

    function showNewsletterError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'newsletter-message newsletter-error';
        errorDiv.textContent = message;
        newsletterSection.insertBefore(errorDiv, newsletterForm);
    }

    function showNewsletterSuccess(message) {
        const successDiv = document.createElement('div');
        successDiv.className = 'newsletter-message newsletter-success';
        successDiv.textContent = message;
        newsletterSection.insertBefore(successDiv, newsletterForm);

        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    }

    function clearNewsletterMessages() {
        const messages = newsletterSection.querySelectorAll('.newsletter-message');
        messages.forEach(msg => msg.remove());
    }
});