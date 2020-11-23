const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"]; 
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


const girlsNames = ["Олена", "Іра", "Світлана"];
const boysNames = ["Олександр", "Ігор", "Олексій"]
const minMark = 1, maxMark = 5;

const combineNewArray = (arr1, arr2) => {
	let resultArr = [];
	for(let i = 0; i<arr1.length; i++){
		resultArr.push([arr1[i], arr2[i]])
	}
	return resultArr;
};

const joinElements = (arr) =>{
	let newArr = [];
	for (let item of arr){
		newArr.push(`${item[0]} і ${item[1]}`)
	}
	return newArr;
}

const getPairs = (arr, namesM, namesW) => {
	let gerlsArr = [];
	let boysArr = [];
	for(let i = 0; i < arr.length; i++){		
		if (namesM.includes(arr[i])) boysArr.push(arr[i]);
		if (namesW.includes(arr[i])) gerlsArr.push(arr[i]);		
	};
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