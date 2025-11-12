// 3. Создайте объект на основе ваших данных. Имя, фамилия, почта, работа, должность, возраст, страна,
// город, статус отношений и так далее. Чем больше - тем лучше (но не увлекайтесь, до 10 максимум).
// Подберите правильное название для переменной.

const student = {
    name: "John",
    lastName: "Doe",
    age: 30,
    email: "johndoe@gmail.com",
    job: "Horns and hooves",
    position: "frontend developer",
    country: "USA",
    city: "New York",
}

// 4. Создайте объект, который будет хранить данные об автомобиле (марка, модель, год выпуска, цвет, вид коробки).
// Добавьте дополнительное свойство - владелец авто, значением которого будет объект, описанный в пункте №3.
// Желательно добавлять отдельной строкой (имеется ввиду не при создании объекта)

const car = {
    brand: "Hyundai", 
    model: "Creta",
    yearOfManufacture: 2025,
    color: "black",
    transmission: "Automatic",
}

car.owner = student
console.log(car)

// 5. Написать функцию которая аргументом будет принимать объект, описанный в пункте №4.
// Она проверяет, есть ли в объекте свойство "максимальная скорость",
// если нет - добавляет его и задает значение, если есть - прекращает выполнение (ничего не делает)

const setMaxSpeed = obj => {
    if ('maxSpeed' in obj) {
        return
    } else {
        obj["maxSpeed"] = 200
    }
}

setMaxSpeed(car)
console.log(car)

// 6. Написать функцию, которая получает первым аргументом  — объект, а вторым аргументом — свойство объекта,
// которое нужно вывести и выводит его значение.

const showObjProperty = (obj, property) => {
    if (obj.hasOwn(property)) {
        console.log(obj[property])
    } else {
        console.log(`object ${obj} hasn't property ${property}`)
    }
}

// 7. Создать массив, который содержит названия продуктов (просто строки)

const products = ["apple", "banana", "meat", "milk"]

// 8. Создать массив, состоящий из объектов, где объект представляет собой книгу
// (название, автор, год выпуска, цвет обложки, жанр) (3-5 книг).
// После, используя известный нам метод массив, добавить еще одну книгу в конец списка.
// Можете заменить книги на фильмы, или другую сущность, идею вы поняли.

const books = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        year: 1937,
        coverColor: "Green",
        genre: "Fantasy"
    },
    {
        title: "Murder on the Orient Express",
        author: "Agatha Christie",
        year: 1934,
        coverColor: "Red",
        genre: "Mystery"
    },
    {
        title: "Dune",
        author: "Frank Herbert",
        year: 1965,
        coverColor: "Orange",
        genre: "Science Fiction"
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
        coverColor: "White",
        genre: "Romance"
    },
]

const anotherBook = [
    {
        title: "The Shining",
        author: "Stephen King",
        year: 1977,
        coverColor: "Blue",
        genre: "Horror"
    },
]

books.push(anotherBook)

// 9. Создать еще один массив, состоящих из тех же книг, но относящийся к определенной вселенной
// (Гарри Поттер, Марвел и так далее). (Если используете другую, свою сущность - импровизируйте).
// С помощью известного нам метода массива или оператора (рекомендую использовать оператор), объединить
// эти два массива в один

const moreBooks = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        coverColor: "Gold",
        genre: "Classic"
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        year: 1997,
        coverColor: "Scarlet",
        genre: "Fantasy"
    },
    {
        title: "The Martian",
        author: "Andy Weir",
        year: 2011,
        coverColor: "Black",
        genre: "Science Fiction"
    },
    {
        title: "Gone Girl",
        author: "Gillian Flynn",
        year: 2012,
        coverColor: "Dark Blue",
        genre: "Thriller"
    },
    {
        title: "The Da Vinci Code",
        author: "Dan Brown",
        year: 2003,
        coverColor: "Brown",
        genre: "Mystery"
    }
];

const allBooks = [...books, ...moreBooks]

// 10. Почитать про метод массива — forEach. Написать функцию, которая принимает массив сущностей с задания №9.
// Добавляем новое свойство для объекта "isRare (это редкий)" и в зависимости от года выпуска книги
// (или какой-то логики, связанной с вашей сущностью), устанавливаем true или false.
// Что я хочу этим сказать: если книга выпущена позже 2000 года, устанавливаем true (да, это редкий),
// нет - false (значит это не редкий).

const markRareBooks = array => {
    array.forEach(obj => {
        if (obj.year > 2000) {
            obj.isRare = true
        } else {
            obj.isRare = false
        }
    })
}

markRareBooks(allBooks)
console.log(allBooks)