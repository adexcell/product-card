export class Form {
    constructor(form_id) {
        this.form = document.getElementById(form_id); 
        this.button = this.form.querySelector('.button')
    }

    getData() {
        return Object.fromEntries(new FormData(this.form))
    }

    isValid() {
        return this.form.checkValidity()
    }

    reset() {
        this.form.reset();
    }

    initButton() {
        this.button.addEventListener('click')
    }
}
