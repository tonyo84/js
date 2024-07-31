//Крок 0. Позначення величин
//secondsFromMidnight
//hoursFromMidnight
//minutesFromMidnight
//Крок 1. Введення
let secondsFromMidnight = parseInt(prompt("Введіть кількість секунд", "0"));
//Крок 2. Обчислення
let hoursFromMidnight = Math.floor(secondsFromMidnight / 3600);
let minutesFromMidnight = Math.floor((secondsFromMidnight % 3600) / 60);
//Крок 3. Вивід
document.write(`Введений час: ${hoursFromMidnight}год., ${minutesFromMidnight}хв.`);
