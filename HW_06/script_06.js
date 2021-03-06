

const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

const getAverage = (...numbers) => {
  const integerNumbers = numbers.filter(number => Number.isInteger(number));  
  return (integerNumbers.reduce((sum, number) => sum + number, 0))/integerNumbers.length;
};


//1
const getSubjects = (student) => Object.keys(student.subjects).map(subject => subject.charAt(0).toUpperCase() + subject.slice(1).split('_').join(' '));

//2
const getAverageMark = student =>{
  let allMarks = Object.values(student.subjects).reduce((totalArr, arr) => totalArr.concat(arr), []);
  return getAverage(...allMarks).toFixed(2);
}

//3 
const getStudentInfo = student =>{ 
  const studentInfo = {};
  studentInfo.course = student.course;
  studentInfo.name = student.name;
  studentInfo.averageMark = getAverageMark(student);
  return studentInfo;
}

//4 
const getStudentsNames = arrOfStudents => arrOfStudents.map(obj => obj.name).sort();

//5
const getBestStudent = (studentsArr) => {
  const infoArr = studentsArr.map(obj =>[obj.name, +getAverageMark(obj)]);    
  const maxAverage = Math.max(...infoArr.map(arr => arr[1]));  
  return infoArr.filter(arr => maxAverage === arr[1]).map(arr => arr[0]);
}

//6 
const calculateWordLetters = word => {
  const wordArr = word.split('');
  const letterAndCount = wordArr.map((letter) => [letter, wordArr.filter(char => char === letter).length])
  const wordObj = {}
  letterAndCount.forEach(arr => {if(!(arr[0] in wordObj)) wordObj[arr[0]] = arr[1];})
  return wordObj
}





console.log(`
  function #1 getSubjects(students[0]): ${getSubjects(students[0])};
  function #2 getAverageMark(students[0]): ${getAverageMark(students[0])};
  function #3 getStudentInfo(students[1]): ${JSON.stringify(getStudentInfo(students[1]))};
  function #4 getStudentsNames(students): ${getStudentsNames(students)};
  function #5 getBestStudent(students): ${getBestStudent(students)};
  function #6 calculateWordLetters("ламбада"): ${JSON.stringify(calculateWordLetters("ламбада"))};
   `)

 
  


