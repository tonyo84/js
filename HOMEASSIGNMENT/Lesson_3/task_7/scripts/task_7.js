//Крок 0. Позначення величин
//dayNumber - номер дня тижня
//Крок 1. Введення
let monthNumber = parseInt(prompt('Введіть номер місяця від 1 до 12','1'))
let result
//Крок 2. Обчислення
if(monthNumber > 2 && monthNumber < 6)
	result = 'весна'
else if(monthNumber > 5 && monthNumber < 9)
	result = 'літо'
else if(monthNumber > 8 && monthNumber < 12)
	result = 'осінь'
else if(monthNumber === 12 || monthNumber >= 1)
	result = 'зима'
else alert(`Не вірно введені дані`)
document.write(result)