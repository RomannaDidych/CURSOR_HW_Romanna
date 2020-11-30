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

const getMarksForPears = (pearsArr) => {
	let marksArr = [];
	for(let i = 0; i < pearsArr.length; i++){
		marksArr.push(Math.floor(Math.random() * (maxMark- minMark) + minMark));
	}
	return combineNewArray(pearsArr, marksArr);
};

const pairs = getPairs(students, boysNames, girlsNames);
const themesForPairs = combineNewArray(joinElements(pairs), themes);
const MarksForStudents = combineNewArray(students, marks);
const marksForPears = getMarksForPears(joinElements(pairs));

console.log(pairs);
console.log(themesForPairs);
console.log(MarksForStudents);
console.log(marksForPears);	
console.log(`
	we've worked with basic data:
	array of students: ${students};
	array of themes: ${themes};
	array of marks: ${marks}`)