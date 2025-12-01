import { productCards } from './product-cards.js'


const productCardTemplate = document.getElementById('product-card-template');
const productCardList = document.getElementById('product-cards-list');

const stringProductCardNames = productCards.reduce((accum, card) => {
   accum.push(card.name)
   return accum
},[]).join("; ")

// console.log(stringProductCardNames)

const productNamesAndDescriptions = productCards.reduce((accum, card) => {
    const name = card.name
    const description = card.description
    accum.push({[name]: description})
    return accum
},[])

// console.log(productNamesAndDescriptions)

function showProductCards() {
    // let count = prompt("Сколько карточек отобразить? Введите число от 1 до 5");

    // if (isNaN(count) || (parseInt(count) < 1 || parseInt(count) > 5)) {
    //     alert("Число должно быть от 1 до 5!")
    //     return
    // }

    productCards.forEach(card => {
        const cardClone = productCardTemplate.content.cloneNode(true);

        cardClone.querySelector('.product-image').src = `/src/images/${card.img}.png`
        cardClone.querySelector('.product-image').width = 290
        cardClone.querySelector('.product-image').height = 245
        cardClone.querySelector('.product-image').alt = card.name
        cardClone.querySelector('.product-category').textContent = card.category
        cardClone.querySelector('.product-name').textContent = card.name
        cardClone.querySelector('.product-description').textContent = card.description

        const ingredients = card.ingredients;
        const productContains = cardClone.querySelector('.product-contains');
        ingredients.forEach(ingredient => {
            const ingredientClone = document.createElement("li");
            ingredientClone.textContent = ingredient
            productContains.appendChild(ingredientClone)
        })
        
        cardClone.querySelector('.price-value').innerHTML = `${card.price} &#8381;`
        productCardList.appendChild(cardClone)
    })
} 



showProductCards()