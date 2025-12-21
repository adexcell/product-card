import { Modal } from "./Modal.js"
import { Form } from "./Form.js"


const signUpModal = new Modal("sign-up-modal", "sign-up-button");
const signInModal = new Modal("sign-in-modal", "sign-in-button");

const emailForm = new Form("email-form");
const signUpForm = new Form("sign-up-form");
const signInForm = new Form("sign-in-form");

emailForm.form.addEventListener('submit', (event) => {
    if (!emailForm.isValid()) {
        alert("Форма заполнена неверно")
        return
    }

    const values = emailForm.getData()
    if (values.email == '') {
        event.preventDefault()
        console.log("Форма не заполнена");
    }

});

let user;

signUpForm.form.addEventListener('submit', (event) => {
    event.preventDefault()
    user = signUpForm.getData()
    if (user.password !== user.repeatPassword) {
        alert("wrong password")
    }
    user.createdOn = new Date()
    console.log(user)
    signUpModal.close()
})

let currentUser;

signInForm.form.addEventListener('submit', (event) => {
    event.preventDefault()
    const signInUser = signInForm.getData()
    if ((user.login === signInUser.login) && (user.password === signInUser.password)) {
        currentUser = user;
        console.log(currentUser)
        currentUser.lastLogin = new Date()
        alert("Login success!")
        signInModal.close()
    } else {
        alert("Неверный логин или пароль")
    }  
})