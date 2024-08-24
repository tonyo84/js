let gymVisitorsNumber = parseInt(prompt('Скільки людей відвідало спортзал?'))
let oldestVisitor = 1
let youngestVisitor = 100
let totalAge = 0
for(let i = 1; i <= gymVisitorsNumber; i++) {
	let visitorAge = parseInt(prompt(`Вік відвідувача номер ${i}?`))
	if(visitorAge>=oldestVisitor)
		oldestVisitor=visitorAge
	if(visitorAge<=youngestVisitor)
		youngestVisitor=visitorAge
	totalAge+=visitorAge
}
let averageAge = totalAge / gymVisitorsNumber
document.write(`Вік найстаршого відвідувача ${oldestVisitor}, вік наймолодшого відвідувача ${youngestVisitor}, середній вік всіх відвідувачів ${averageAge}`)
