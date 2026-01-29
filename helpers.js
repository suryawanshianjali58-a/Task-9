// helpers.js

function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group error";
    formGroup.querySelector("small").innerText = message;
}

function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group success";
    formGroup.querySelector("small").innerText = "";
}
