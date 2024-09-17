document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signupForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const role = document.getElementById('role');
    const branch = document.getElementById('branch');
    const password = document.getElementById('password');
  
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const roleError = document.getElementById('roleError');
    const branchError = document.getElementById('branchError');
    const passwordError = document.getElementById('passwordError');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent form from submitting by default
      let valid = true;
  
      // Reset error and success classes
      clearValidation();
  
      // Validate username
      if (username.value.trim() === '') {
        usernameError.textContent = 'Username is required';
        username.classList.add('error');
        valid = false;
      } else {
        username.classList.add('success');
      }
  
      // Validate email
      const emailValue = email.value.trim();
      if (emailValue === '') {
        emailError.textContent = 'Email is required';
        email.classList.add('error');
        valid = false;
      } else if (!validateEmail(emailValue)) {
        emailError.textContent = 'Please enter a valid email address';
        email.classList.add('error');
        valid = false;
      } else {
        email.classList.add('success');
      }
  
      // Validate role
      if (role.value === '') {
        roleError.textContent = 'Please select your role';
        role.classList.add('error');
        valid = false;
      } else {
        role.classList.add('success');
      }
  
      // Validate branch
      if (branch.value === '') {
        branchError.textContent = 'Please select your branch';
        branch.classList.add('error');
        valid = false;
      } else {
        branch.classList.add('success');
      }
  
      // Validate password
      if (password.value.trim() === '') {
        passwordError.textContent = 'Password is required';
        password.classList.add('error');
        valid = false;
      } else if (password.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        password.classList.add('error');
        valid = false;
      } else {
        password.classList.add('success');
      }
  
      // If form is valid, show success message and submit the form
      if (valid) {
        alert('Signed up successfully!');
        form.submit(); // Submit the form if valid
      }
    });
  
    // Function to validate email format
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    }
  
    // Function to reset all error/success states
    function clearValidation() {
      usernameError.textContent = '';
      emailError.textContent = '';
      roleError.textContent = '';
      branchError.textContent = '';
      passwordError.textContent = '';
  
      username.classList.remove('error', 'success');
      email.classList.remove('error', 'success');
      role.classList.remove('error', 'success');
      branch.classList.remove('error', 'success');
      password.classList.remove('error', 'success');
    }
  });
  