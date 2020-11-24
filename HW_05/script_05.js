//1
const getRandomArray = (length, min, max) =>{
	let randomArr = [];
	for(let i = 0; i < length; i++){
		randomArr.push(Math.floor(Math.random() * (max - min + 1) + min));
	};
	return randomArr;
};

//console.log(getRandomArray(10, 0, 40));

//5

const  filterEvenNumbers = function(...numbers){
	return numbers.filter(number =>{return number%2 === 1})
};
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));

