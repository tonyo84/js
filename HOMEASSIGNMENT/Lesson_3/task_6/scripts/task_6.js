//Крок 0. Позначення величин
//dayNumber - номер дня тижня
//Крок 1. Введення
let dayNumber = parseInt(prompt('Введіть номер дня тижня','1'))
let result
//Крок 2. Обчислення
if(dayNumber === 1)
	result = 'понеділок'
else if(dayNumber === 2)
	result = 'вівторок'
else if(dayNumber === 3)
	result = 'середа'
else if(dayNumber === 4)
	result = 'четвер'
else if(dayNumber === 5)
	result = 'п\'ятниця'
else if(dayNumber === 6)
	result = 'субота'
else if(dayNumber === 7)
	result = 'неділя'
else alert(`Не вірно введені дані`)
document.write(result)