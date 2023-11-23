alert('Виконав Могілєй О.Р. гр. 342(а)');

$(function(){

    $('.reg__btn').on('click', function() {
        $('.registration__inner').toggleClass('registration__inner--active')
    });
});
// registration
let login = document.querySelector('#login');
let password = document.querySelector('#password');
let mail = document.querySelector('#mail');
let submit = document.querySelector('#submit');

let users = {};

function User(login, password, mail) {
    this.login = login;
    this.password = password;
    this.mail = mail;
}

function createId(users) {
    return Object.keys(users).length;
}

submit.addEventListener('click', () => {
    const loginUser = login.value.trim();
    const passwordUser = password.value.trim();
    const mailUser = mail.value.trim();

    // Validation
    if (loginUser.length === 0 || passwordUser.length === 0 || mailUser.length === 0) {
        alert('Будь ласка, заповніть усі поля.');
        return;
    }

    if (loginUser.length > 20) {
        alert('Логін задовгий. Максимально дозволено 20 символів.');
        return;
    }
    
    // Check for Cyrillic characters in fields
    if (containsCyrillic(loginUser) || containsCyrillic(passwordUser) || containsCyrillic(mailUser)) {
        alert('Будь ласка, використовуйте лише латинські символи.');
        return;
    }

    // Check if the login already exists
    if (isLoginTaken(loginUser)) {
        alert('Цей логін вже зайнятий. Виберіть інший.');
        return;
    }

    // Password rules
    if (!isPasswordValid(passwordUser)) {
        alert('Пароль має містити принаймні 8 символів, включаючи принаймні одну велику літеру, одну малу літеру та одну цифру.');
        return;
    }

    if (mailUser.length === 0 || !isValidEmail(mailUser)) {
        alert('Будь ласка, введіть дійсну адресу електронної пошти.');
        return;
    }

    const user = new User(loginUser, passwordUser, mailUser);

    const userId = 'User' + createId(users);
    users[userId] = user;

    console.log(users);

    alert(`${loginUser}, реєстрація успішна.`);
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Password validation function
function isPasswordValid(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
}

// Check if the login is already taken
function isLoginTaken(login) {
    return Object.values(users).some(user => user.login === login);
}

// Check if the string contains Cyrillic characters
function containsCyrillic(str) {
    return /[а-яА-ЯЁё]/.test(str);
}