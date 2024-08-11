
for(let i = 1; i <= 3; i++) {
	let compGuess = 1 + Math.floor(Math.random()*100)
	if(confirm(`Спроба ${i} Це число ${compGuess}?`)) break
}