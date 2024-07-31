//Крок 0. Позначення величин
//Вартість одиниці товару - unitPrice
//Кількість товару - unitAmount
//Загальна вартість - fullPrice
//Податок на додану вартість - vat
//Крок 1. Введення
const vat = 5
let unitPrice = parseFloat(prompt('Вартість одиниці товару?', '10'))
let unitAmount = parseFloat(prompt('Кількість одиниць товару?', '1'))
//Крок 2. Обчислення
let tax = (unitPrice * unitAmount) * vat / 100
let fullPrice = unitAmount * unitPrice - tax
//Крок 3. Вивід
document.write(`Загальна вартість = ${fullPrice}грн., ПДВ = ${tax}грн.`);
