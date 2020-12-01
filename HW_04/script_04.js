const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"]; 
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


const girlsNames = ["Олена", "Іра", "Світлана"];
const boysNames = ["Олександр", "Ігор", "Олексій"]
const minMark = 1, maxMark = 5;

const combineNewArray = (arr1, arr2) => arr1.map((item, ind) => [item, arr2[ind]]);
const joinElements = (arr) => arr.map(paire => `${paire[0]} і ${paire[1]}`)

const getPairs = (arr, namesM, namesW) => {
	const gerlsArr = arr.filter(name => namesW.includes(name));
	const boysArr = arr.filter(name => namesM.includes(name));
	return combineNewArray(boysArr, gerlsArr)
};

const getMarksForPairs = (pairsArr) => pairsArr.map(pairs => [pairs,  Math.floor(Math.random() * (maxMark- minMark)) + minMark])

const pairs = getPairs(students, boysNames, girlsNames);
const themesForPairs = combineNewArray(joinElements(pairs), themes);
const MarksForStudents = combineNewArray(students, marks);
const marksForPairs = getMarksForPairs(joinElements(pairs));

console.log(pairs);
console.log(themesForPairs);
console.log(MarksForStudents);
console.log(marksForPairs);	
console.log(`
	we've worked with basic data:
	array of students: ${students};
	array of themes: ${themes};
	array of marks: ${marks}`)