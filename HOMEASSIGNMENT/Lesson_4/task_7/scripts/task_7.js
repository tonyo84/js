document.write(`<table border = 2px solid black>`)
for(let i = 0; i < 3; i++) {
	document.write(`<tr>`)
	for(let j = 1; j <=7; j++) {
		document.write(`<td>${j}</td>`)
	}
	document.write(`</tr>`)
}
document.write(`</table>`)