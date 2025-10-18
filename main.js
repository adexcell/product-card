// Покраска одной карточки
const productCard = document.querySelector('.card-container');
const changeCardColorButton = document.querySelector('#change-card-color-button');
const blueColorHash = '#42b0ecff';


changeCardColorButton.addEventListener('click', () => {
    productCard.style.background = blueColorHash;
})


// Покраска всех карточек
const productCardList = document.querySelectorAll('.card-container');
const changeCardListColorButton = document.querySelector('#change-card-list-color-button');
const greenColorHash = '#6ad26ac5';

changeCardListColorButton.addEventListener('click', () => {
    productCardList.forEach((card) => card.style.background = greenColorHash);
})


// Redirect to Google
const redirectToGoogleButton = document.querySelector('#redirect-to-google');
const googleURL = 'https://google.com';

redirectToGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
    const answer = confirm('Вы действительно хотите открыть Google?')

    if (answer === true) {
        window.open(googleURL)
    } else {
        return;
    }
}


// Вывод консоль лог
const outputLogButton = document.querySelector('#output-console-log')

outputLogButton.addEventListener('click', () => outputConsoleLog('дз №4'))

function outputConsoleLog(message) {
    alert(message)
    console.log(message)
}


// Вывод сообщения в консоль при наведении на заголовок
const titleEL = document.querySelector('.title')


titleEL.addEventListener('mouseover', () => {
    console.log(titleEL.textContent);
})


// Кнопка, меняющая себе цвет
const changeOwnColorButton = document.getElementById('change-own-color')


changeOwnColorButton.addEventListener('click', () => {
    changeOwnColorButton.classList.toggle('button-new-color')
})

