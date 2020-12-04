class Student {
	constructor (university, course, fullName){
		this.university = university;
		this.course = course;
		this.fullName = fullName; 
	}
}

const ostap = new Student('Вища Школа Психотерапії м.Одеса', '1', 'Остап Бендер');
console.log(ostap);