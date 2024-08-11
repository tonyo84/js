
let oddNumber = 0
let evenNumber = 0
const minNumber = 1
const maxNumber = 1000
for(let i = 0; i < 100; i++) {
	let compNumber = minNumber + Math.floor(Math.random()*(maxNumber - minNumber + 1))
	if(compNumber%2===0) evenNumber++
	else oddNumber++
}
let max = evenNumber>oddNumber?evenNumber:oddNumber
if(max%2===0) document.write(`Більше парних чисел`)
else document.write(`Більше непарних чисел`)

