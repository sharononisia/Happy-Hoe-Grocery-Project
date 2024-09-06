function validateForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var branch = document.getElementById('branch').value;
    var role = document.getElementById('role').value;

    // Validate user name (should not contain numbers)
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





// const signup= document.querySelector(".register-btn");

// signup.addEventListener("click", (event)=> {
// event.preventDefault();

// const username = document.getElementById("username");
// const email = document.getElementById("email");
// const branch = document.getElementById("branch");
// const password = document.getElementById("password");

// if (!username){
//     alert("Please enter your username");
//     return;
// }

// if (!email){
//     alert("Please enter your email");
//     return;
// }
// if(!ValidateEmail(email)){
//     alert("Please enter a valid email address");
//     return;
// }

// if (!password){
//     alert("Please enter your password");
//     return;
// }
// if (!validatePassword(password)){
//     alert("Please enter a valid password. It should be at least 8 characters long and contain a combination of uppercase letters, lowercase letters, numbers, and special characters");
//     return;
// }
// function validateEmail(email) {
//     const re =/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
//     return re.test(email);
// }

// function validatePassword(password) {
//     const re = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/;
//     return re.test(password);
// }



// });