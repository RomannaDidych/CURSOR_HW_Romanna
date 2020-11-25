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
	let integerNumbers = numbers.filter(number =>{return Math.trunc(number) === number});
	const numberAndCount = integerNumbers
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

console.log(`
function #1 getRandomArray(10, 0, 40):   ${getRandomArray(10, 0, 40)};
function #3 getAverage(6, 2, 55, 11, 78, 22.14, 2, 55, 77, 57, 56.12, 87, 23, 2, 56, 3, 2):   ${getAverage(6, 2, 55, 11, 78, 22.14, 2, 55, 77, 57, 56.12, 87, 23, 2, 56, 3, 2)};
function #4 getMedian(6, 2, 55, 11, 78, 2, 55, 77, 77.5, 14.22, 57, 87, 23, 2, 56, 3, 2):    ${getMedian(6, 2, 55, 11, 78, 2, 55, 77, 77.5, 14.22, 57, 87, 23, 2, 56, 3, 2)};
function #5 filterEvenNumbers(1, 2, 3, 4, 5, 6):    ${filterEvenNumbers(1, 2, 3, 4, 5, 6)}
function #6 countPositiveNumbers(1, -2, 3, -4, -5, 6):    ${countPositiveNumbers(1, -2, 3, -4, -5, 6)}
function #7 getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2):    ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)} `);
