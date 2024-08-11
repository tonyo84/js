let sumOddNumber = 0
let firstNumber = parseInt(prompt('Введіть перше число'))
let secondNumber = parseInt(prompt('Введіть друге число'))
for(let i = firstNumber; i <= secondNumber; i++) {
	if(i%2!==0) sumOddNumber+=i
}
document.write(`Сума непарних чисел ${sumOddNumber}`)