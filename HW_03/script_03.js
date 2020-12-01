const getMaxDigit = number => Math.max(... Array.from(String(number)).map((item) => parseInt(item)));

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

const formateName = (name) => name.charAt(0).toUpperCase() + name.toLowerCase().slice(1);;

const countSalaryWithoutTaxes = (salary, ...taxes) => {
	let sumTaxes = taxes.reduce((sum, tax) => sum += parseFloat(tax), 0);
	return salary - salary*sumTaxes/100;
}

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


const countLetter = (letter, str) => str.toLowerCase().split('').filter(char => char === letter.toLowerCase()).length;


const convertCurrency = (cash, rate) =>{	
	let convertedCash;
	if(cash.toLowerCase().includes('uah')) {
		convertedCash = (parseFloat(cash) / rate).toFixed(2);		
		return `${convertedCash}$`;
	}; 
	if(cash.includes('$')) {
		convertedCash = (parseFloat(cash) * rate).toFixed(2);		
		return `${convertedCash}UAH`;
	} else {
		console.log (`Sorry! You can't convert your currency. We convert $ or UAH only.`);
	};
};

const  getRandomPassword = (passwordLength = 8) => Array.from({length:passwordLength}).map(number => Math.floor(Math.random() * 10))

const deleteLetters = (letter, str)	=> str.split('').filter(char => char !== letter).join('');

const isPalyndrom = (str) => {
	const strWithoutSpace = deleteLetters(' ', str).toLowerCase();
	const reverseStr = strWithoutSpace.split('').reverse().join('');
	return strWithoutSpace === reverseStr;
};

const deleteDuplicateLetter = (str) => {
	tempArr = str.toLowerCase().split('')
	return tempArr.filter((letter) => tempArr.indexOf(letter) === tempArr.lastIndexOf(letter)).join('')	
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
function №9 deleteLetters('a','ayuiarAmaneaea'): ${deleteLetters('a','ayuiarAmaneaea')};
function №10 isPalyndrom('Я несу гусеня'): ${isPalyndrom('Я несу гусеня')};
function №11 deleteDuplicateLetter('БіСквіт буВ дуЖе нІжним'): ${deleteDuplicateLetter('БіСквіт буВ дуЖе нІжним')};
`);

