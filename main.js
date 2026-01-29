// main.js

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameValid = validateName();
    const emailValid = validateEmail();
    const passwordValid = validatePassword();
    const confirmValid = validateConfirmPassword();

    if (nameValid && emailValid && passwordValid && confirmValid) {
        alert("Registration Successful!");
        form.reset();
    }
});

// Real-time validation
nameInput.addEventListener("blur", validateName);
emailInput.addEventListener("keyup", validateEmail);
passwordInput.addEventListener("keyup", validatePassword);
confirmPasswordInput.addEventListener("keyup", validateConfirmPassword);
