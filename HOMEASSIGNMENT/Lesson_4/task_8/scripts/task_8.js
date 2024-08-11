let num = 1
document.write(`<table border = 2px solid black>`)
for(let i = 1; i <= 3; i++) {
document.write(`<tr>`)
	for(let j = 1; j <= 3; j++){
		document.write(`<td>${num++}</td>`)
	}
	document.write(`</tr>`)
}
document.write(`</table>`)
