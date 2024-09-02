function validateForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var branch = document.getElementById('branch').value;
    var role = document.getElementById('role').value;

    // Validate first name and last name (should not contain numbers)
    var namePattern = /^[a-zA-Z]+$/;
    if (!namePattern.test(username)) {
        alert("User name must contain only letters.");
        return false;
    }

    // Validate email format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate password length (minimum 6 characters)
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    // Ensure all required fields are filled
    if (username == "" || email == "" || password == "" || branch == "" || role == "") {
        alert("Please fill out all fields.");
        return false;
    }

    return true; // Form is valid
} signup