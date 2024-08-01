//Крок 0. Позначення величин
//userDriverCategory - водійська категорія користувача
//Крок 1. Введення
let userDriverCategory = prompt('Введіть Вашу категорію водія', 'A')
let result = 'Ви можете керувати: '
//Крок 2. Обчислення
if(userDriverCategory.toUpperCase() === 'A')
	result += 'мотоцикл'
else if(userDriverCategory.toUpperCase() === 'B')
	result += 'легковий автомобіль'
else if(userDriverCategory.toUpperCase() === 'C')
	result += 'вантажний автомобіль'
else
	alert(`Не вірно введені дані`)
document.write(result)