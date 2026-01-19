const modal = document.getElementById("status-modal")
const loadAllCardsBtn = document.getElementById("load-cards-btn")
const delAllCardsBtn = document.getElementById("delete-all-card-btn")
const delCardBtn = document.getElementById("delete-card-btn")

if (localStorage.length === 0) {
	modal.classList.add("modal-showed");
} else {
	modal.classList.remove("modal-showed");
}

let userCards = []

async function getUser() {
	console.log("begin")
	const responce = await fetch('users.json');
	userCards = await responce.json();
	console.log(userCards)
}

function fillLocalStorage() {
	userCards.forEach(card => {
		localStorage.setItem(card.id, card)
	})
}

const userCardTemplate = document.getElementById("user-card-template");
const userCardList = document.getElementById("user-cards-list");

function showUserCards() {
	console.log("cards")
	userCards.forEach(card => {
		const cardClone = userCardTemplate.content.cloneNode(true);
		cardClone.querySelector(".id").textContent = card.id
		cardClone.querySelector(".name").textContent = card.name
		cardClone.querySelector(".surname").textContent = card.surname
		cardClone.querySelector(".email").textContent = card.email
		cardClone.querySelector(".age").textContent = card.age

		userCardList.appendChild(cardClone)
	})
}

getUser()
fillLocalStorage()
showUserCards()
