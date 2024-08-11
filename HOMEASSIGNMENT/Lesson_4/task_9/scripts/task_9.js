let num = 1
for(let m = 0; m < 3; m++) {
	document.write(`<table border = 2px solid black>`)
	for(let i = 0; i < 3; i++) {
		document.write(`<tr>`)
		for(let j = 0; j < 3; j++) {
			document.write(`<td>${num++}</td>`)
		}
		document.write(`</tr>`)
	}
	document.write(`</table>`)
}
