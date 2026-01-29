// otherValidations.js

function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {
        showError(emailInput, "Email is required");
        return false;
    } 
    else if (!emailPattern.test(emailInput.value)) {
        showError(emailInput, "Invalid email format");
        return false;
    }

    showSuccess(emailInput);
    return true;
}

function validatePassword() {
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (passwordInput.value === "") {
        showError(passwordInput, "Password is required");
        return false;
    } 
    else if (!passwordPattern.test(passwordInput.value)) {
        showError(
            passwordInput,
            "Password must be 8 characters long, include one number and one uppercase letter"
        );
        return false;
    }

    showSuccess(passwordInput);
    return true;
}

function validateConfirmPassword() {
    if (confirmPasswordInput.value === "") {
        showError(confirmPasswordInput, "Confirm password is required");
        return false;
    } 
    else if (confirmPasswordInput.value !== passwordInput.value) {
        showError(confirmPasswordInput, "Passwords do not match");
        return false;
    }

    showSuccess(confirmPasswordInput);
    return true;
}
