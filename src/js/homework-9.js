import { Modal } from "./Modal.js"
import { Form, FormSignUp } from "./Form.js"


const signUpModal = new Modal("sign-up-modal", "sign-up-button");
const signInModal = new Modal("sign-in-modal", "sign-in-button");

const emailForm = new Form("email-form");
const signUpForm = new FormSignUp("sign-up-form");
const signInForm = new Form("sign-in-form");



