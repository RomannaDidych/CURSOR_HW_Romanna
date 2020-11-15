let minNumber = (prompt(`Please, enter a first integer number`));
let condition = isNaN(minNumber) || minNumber === null || minNumber === '';
while (condition){
	minNumber = (prompt(`Uppps!!! You did not enter a number.\n Please enter a first integer number`));
	condition = isNaN(minNumber) || minNumber === null || minNumber === '';
};
minNumber = parseInt(minNumber);

let maxNumber = (prompt(`Please, enter a second integer number`));
condition = isNaN(maxNumber) || maxNumber === null || maxNumber === '';
while (condition){
	maxNumber = parseInt(prompt(`Uppps!!! You did not enter a number.\n Please enter a second integer number`));
	condition = isNaN(maxNumber) || maxNumber === null || maxNumber === '';
};
maxNumber = parseInt(maxNumber);

if (minNumber > maxNumber){
	const temp = minNumber;
	minNumber = maxNumber;
	maxNumber = temp;
};

condition = confirm(`Should I skip even numbers?`);
let sum = 0;
for(let i = minNumber; i<= maxNumber; i++){	
	sum += (!condition || i%2) ? i : 0;
};
console.log(`min number = ${minNumber}; max number = ${maxNumber}; sum = ${sum}`);

