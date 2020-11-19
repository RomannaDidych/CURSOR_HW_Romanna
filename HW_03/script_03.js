const getMaxDigit = number => {
	let maxDigit = 0;
	while (number >= 1){
		  if (maxDigit < number%10) maxDigit = number%10;		  
		  number = Math.trunc(number/10);
	};
	return maxDigit;
}

const calculatePower = (num, exp) => {
	let result = 1;	
	if (exp === 0) return result;
	if (exp > 0){
		for (let i = 1; i<=exp; i++){
			result *= num; 
		}
	} else {		
		for (let i = 1; i<=Math.abs(exp); i++){
			result *= 1 / num;			 
		}
	};
	return result;
};

const formateName = (name) => {	
	/*const capital = name.charAt(0).toUpperCase();
	return capital.concat(name.toLowerCase().slice(1));*/
	return name.charAt(0).toUpperCase() + name.toLowerCase().slice(1);
};

const countSalaryWithoutTaxes = (salary, ...taxes) => {
	let sumTaxes = 0;	
	for(let tax of taxes){						
		sumTaxes += parseFloat(tax);		
	};
	return salary - salary*sumTaxes/100;
}

const getRandomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const countLetter = (letter, str) =>{
	const arr = str.toLowerCase().split('');
	let counter = 0;
	for (let item of arr){
		if(item === letter.toLowerCase()){			
		 	counter += 1;
		 };
	};
	return counter;
}


console.log(`
function №1 getMaxDigit(865513): ${getMaxDigit(865513)};
function №2 calculatePower(8,3): ${calculatePower(8,3)};
function №3 formateName('cUrSOr'): ${formateName('cUrSOr')};
function №4 countSalaryWithoutTaxes(1000,'18%','1.5%','20%'): ${countSalaryWithoutTaxes(1000,'18%','1.5%','20%')};
function №5 getRandomNumber(2,8): ${getRandomNumber(2,8)};
function №6 countLetter("А", "абрАкадаБРА"): ${countLetter("А", "абрАкадаБРА")};
`);

