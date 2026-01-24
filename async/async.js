const modal = document.getElementById("status-modal");
const statusMessage = document.getElementById("status-msg");
const loadAllCardsBtn = document.getElementById("load-cards-btn");

const delAllCardsBtn = document.getElementById("delete-all-card-btn");
const delCardInput = document.getElementById("del-card-input");

const DATA_LOADED = "Данные загружаются...";
const DATA_EMPTY = "Данные отсутствуют.";

const userCardTemplate = document.getElementById("user-card-template");
const userCardList = document.getElementById("user-cards-list");

function showStatusMessage(message) {
  modal.classList.add("modal-showed");
  statusMessage.textContent = message;
}

let userCards = [];

function initUserCards() {
  const saved = localStorage.getItem("userCards");
  userCards = saved ? JSON.parse(saved) : [];
  if (userCards.length === 0) {
    showStatusMessage(DATA_EMPTY);
  } else {
    showUserCards(userCards);
  }
}

async function fetchUsers() {
  try {
    const response = await fetch('users.json');
    if (!response.ok) {
      throw new Error("failed to fetch user data");
    }
    const userCards = await response.json();
    return Array.from(userCards);
  } catch (error) {
    console.log("Ошибка: ", error);
    return [];
  }
}

async function fillLocalStorageByUsers(cards) {
  if (!Array.isArray(cards)) {
    console.error('cards не массив: ', cards);
    return;
  }

  localStorage.setItem("userCards", JSON.stringify(cards));
}

function showUserCards(cards) {
  userCardList.innerHTML = '';
  cards.forEach(card => {
    const cardClone = userCardTemplate.content.cloneNode(true);
    cardClone.querySelector(".id").textContent = card.id;
    cardClone.querySelector(".name").textContent = card.name;
    cardClone.querySelector(".surname").textContent = card.surname;
    cardClone.querySelector(".email").textContent = card.email;
    cardClone.querySelector(".age").textContent = card.age;

    const deleteBtn = cardClone.querySelector(".close-btn");
    deleteBtn.dataset.id = card.id;

    userCardList.appendChild(cardClone);
  })
}

function deleteCard(cardId) {
  userCards = userCards.filter(card => card.id != cardId);
  localStorage.setItem("userCards", JSON.stringify(userCards));

  if (userCards.length === 0) {
    showStatusMessage(DATA_EMPTY);
    localStorage.removeItem("userCards");
  } 

  showUserCards(userCards);
}

async function loadAllCards() {
  try {
    userCards = await fetchUsers();
  
    if (userCards && Array.isArray(userCards)) {
      showStatusMessage(DATA_LOADED);
      setTimeout(async () => {
        await fillLocalStorageByUsers(userCards);
        userCardList.innerHTML = '';
        modal.classList.remove("modal-showed");
        showUserCards(userCards);
      }, 800)
    
    } else {
      console.error('userCards: ', userCards);
    }
  } catch (error) {
    console.log("Ошибка загрузки карточек: ", error);
  }
}

loadAllCardsBtn.addEventListener('click', loadAllCards);

function handleDeleteAllCards() {
  userCardList.innerHTML = '';
  localStorage.removeItem("userCards");
  userCards = [];
  showStatusMessage(DATA_EMPTY);
}

delAllCardsBtn.addEventListener('click', handleDeleteAllCards);

function handleDeleteOne(event) {
  const deleteBtn = event.target.closest('.close-btn');
  if (deleteBtn) {
    deleteCard(deleteBtn.dataset.id);
  }
}

userCardList.addEventListener('click', handleDeleteOne);

initUserCards();
