const getMaxDigit = number => {
	let maxDigit = 0;
	while (number >= 1){
		  if (maxDigit < number%10) maxDigit = number%10;		  
		  number = Math.trunc(number/10);
	};
	return maxDigit;
}

const calculatePower = (num, pow) => {
	let result = 1;	
	if (pow === 0) return result;
	if (pow > 0){
		for (let i = 1; i<=pow; i++){
			result *= num; 
		}
	} else {		
		for (let i = 1; i<=Math.abs(pow); i++){
			result *= 1 / num;			 
		}
	};
	return result;
};

const formateName = (name) => {	
	const capital = name.charAt(0).toUpperCase();
	return capital.concat(name.toLowerCase().slice(1));
};

const countSalaryWithoutTax = (salary, tax) => {
	let sumTax = 0;	
	for(let i = 0; i < tax.length; i++){		
		let percentage = parseFloat(tax[i]);		
		sumTax += percentage;
	};
	return salary - salary*sumTax/100;
}
//console.log(countSalaryWithoutTax(1000,['18%','1.5%']));

console.log(`
function №1 getMaxDigit(865513): ${getMaxDigit(865513)};
function №2 calculatePower(8,3): ${calculatePower(8,3)};
function №3 formateName('cUrSOr'): ${formateName('cUrSOr')};
function №4 countSalaryWithoutTax(1000,['18%','1.5%']): ${countSalaryWithoutTax(1000,['18%','1.5%'])};
`);