function createTable(rowsNum, columnsNum, message) {
  document.write(`<table style = "border:1px solid black">`);
  for (let i = 0; i < rowsNum; i++) {
    document.write(`<tr>`);
    for (let j = 0; j < columnsNum; j++) {
      document.write(`<td style = "border:1px solid black">${message}</td>`);
    }
	 document.write(`</tr>`)
  }
  document.write(`</table>`);
}
let rowsNum = parseInt(prompt("Скільки рядків?"));
let columnsNum = parseInt(prompt("Скільки стовпців?"));
let message = prompt("Повідомлення?");
let table = createTable(rowsNum, columnsNum, message);
