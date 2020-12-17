//const = getRandomChinese = (length) => new Promise((resolve, reject) => {})






const chanesChart = ['異','刃','令','難','骨','詩','海','起','誤','英'];




const  getRandomChinese = (length) => new Promise((resolve, reject) => {	
	let chineseStr = '';
	while(length>0){
		setTimeout(() =>{
			const str = String(Date.now()).slice(-5);			
			chineseStr += chanesChart[Math.floor(Math.random() * chanesChart.length)];
			console.log(chineseStr);
		},50);
		length--;
	};	
	return chineseStr;
	});
getRandomChinese(4).then((result) => console.log(result));

/*const time = Date.now();
const shortN = Math.trunc(((time/100000).toFixed(5) - Math.trunc(time/100000))*100000);
console.log(time, shortN)
char = String.fromCharCode(shortN);
console.log(time, shortN, char);*/