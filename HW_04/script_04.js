const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const combineNewArray = (arr1, arr2) => {
	let resultArr = [];
	for(let i = 0; i<arr1.length; i++){
		resultArr.push([arr1[i], arr2[i]])
	}
	return resultArr;
};

const getPairs = (arr) => {
	let gerlsArr = [];
	let boysArr = [];
	for(let i = 0; i < arr.length; i++){
		if (arr[i] === "Олена" || arr[i] === "Іра" || arr[i] === "Світлана"){
			gerlsArr.push(arr[i]);
		} else {
			boysArr.push(arr[i])
		};
	};
	return combineNewArray(boysArr, gerlsArr)
};

const getMarksForPears = (pearsArr) => {
	let marksArr = [];
	for(let i = 0; i < pearsArr.length; i++){
		marksArr.push(Math.floor(Math.random() * 4) + 1);
	}
	return combineNewArray(pearsArr, marksArr);
};

const pairs = getPairs(students);
const themesForPairs = combineNewArray(pairs, themes);
const MarksForStudents = combineNewArray(students, marks);
const marksForPears = getMarksForPears(pairs);
console.log(pairs);
console.log(themesForPairs);
console.log(MarksForStudents);
console.log(marksForPears);	
console.log(`
	we've worked with basic data:
	array of students: ${students};
	array of themes: ${themes};
	array of marks: ${marks}`)