// display error message
function displayError(message) {
  document.getElementById("error-message").textContent = message;
}

// clear error message on new action
function clearError() {
  document.getElementById("error-message").textContent = "";
}
