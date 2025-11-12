// 2. Создать массив чисел от 1 до 10. Отфильтровать его таким образом,
// что бы мы получил массив чисел, начиная с 5.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newArray = array.filter(number => (number >= 5))
// console.log(newArray)

// 3. Создать массив строк, относящихся к любой сущности (название фильмов/книг,
// кухонные приборы, мебель и т.д.), проверить, есть ли в массиве какая-то
// определенная сущность.

const furniture = ["диван", "стул", "кровать"]
// console.log(furniture.includes("кровать"))

// 4. Написать функцию, которая аргументом будет принимать массив и изменять
// его порядок на противоположный ("переворачивать"). Два вышеуказанных массива
// с помощью этой функции перевернуть.

const expandArray = array => {
    return array.reverse()
}

// console.log(expandArray(array))
// console.log(expandArray(furniture))

// Уровень 2:

// 5. Добавить файл comments.js, в нём создать константу и в него поместить
// первые 10 объектов этого массива (https://jsonplaceholder.typicode.com/comments).
// Данный массив представляет собой пример комментариев в соц. сетях,
// поэтому переменная должна быть названа по смыслу. Не забудьте удалить
// квадратные кавычки у ключей объектов (можно использовать Chat GPT,
// что бы не делать это вручную)

// 6. Сделать константу экспортируемой, добавив перед "const" ключевое
// слово "export". Таким образом мы сможем внедрить переменную из comments.js в
// homework-7.js и работать с ней. Когда мы введем название переменной,
// нам предложит импортировать ее - так и делаем.

import { comments } from "./comments.js"

// 7. Вывести в консоль массив тех комментариев, почта пользователей
// которых содержит ".com"

// console.log(comments.filter(comment => comment.email.includes(".com")))

// 8. Перебрать массив таким образом, что бы пользователи с id меньше
// или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1

const sortedComments = comments.map(comment => {
    const postId = comment.id <= 5 ? 2 : 1
    return {...comment, postId}
})
// console.log(sortedComments)

// 9. Перебрать массив, что бы объекты состояли только из айди и имени

const showNameandId = comments.map(comment => {
    const id = comment.id
    const name = comment.name
    return {id, name}
})

// console.log(showNameandId)

// 10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем:
// если длина тела сообщения (body) больше 180 символов - устанавливаем true,
// меньше - false.

const addIsInvalid = comments.map(comment => {
    const isInvalid = comment.body.length > 180 ? true : false
    return {...comment, isInvalid}
})

// console.log(addIsInvalid)
// Уровень 3:

// 11. Почитать про метод массива reduce. Используя его, вывести массив
// почт и провернуть тоже самое с помощью метода map

const getEmailWithReduce = comments.reduce(((emails, comment) => {
    emails.push(comment.email)
    return emails
}), [])

console.log(getEmailWithReduce)

const getEmailWithMap = comments.map(comment => {
    return comment.email
})

console.log(getEmailWithMap)



// 12. Почитать про методы toString(), join() и перебрав массив с задания
// №11, привести его к строке.

console.log(getEmailWithReduce.join(", "))
