

function checkInputs() {
    
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const email = document.getElementById('email');
    const password2 = document.getElementById('check-password');

    

    const usernamevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();
    const password2value = password2.value.trim();


    if (usernamevalue === '') {
        
        setErrorFor(username , 'Username cannot be blank');


    } else {
        
        setSuccessFor(username);
    }


    if (emailvalue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailvalue)) {

        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

    if (passwordvalue === '') {
        setErrorFor(password, 'password cannot be blank');
    } else {
        setSuccessFor(password);
    }
    if (password2value === '') {
        setErrorFor(password2, 'password2 cannot be blank');
    } else if (passwordvalue !== password2value) {
        setErrorFor(password2, 'password does not match');
    } else {
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form.controll
    const small = formControl.querySelector('small');


    small.innerText = message;


    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}















































