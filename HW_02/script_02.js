let minNumber = parseInt(prompt(`Please, enter a first integer number`));
while (isNan(minNumber)){
	minNumber = parseInt(prompt(`Uppps!!! You did not enter a number.\n Please enter a first integer number`));
};
let maxNumber = parseInt(prompt(`Please, enter a second integer number`));
while (isNan(maxNumber)){
	maxNumber = parseInt(prompt(`Uppps!!! You did not enter a number.\n Please enter a second integer number`));
};
if (minNumber > maxNumber){
	const temp = minNumber;
	minNumber = maxNumber;
	maxNumber = temp;
};


