let appleBoxes = 15
while (appleBoxes > 0) {
	let appleBoxesLoaded = parseInt(prompt('Скільки ящиків загрузити?'))
	if (appleBoxesLoaded <= appleBoxes) {
		alert(`Щасливої дороги!`)
		appleBoxes-=appleBoxesLoaded
	}
	else alert(`У нас немає стільки на складі. Залишилось ${appleBoxes} ящиків`)
}
document.write(`Ящикі з яблуками закінчились`)

