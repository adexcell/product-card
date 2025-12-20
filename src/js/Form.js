export class Form {
    constructor(formId) {
        this.form = document.getElementById(formId); 
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
}
