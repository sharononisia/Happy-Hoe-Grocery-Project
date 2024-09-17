document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
  
    form.addEventListener('submit', function (e) {
      let valid = true;
      
      // Reset error messages and styles
      emailError.textContent = '';
      passwordError.textContent = '';
      emailInput.classList.remove('error');
      passwordInput.classList.remove('error');
  
      // Validate email
      const emailValue = emailInput.value.trim();
      if (!emailValue) {
        emailError.textContent = 'Email is required';
        emailInput.classList.add('error');
        valid = false;
      } else if (!validateEmail(emailValue)) {
        emailError.textContent = 'Please enter a valid email address';
        emailInput.classList.add('error');
        valid = false;
      }
  
      // Validate password
      const passwordValue = passwordInput.value.trim();
      if (!passwordValue) {
        passwordError.textContent = 'Password is required';
        passwordInput.classList.add('error');
        valid = false;
      } else if (passwordValue.length < 5) {
        passwordError.textContent = 'Password must be at least 5 characters long';
        passwordInput.classList.add('error');
        valid = false;
      }
  
      // Prevent form submission if validation fails
      if (!valid) {
        e.preventDefault();
      } else {
        // Show success pop-up
        alert('Form submitted successfully!');
      }
    });
  
    // Email validation helper function
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    }
  });
  