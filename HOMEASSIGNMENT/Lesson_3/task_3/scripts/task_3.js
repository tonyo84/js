//Крок 0. Позначення величин
//firstTryNumber - перша спроба
//secondTryNumber - друга спроба
//randomNumber - випадкове число
//minNumber - мінімальне число
//maxNumber - максимальне число
//Крок 1. Введення
const minNumber = 1;
const maxNumber = 5;
let firstTryNumber = parseInt(prompt("Введіть число від 1 до 5", "1"));
let randomNumber = minNumber + Math.floor(Math.random() * (maxNumber - minNumber));
//Крок 2. Обчислення
if (firstTryNumber !== randomNumber) {
	alert(`Ви не вгадали, у Вас є щє одна спроба`);
	let secondTryNumber = parseInt(prompt("Введіть число від 1 до 5", "1"));
	if (secondTryNumber == randomNumber) document.write(`Ура! Ви вгадали!`);
	else document.write(`Ви не вгадали. Наступного разу пощастить!`);
}
else document.write(`Ура! Ви вгадали!`);
