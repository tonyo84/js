let num = 1
let paragraphNumber = parseInt(prompt('Введіть кількість абзаців'))
for(let i = 1; i <= paragraphNumber; i++ ) {
	document.write(`<h1>Заголовок ${i}</h1>`)
	for(let j = 1; j <= i; j++) {
		document.write(`<p>Розділ ${i}, параграф ${j}</p>`)
	}
}