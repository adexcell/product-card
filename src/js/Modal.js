export class Modal {
    constructor(modal_id, button_id) {
        this.modal = document.getElementById(modal_id)
        this.overlay = document.getElementById('overlay')
        const open_button = document.getElementById(button_id)
        const close_button = this.modal.querySelector('.close')
        this.#initOpen(open_button)
        this.#initClose(close_button)
    }

    open() {
        this.modal.classList.add("modal-showed");
        this.overlay.classList.add("overlay-showed");
    }
    
    close() {
        this.modal.classList.remove("modal-showed");
        this.overlay.classList.remove("overlay-showed")
    }

    isOpen() {
        return this.modal.classList.contains("overlay-show");
    }

    #initOpen(button) {
        button.addEventListener('click', () => {
            this.open()
        })
    }

    #initClose(button) {
        button.addEventListener('click', () => {
            this.close()
        })
        
        this.overlay.addEventListener('click', () => {
            this.close()
        })
    }
}