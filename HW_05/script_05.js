//1
const getRandomArray = (arrlength, min, max) => Array.from({length: arrlength}).map(number => Math.floor(Math.random() * (max - min + 1) + min));

//2 
const getModa = (...numbers) => {
	const integerNumbers = numbers.filter(number =>   Number.isInteger(number));
	let numberAndCountArr = [];	
	let uniquesArr = [];	
	for (let i=0; i<integerNumbers.length;i++){
		const unique = integerNumbers[i];
		if (!uniquesArr.includes(unique)){
			uniquesArr.push(unique);		
			const count = integerNumbers.filter(number => {return number === unique}).length;
			numberAndCountArr.push([unique, count]);
		}		  
	};	
	const repeats = numberAndCountArr.map((arr) => {return arr[1]});	
	const moda = numberAndCountArr.filter(array => {return array[1] === Math.max(...repeats)}).map(arr =>{return arr[0]});
	return moda;
};

//3
const getAverage = (...numbers) => {
	const integerNumbers = numbers.filter(number => Number.isInteger(number));	
	return (integerNumbers.reduce((sum, number) => sum + number, 0))/integerNumbers.length;
};

//4
const getMedian = (...numbers) => {	
	const integerNumbers = numbers.filter(number =>   Number.isInteger(number));
	integerNumbers.sort((intA, intB) => intA - intB);;	
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
const  filterEvenNumbers = (...numbers) => numbers.filter(number => number%2 === 1);

//6 
const countPositiveNumbers = (...numbers) => numbers.filter(number => number>0).length;

//7
const getDividedByFive = (...numbers) =>  numbers.filter(number => number%5 === 0);

//8

const replaceBadWords = (string) =>{
	const badWords = ['shit', 'fuck'];
	const changeBadWord = (word, startInd, endInd) => 
							word.split('').	
								map((char,index) => {
									if((index >= startInd) && (index <=endInd)) char = '*';
									return char;}).
								join('');
	
	let arrWithBadWords = string.split(' ');
	let arrNiceWordsOnly = [];
	badWords.forEach((badWord,badInd) =>{
		arrNiceWordsOnly = arrWithBadWords.map(word =>{
			const index = word.indexOf(badWord);		 
			if(index !== -1) word = changeBadWord(word, index, index + badWord.length -1);			 
			return word
		});
		arrWithBadWords = arrNiceWordsOnly;
	});	
	return arrNiceWordsOnly.join(' ');
};

//9 
const divideByThree = (string) =>{
	
	stringArr = string.toLowerCase().split('').filter(char => char !== ' ');	
	const divider = 3;	
	let dividedArr = Array.from({length: Math.floor(stringArr.length/divider)}).map(shortStr => stringArr.splice(0, divider).join(''));
	if(stringArr.length > 0) dividedArr.push(stringArr.join(''));	
	return dividedArr;	
};

//10 
const generateCombinations = (word) =>{

	const insertLetter = (letter, str, ind) =>{
		const startStr = str.slice(0,ind);
		const endStr = str.slice(ind);
		return startStr + letter + endStr;
	}; //console.log(insertLetter('A', 'aaaa', 2)); // 'aaAaa'

	const getChangeLetterPositionsArr = (letter, string) => Array.from({length: string.length+1}).map((str, i) => insertLetter(letter,string, i))
	 //console.log(getChangeLetterPositionsArr('A', 'abc')); //['Aabc', 'aAbc', 'abAc', 'abcA']


	if (word.length ===1) return [word];
	const wordLength = word.length;	
	let result = [word[0]];
	for(let i=1; i<wordLength; i++){
		let char = word[i];
		let temp = [];		
		for(let j=0; j<result.length;j++){			
			temp = temp.concat(getChangeLetterPositionsArr(char, result[j]));			
		}		
		result = temp;		
	}
	return result;
}





console.log(`
function #1 getRandomArray(10, 0, 40):   ${getRandomArray(10, 0, 40)};
function #2 getModa(2, 14.24, 55, 11, 2, 55, 56.12, 77, 57, 55, 55, 87, 44.8, 23, 2, 56, 3, 2):  ${getModa(2, 14.24, 55, 11, 2, 55, 56.12, 77, 57, 55, 55, 87, 44.8, 23, 2, 56, 3, 2)};
function #3 getAverage(6, 2, 55, 11, 78, 22.14, 2, 55, 77, 57, 56.12, 87, 23, 2, 56, 3, 2):   ${getAverage(6, 2, 55, 11, 78, 22.14, 2, 55, 77, 57, 56.12, 87, 23, 2, 56, 3, 2)};
function #4 getMedian(6, 2, 55, 11, 78, 2, 55, 77, 77.5, 14.22, 57, 87, 23, 2, 56, 3, 2):    ${getMedian(6, 2, 55, 11, 78, 2, 55, 77, 77.5, 14.22, 57, 87, 23, 2, 56, 3, 2)};
function #5 filterEvenNumbers(1, 2, 3, 4, 5, 6):    ${filterEvenNumbers(1, 2, 3, 4, 5, 6)}
function #6 countPositiveNumbers(1, -2, 3, -4, -5, 6):    ${countPositiveNumbers(1, -2, 3, -4, -5, 6)}
function #7 getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2):    ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)};
function #8 replaceBadWords("Are you bigshit fuck fucking kidding?"):    ${replaceBadWords("Are you bigshit fuck fucking kidding?")};
function #9 divideByThree(" Com  mand er er"):   ${divideByThree(" Com  mand er er")};
function #10 generateCombinations('abcd'):   ${generateCombinations('abcd')}
`)


