//Крок 0. Позначення величи
//minMonthNumber
//maxMonthNumber
//randomMonthNumber
//minDayNumber
//maxDayNumber
//randomDayNumber
//randomsSum
//Крок 1. Введення
let minDayNumber = 0
let maxDayNumber = 6
let minMonthNumber = 1
let maxMonthNumber = 12
//Крок 2. Обчислення
let randomDayNumber = minDayNumber + Math.floor(Math.random() * (maxDayNumber - minDayNumber + 1))
let randomMonthNumber = minMonthNumber + Math.floor(Math.random() * (maxMonthNumber - minMonthNumber + 1))
let randomsSum = randomDayNumber + randomMonthNumber
//Крок 3. Вивід
document.write(`Сума = ${randomsSum}`);
