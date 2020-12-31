class Students {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = [];
    this.isStudent = true;
  }

  get getStudentInfo() {
    return `Студент ${this.course}-го курсу ${this.university} ${this.fullName}`;
  }

  get getAverage() {
    if (this.marks.length) {
      return (
        this.marks.reduce((sum, number) => sum + number, 0) / this.marks.length
      );
    } else {
      return null;
    }
  }

  get getMarks() {
    return this.isStudent ? this.marks : null;
  }

  set setMark(mark) {
    if (this.isStudent) {
      this.marks.push(mark);
      this.getMarks;
    } else {
      console.log(`Вибачте! ${this.fullName} не є нашим студентом`);
    }
  }

  dismiss() {
    this.isStudent = false;
    this.marks = [];
  }

  recover() {
    this.isStudent = true;
    console.log(`Вітаємо! ${this.fullName} знову став студентом`);
  }
}

const ostap = new Students(
  "Вища Школа Психотерапії м.Одеса",
  "1",
  "Остап Бендер"
);
console.log(ostap);
console.log(ostap.getStudentInfo);
console.log(ostap.getAverage);
console.log(ostap.getMarks);
ostap.setMark = 5;
console.log(ostap.getMarks);
ostap.setMark = 3;
console.log(ostap.getMarks);
ostap.dismiss();
console.log(ostap);
console.log(ostap.getMarks);
ostap.recover();
console.log(ostap);

const delay = 30000;
const scholarshipValue = 1400;
const minAverage = 4.0;

class BudgetStudent extends Students {
  constructor(university, course, fullName, scholarship) {
    super(university, course, fullName);
    this.scholarship = 0;

    let intID = setInterval(() => {
      if (this.getAverage >= minAverage && this.isStudent) {
        this.getScholarship;
        console.log(`Ви отримали ${this.scholarship} грн. стипендії`);
      } else {
        this.scholarship = 0;
      }
    }, delay);
  }
  get getScholarship() {
    return (this.scholarship = scholarshipValue);
  }
}

const ira = new BudgetStudent(
  "Національний Університет м.Львів",
  4,
  "Ірина Решетняк"
);
console.log(ira);
console.log(ira.getStudentInfo);
console.log(ira.getMarks);
ira.setMark = 5;
console.log(ira.getMarks);
ira.setMark = 4;
console.log(ira.getMarks);
console.log(ira.getAverage);
console.log(ira);
