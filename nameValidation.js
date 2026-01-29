// nameValidation.js

function validateName() {
    if (nameInput.value.trim() === "") {
        showError(nameInput, "Name is required");
        return false;
    }
    showSuccess(nameInput);
    return true;
}
