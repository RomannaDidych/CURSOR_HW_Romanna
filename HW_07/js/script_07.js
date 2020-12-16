const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921};
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 }; 

//1
function getMyTaxes(salary){
	return salary * this.tax;
}
console.log(`function #1 getMyTaxes.call(latvia, 1000): ${getMyTaxes.call(latvia, 1000)};`)

//2
function getMiddleTaxes(){	
	return middleTaxes = this.middleSalary * this.tax
}
console.log(`function #2 getMiddleTaxes.call(latvia): ${getMiddleTaxes.call(latvia)};`)

//3
function getTotalTaxes(){
	return this.middleSalary * this.tax * this.vacancies	
}
console.log(`function #3 getTotalTaxes.call(latvia): ${getTotalTaxes.call(latvia)};`)

//4
function getMySalary(country){
	const inf = {};
	const minSalary = 1500;
	const maxSalary = 2000;	
	setInterval(() => {
		inf.salary = Math.floor((Math.random() * (maxSalary - minSalary +1)) + minSalary);
		inf.taxes = +(inf.salary * country.tax).toFixed(2);
		inf.profit = +(inf.salary - inf.taxes).toFixed(2);
		console.log(inf)},10000);
};

getMySalary(ukraine);
                  


