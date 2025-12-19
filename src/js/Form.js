export class Form {
    constructor(form_id) {
        this.form = document.getElementById(form_id); 
        this.inputList = Array.from(this.form.querySelectorAll('.form_input'))
        this.button = this.form.querySelector('.button')
        this.data = this.getData()
        
    }

    getData() {
        let data;
        this.form.addEventListener('submit', (event) => {
            event.preventDefault()
            const formData = new FormData(event.target);
            data = Object.fromEntries(formData.entries());
        })
        return data
    }

    isValidity() {
        return this.inputList.every((input) => input.checkValidity())
    }

    reset() {
        this.form.reset();
    }
}

export class FormSignUp extends Form {
    constructor(form_id) {
        super(form_id)
    }

    checkPasswords() {
        if (this.data.password !== this.data.repeatPassword) {
            alert("wrong password")
        }
        this.data.createdOn = new Date()
        console.log(this.data)
    }
}

