
let a = parseFloat(prompt('Введіть число', '0'))
let b = parseFloat(prompt('Введіть число', '0'))
let c = parseFloat(prompt('Введіть число', '0'))
let s = a + 12 + b
let s2 = Math.pow((a + b) / (2 * a), 1 / 2)
let s3 = Math.pow((a + b) * c, 1 / 3)
let s4 = Math.sin(a / -b)
document.write(`S1 = ${s}, S2 = ${s2}, S3 = ${s3}, S4 = ${s4}`);