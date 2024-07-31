//Крок 0. Позначення величин
//Поточний рік - currentYear
//Рік народження - userBirthYear
//вік користувача - userAge
//Крок 1. Введення
const currentYear = 2024
const userBirthYear = parseInt(prompt('В якому році Ви народились?','1980'))
//Крок 2. Обчислення
let userAge = currentYear - userBirthYear
//Крок 3. Вивід
document.write(`Вік користувача = ${userAge}`)