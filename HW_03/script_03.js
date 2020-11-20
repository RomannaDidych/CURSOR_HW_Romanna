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

const convertCurrency = (cash, rate) =>{	
	let convertedCash;
	if(cash.toLowerCase().includes('uah')) {
		convertedCash = (parseFloat(cash) / rate).toFixed(2);		
		return `${convertedCash}UAH`;
	}; 
	if(cash.includes('$')) {
		convertedCash = (parseFloat(cash) * rate).toFixed(2);		
		return `${convertedCash}$`;
	} else {
		console.log (`Sorry! You can't convert your currency. We convert $ or UAH only.`);
	};
};

const  getRandomPassword = (length = 8) => {
	let password = [];
	for (let i = 0; i<length; i++){		
		password.push(Math.floor(Math.random() * 10));
	};
	return password.join('');
}

const deleteLetters = (letter, str) => {
	const arr = str.toLowerCase().split('');
	let newArr = [];
	for( let item of arr){
		if(item !== letter.toLowerCase()) newArr.push(item)
	}	
	return newArr.join('');
};

const isPalyndrom = (str) => {
	const strWithoutSpace = deleteLetters(' ', str);
	const reverseStr = strWithoutSpace.split('').reverse().join('');
	return strWithoutSpace === reverseStr;
};

const deleteDuplicateLetter = (str) => {
	let tempStr = deleteLetters(' ', str);
	let result = ''
	for (let i = 0; i < tempStr.length; i++){
		let currentLetter = tempStr[i];		
		if(tempStr.indexOf(currentLetter) === tempStr.lastIndexOf(currentLetter)){			
			result += currentLetter;
		}
	}
	return result;	
}

console.log(`
function №1 getMaxDigit(865513): ${getMaxDigit(865513)};
function №2 calculatePower(8,3): ${calculatePower(8,3)};
function №3 formateName('cUrSOr'): ${formateName('cUrSOr')};
function №4 countSalaryWithoutTaxes(1000,'18%','1.5%','20%'): ${countSalaryWithoutTaxes(1000,'18%','1.5%','20%')};
function №5 getRandomNumber(2,8): ${getRandomNumber(2,8)};
function №6 countLetter("А", "абрАкадаБРА"): ${countLetter("А", "абрАкадаБРА")};
function №7 convertCurrency('1500 UAH', 28.57): ${convertCurrency('1500 UAH', 28.57)};
function №8 getRandomPassword(5): ${getRandomPassword(5)};
function №9 deleteLetters('a','ayuiaramaneaea'): ${deleteLetters('a','ayuiaramaneaea')};
function №10 isPalyndrom('Я несу гусеня'): ${isPalyndrom('Я несу гусеня')};
function №11 deleteDuplicateLetter('Бісквіт був дуже ніжним'): ${deleteDuplicateLetter('Бісквіт був дуже ніжним')};
`);

