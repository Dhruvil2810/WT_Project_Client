// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Personal Info Form Validation ---
    const infoForm = document.getElementById('personal-info-form');
    const fullNameInput = document.getElementById('fullName');
    const userNameDisplay = document.getElementById('user-name-display'); // To update the profile card

    if (infoForm) {
        infoForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            let isInfoValid = true;

            // Validate Full Name
            if (fullNameInput.value.trim() === '') {
                setError(fullNameInput, 'Full Name is required.');
                isInfoValid = false;
            } else {
                setSuccess(fullNameInput);
            }

            // If form is valid, update the profile card
            if (isInfoValid) {
                // Update the name display in the profile card
                userNameDisplay.textContent = fullNameInput.value.trim();
                
                // Show a success message (you could use a Bootstrap alert here)
                alert('Profile information updated successfully!');
            }
        });
    }

    // --- 2. Change Password Form Validation ---
    const passwordForm = document.getElementById('change-password-form');
    const currentPasswordInput = document.getElementById('currentPassword');
    const newPasswordInput = document.getElementById('newPassword');

    if (passwordForm) {
        passwordForm.addEventListener('submit', function(event) {
            event.preventDefault();

            let isPasswordValid = true;

            // Validate Current Password
            if (currentPasswordInput.value.trim() === '') {
                setError(currentPasswordInput, 'Current Password is required.');
                isPasswordValid = false;
            } else {
                // In a real app, you'd check this against the server
                // For now, just check if it's not empty
                setSuccess(currentPasswordInput);
            }

            // Validate New Password
            if (newPasswordInput.value.trim() === '') {
                setError(newPasswordInput, 'New Password is required.');
                isPasswordValid = false;
            } else if (newPasswordInput.value.trim().length < 8) {
                setError(newPasswordInput, 'Password must be at least 8 characters long.');
                isPasswordValid = false;
            } else {
                setSuccess(newPasswordInput);
            }

            // If all checks pass
            if (isPasswordValid) {
                alert('Password changed successfully!');
                
                // Clear the password form
                passwordForm.reset();
                
                // Remove validation classes
                currentPasswordInput.classList.remove('is-valid', 'is-invalid');
                newPasswordInput.classList.remove('is-valid', 'is-invalid');
            }
        });
    }

    // --- Helper Functions (same as before) ---

    // Function to show an error message
    function setError(input, message) {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        
        const feedback = input.nextElementSibling;
        if (feedback && feedback.classList.contains('invalid-feedback')) {
            feedback.textContent = message;
        }
    }

    // Function to show a success state
    function setSuccess(input) {
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');

        // Clear any error message
        const feedback = input.nextElementSibling;
        if (feedback && feedback.classList.contains('invalid-feedback')) {
            feedback.textContent = '';
        }
    }

});