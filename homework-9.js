// #4

const emailForm = document.getElementById('email-form')
emailForm.addEventListener('submit', (event) => {
    event.defaultPrevented()
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    if (!data.email) {
        event.preventDefault();
        console.log("email пустой")
    }
    console.log(data)
})


// #5
const signUpWrapper = document.getElementById('sign-up-wrapper');
const signInWrapper = document.getElementById('sign-in-wrapper');

const signUpButton = document.getElementById('sign-up-button');
const signInButton = document.getElementById('sign-in-button');

const closeSUButton = document.getElementById('close-sign-up-form');
const closeSIButton = document.getElementById('close-sign-in-form');

signUpButton.onclick = () => {
    signUpWrapper.style.display = "block";
}

signInButton.onclick = () => {
    signInWrapper.style.display = "block";
}

closeSUButton.onclick = () => {
    signUpWrapper.style.display = "none";
}

closeSIButton.onclick = () => {
    signInWrapper.style.display = "none";
}


const signUpForm = document.getElementById('sign-up-form');
const signInForm = document.getElementById('sign-in-form');

// #6

let user = undefined

signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    user = Object.fromEntries(formData.entries());
    if (user.password !== user.repeatPassword) {
        alert("wrong password")
    }
    user.createdOn = new Date()
    console.log(user)
})

let currentUser = undefined;

signInForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    authData = Object.fromEntries(formData.entries());
    if ((user.login === authData.login) && (user.password === authData.password)) {
        signInWrapper.style.display = "none";
        currentUser = user;
        console.log(currentUser)
        currentUser.lastLogin = new Date()
        alert("Login success!")
    } else {
        alert("Неверный логин или пароль")
    }   
})


