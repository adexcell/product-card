export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.handleCloseModal = this.close.bind(this);
    this.closeButton = this.modal.querySelector('#modal-close-button')
    this.#initOpen(buttonId);
    
  }

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
    this.#initClose(this.shouldCloseOnOverlay);
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
    this.closeButton.removeEventListener('click', this.handleCloseModal)
    this.overlay.removeEventListener('click', this.handleCloseModal)
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
      this.open();
    })
  }

  #initClose(shouldCloseOnOverlay) {
    this.closeButton.addEventListener('click', this.handleCloseModal)

    if (shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.handleCloseModal)
    } 
  }
}
