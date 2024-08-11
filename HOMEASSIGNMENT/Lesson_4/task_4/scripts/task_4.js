let listNumber = parseInt(prompt('Введіть кількість випадкових чисел'))
const minNumber = 1
const maxNumber = 100
document.write(`<ul>`)
for(let i = 0; i < listNumber; i++) {
	let compNumber = minNumber + Math.floor(Math.random()*(maxNumber-minNumber+1))
	document.write(`<li>${compNumber}</li>`)
}
document.write(`</ul>`)

