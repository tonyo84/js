let flag = 6
let i = 0
let outStr = ''
while(i<7) {
	let j = 0
	while(j<7) {
		if(j<flag) {
			outStr+='&nbsp'
		}
		else outStr+='o'
		j++
	}
	flag--
	outStr+='<br>'
	i++
}
document.write(outStr)
