let minNumber;
let maxNumber;

do {
	minNumber = prompt(`Please, enter a first integer number`, '0')	
} while(!Number.isInteger(+minNumber) || minNumber === null);
minNumber = +minNumber;

do{
	maxNumber = +prompt(`Please, enter a second integer number`, '0')
} while(!Number.isInteger(+maxNumber) || maxNumber === null);
maxNumber = +maxNumber;

if (minNumber > maxNumber){
	const temp = minNumber;
	minNumber = maxNumber;
	maxNumber = temp;
};

const skip = confirm(`Should I skip even numbers?`);
let sum = 0;
for(let i = minNumber; i<= maxNumber; i++){	
	if(skip && i%2 === 0){
		continue;
	} else {
		sum += i;
	}
};
console.log(`min number = ${minNumber};  max number = ${maxNumber};  skipped even numbers: ${skip};  sum = ${sum}`);




