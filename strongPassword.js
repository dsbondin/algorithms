// Strong password:
// has at least 6 characters
// contains at least one digit,
// contains at least one lowercase English character,
// contains at least one uppercase English character,
// contains at least one special character.

// Write a function that takes a password and returns the number of characters that need to be added to make it strong

const numbers = "0123456789"
const lower_case = "abcdefghijklmnopqrstuvwxyz"
const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const special_characters = "!@#$%^&*()-+"

function minimumNumber(password) {
    let hash = {};
    for (let i = 0; i < password.length; i++) {
        if (numbers.includes(password[i])) hash[numbers] = true;
        if (lower_case.includes(password[i])) hash[lower_case] = true;
        if (upper_case.includes(password[i])) hash[upper_case] = true;
        if (special_characters.includes(password[i])) hash[special_characters] = true;
    }

    let count = Object.keys(hash).length
    return Math.max(6 - password.length, 4 - count)
}
