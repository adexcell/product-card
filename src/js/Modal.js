export class Modal {
    constructor(modalId, buttonId) {
        this.modal = document.getElementById(modalId)
        this.overlay = document.getElementById('overlay')
        const openButton = document.getElementById(buttonId)
        const closeButton = this.modal.querySelector('.close')
        this.#initOpen(openButton)
        this.#initClose(closeButton)
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