document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
      const email = form.email.value;
      const password = form.password.value;
      let isValid = true;
  
      // Remove existing error messages
      clearErrors();
  
      // Email validation
      if (!validateEmail(email)) {
        showError(form.email, "Please enter a valid email address.");
        isValid = false;
      }
  
      // Password validation
      if (password.trim() === "") {
        showError(form.password, "Password cannot be empty.");
        isValid = false;
      }
  
      // Prevent form submission if validation fails
      if (!isValid) {
        event.preventDefault();
      }
    });
  
    // Validate email using a regular expression
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    // Display error message
    function showError(input, message) {
      const errorElement = document.createElement("div");
      errorElement.classList.add("error-message");
      errorElement.textContent = message;
      input.parentNode.insertBefore(errorElement, input.nextSibling);
    }
  
    // Clear all error messages
    function clearErrors() {
      const errorMessages = document.querySelectorAll(".error-message");
      errorMessages.forEach((error) => error.remove());
    }
  });
  