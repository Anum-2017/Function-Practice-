"use strict";
// validate Password
function validateStrongPassword(password) {
    // Check if password length is at least 8 characters
    if (password.length < 8) {
        return false;
    }
    // Check if password contains at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        return false;
    }
    // Check if password contains at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        return false;
    }
    // Check if password contains at least one digit
    if (!/\d/.test(password)) {
        return false;
    }
    // Check if password contains at least one special character
    if (!/[$@$!%*?&]/.test(password)) {
        return false;
    }
    return true;
}
const password = "Pass@1234";
const isValid = validateStrongPassword(password);
console.log(`Is password "${password}" valid? ${isValid}`);
