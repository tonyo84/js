let investedMoney = parseFloat(prompt('Скільки інвесткєте?'))
let profit = 0
for(let i = 0; i < 20; i++) {
	profit+=investedMoney / 100 * 20
}
let returnedMoney = profit + investedMoney
document.write(`Вкладник отримає ${returnedMoney}грн.`)
