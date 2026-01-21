const modal = document.getElementById("status-modal")
const statusMessage = document.getElementById("status-msg")
const loadAllCardsBtn = document.getElementById("load-cards-btn")

const delAllCardsBtn = document.getElementById("delete-all-card-btn")
const delCardInput = document.getElementById("del-card-input")
const delCardBtn = document.getElementById("delete-card-btn")

const DATA_LOADED = "Данные загружаются...";
const DATA_EMPTY = "Данные отсутствуют."

const userCardTemplate = document.getElementById("user-card-template");
const userCardList = document.getElementById("user-cards-list");

function showStatusMessage(message) {
	modal.classList.add("modal-showed")
	statusMessage.textContent = message
}

let userCards = []

if (localStorage.length === 0) {
  showStatusMessage(DATA_EMPTY)
} else {
	for (let i = 0; i < localStorage.length; i++) {
		userCards.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
	}
	showUserCards(userCards)
}

async function fetchUsers() {
	try {
		const response = await fetch('users.json');
		if (!response.ok) throw new Error("failed to fetch user data");
  	const userCards = await response.json();
  	return Array.from(userCards);
	} catch (error) {
		console.log("Ошибка: ", error)
		return []
	} 
}

async function fillLocalStorage(cards) {
	if (!Array.isArray(cards)) {
		console.error('cards не массив: ', cards);
		return
	}

	cards.forEach(card => {
      localStorage.setItem(card.id, JSON.stringify(card));
		})
}

function showUserCards(cards) {
	cards.forEach(card => {
		const cardClone = userCardTemplate.content.cloneNode(true);
		cardClone.querySelector(".id").textContent = card.id
		cardClone.querySelector(".name").textContent = card.name
		cardClone.querySelector(".surname").textContent = card.surname
		cardClone.querySelector(".email").textContent = card.email
		cardClone.querySelector(".age").textContent = card.age

		userCardList.appendChild(cardClone)
	})
}

loadAllCardsBtn.addEventListener('click', async () => {
	try {
		userCards = await fetchUsers()
		
		if (userCards && Array.isArray(userCards)) {
			showStatusMessage(DATA_LOADED)
			setTimeout(async () => {
				await fillLocalStorage(userCards)
				modal.classList.remove("modal-showed");
				showUserCards(userCards)
			},3000)
			
		} else {
			console.error('userCards: ', userCards)
		}
	} catch (error) {
		console.log("Ошибка загрузки карточек: ", error)
	}
});

delAllCardsBtn.addEventListener('click', () => {
	userCardList.innerHTML = '';
	localStorage.clear()
	userCards = [];
	showStatusMessage(DATA_EMPTY)
})

delCardBtn.addEventListener('click', () => {
	const cardID = parseInt(delCardInput.value)

	if (!cardID || cardID < 1) {
		alert("Введите ID от 1 до 5")
		return
	}

	const cardData = localStorage.getItem(cardID)
	if (!cardData) {
		alert(`Карточка ID=${cardID} не найдена`)
		return
	}

	localStorage.removeItem(cardID);
	userCardList.innerHTML = '';
	userCards = userCards.filter(card => card.id != cardID)
	showUserCards(userCards)
	if (userCardList.children.length === 0) {
		showStatusMessage(DATA_EMPTY)
	}
})
