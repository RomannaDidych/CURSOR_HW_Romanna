class Students {
	constructor (university, course, fullName){
		this.university = university;
		this.course = course;
		this.fullName = fullName;
		this.marks = [];
		this.isStudent = true; 
	}

	get getAverage(){
		if(this.marks.length){
			return (this.marks.reduce((sum, number) => sum + number, 0))/this.marks.length;
		} else{
			console.log(`Sorry! ${this.fullName} has no marks now`)
			return null
		}
	}

	get getMarks(){		
		if(this.isStudent){
			return this.marks
		} else {
			console.log(`Sorry! ${this.fullName} isn't a student now`)
			return null
		}
	}

	set setMark(mark){		
		if(this.isStudent) {
			this.marks.push(mark);
			this.getMarks;
		} else {
			console.log(`Sorry! ${this.fullName} isn't a student now`)
		}
	}

	dismiss(){
		this.isStudent = false;
		this.marks = [];
	}

	recover(){
		this.isStudent = true;
		console.log(`Congratulations! ${this.fullName} is a student again`)
	}
	 
}

const ostap = new Students('Вища Школа Психотерапії м.Одеса', '1', 'Остап Бендер');
console.log(ostap)
//console.log(Students.getAverage(ostap.marks)); //виклик для методу static
console.log(ostap.getAverage);
console.log(ostap.getMarks);
ostap.setMark = 5;
ostap.setMark = 3;
ostap.setMark = 4;
ostap.setMark = 5;
ostap.setMark = 5;
console.log(ostap.getMarks);
console.log(ostap);
ostap.dismiss();
console.log(ostap);
//console.log(ostap.getAverage);
//ostap.dismiss;
console.log(ostap.getMarks);
ostap.recover();
console.log(ostap)