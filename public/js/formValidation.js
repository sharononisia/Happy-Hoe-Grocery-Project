const email = document.getElementById("email");
const password = document.getElementById("password");

let error = 0
const formValidation = (event) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailError = document.getElementById('emailError');
    if (email.value == '') {
        email.style.border = '1px solid red';
        emailError.textContent = 'Please enter an email address';
        emailError.style = 'color:red'
        error++//value of error is increased by 1
    }
    else if (!email.value.match(emailRegex)) {
        email.style.border = '1px solid red';
        emailError.textContent = 'Please enter a valid email address';
        emailError.style = 'color:red'
        error++ //value of error is increased by 1
    }
    else {
        email.style.border = '1px solid green';
        emailError.textContent = '';
    }
    if (password.value == '') {
        password.style.border = '1px solid red';
        passwordError.textContent = 'Please enter a password';
        passwordError.style = 'color:red'
        error++//value of error is increased by 1
    }
    else if (password.value.length < 6) {
        password.style.border = '1px solid red';
        passwordError.textContent = 'Password should be at least 6 characters';
        passwordError.style = 'color:red'
        error++ //value of error is increased by 1
    }
    else {
        password.style.border = '1px solid green';
        passwordError.textContent = '';
    }}