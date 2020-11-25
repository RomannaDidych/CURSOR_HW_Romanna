//1
const getRandomArray = (length, min, max) =>{
	let randomArr = [];
	for(let i = 0; i < length; i++){
		randomArr.push(Math.floor(Math.random() * (max - min + 1) + min));
	};
	return randomArr;
};

//2 getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
/*const getModa = (...numbers) => {
	const integerNumbers = numbers.filter(number =>{return Math.trunc(number) === number});	
}*/

//3
const getAverage = (...numbers) => {
	let integerNumbers = numbers.filter(number =>{return Math.trunc(number) === number});	
	return (integerNumbers.reduce((sum, number) => sum + number, 0))/integerNumbers.length;
};

//4
const getMedian = (...numbers) => {	
	const integerNumbers = numbers.filter(number =>{return Math.trunc(number) === number});
	function compareNumbers(a, b) {
	  if (a > b) return 1;
	  if (a == b) return 0;
	  if (a < b) return -1;
	};

	integerNumbers.sort(compareNumbers);	
	const medianIndex = Math.floor(integerNumbers.length/2);
	let median;	
	if (integerNumbers.length % 2) {
		median = integerNumbers[medianIndex];				
	} else{		
		median = getAverage(integerNumbers[medianIndex -1], integerNumbers[medianIndex]);
	};
	return median;
}
	
//5
const  filterEvenNumbers = (...numbers) => {
	return numbers.filter(number =>{return number%2 === 1})
};

//6 
const countPositiveNumbers = (...numbers) =>{
	let positiveNumbers = numbers.filter(number => {return number>0});
	return positiveNumbers.length;
};

//7
const getDividedByFive = (...numbers) => {
	return numbers.filter(number =>{return number%5 === 0})
};

//8
const badWords = ['shit', 'fuck'];
const replaceBadWords = (string) =>{
	const changeBadWord = (word, startInd, endInd) => {		
		return  word.split('').
				map((char,index) => {
					if((index >= startInd) && (index <=endInd)) char = '*';
					return char;
				}).
				join('');
	};
	let arrWithBadWords = string.split(' ');
	let arrNiceWordsOnly = [];
	for (let i=0;i<badWords.length; i++){
		arrNiceWordsOnly = arrWithBadWords.map(word =>{			
			const bedInd = word.indexOf(badWords[i]); 
			if(bedInd !== -1) word = changeBadWord(word, bedInd, bedInd + badWords[i].length -1);			 
			return word;
		});
		arrWithBadWords = arrNiceWordsOnly;
	};
	return arrNiceWordsOnly.join(' ');
};

//9 divideByThree("Commander") -> ["com", "man", "der"]
const divideByThree = (string) =>{
	
	stringArr = string.toLowerCase().split('').filter(char => char !== ' ');	
	const divider = 3;
	let dividedArr = [];
	while(stringArr.length >= divider){
		let shortArr = [];
		for(let i=0; i< divider; i++ ){
			shortArr.push(stringArr.shift())
		}
		dividedArr.push(shortArr.join(''));		
	};
	if(stringArr.length > 0) dividedArr.push(stringArr.join(''));
	return dividedArr;
};

console.log(`
function #1 getRandomArray(10, 0, 40):   ${getRandomArray(10, 0, 40)};
function #3 getAverage(6, 2, 55, 11, 78, 22.14, 2, 55, 77, 57, 56.12, 87, 23, 2, 56, 3, 2):   ${getAverage(6, 2, 55, 11, 78, 22.14, 2, 55, 77, 57, 56.12, 87, 23, 2, 56, 3, 2)};
function #4 getMedian(6, 2, 55, 11, 78, 2, 55, 77, 77.5, 14.22, 57, 87, 23, 2, 56, 3, 2):    ${getMedian(6, 2, 55, 11, 78, 2, 55, 77, 77.5, 14.22, 57, 87, 23, 2, 56, 3, 2)};
function #5 filterEvenNumbers(1, 2, 3, 4, 5, 6):    ${filterEvenNumbers(1, 2, 3, 4, 5, 6)}
function #6 countPositiveNumbers(1, -2, 3, -4, -5, 6):    ${countPositiveNumbers(1, -2, 3, -4, -5, 6)}
function #7 getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2):    ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)};
function #8 replaceBadWords("Are you bigshit fuck fucking kidding?"):    ${replaceBadWords("Are you bigshit fuck fucking kidding?")};
function #9 divideByThree(" Com  mand er er"):   ${divideByThree(" Com  mand er er")} `)

