//Крок 0. Позначення величин
//breadPrice
//breadAmount
//breadFullPrice
//butterPrice
//butterAmount
//butterFullPrice
//tomatoesPrice
//tomatoesAmount
//tomatoesFullPrice
//totalPrice
//Крок 1. Введення
let breadPrice = parseFloat(prompt('Вартість буханки хліба?', '10'))
let breadAmount = parseInt(prompt('Скільки буханок хліба?', '1'))
let butterPrice = parseFloat(prompt('Вартість кілограма масла?', '10'))
let butterAmount = parseFloat(prompt('Скільки кілограм масла?', '1'))
let tomatoesPrice = parseFloat(prompt('Вартість кілограма помідор?', '10'))
let tomatoesAmount = parseFloat(prompt('Скільки кілограм помідор?', '1'))

//Крок 2. Обчислення
let breadFullPrice = breadPrice * breadAmount
let butterFullPrice = butterPrice * butterAmount
let tomatoesFullPrice = tomatoesPrice * tomatoesAmount
let totalPrice = breadFullPrice + butterFullPrice + tomatoesFullPrice
//Крок 3. Вивід
document.write(`<p>Ціна за хліб:${breadFullPrice}грн.</p>
						<p>Ціна за масло:${butterFullPrice}грн.</p>
						<p>Ціна за помідори:${tomatoesFullPrice}грн.</p>
						<p>Всього:${totalPrice}грн.</p>
	`);
