export const generateCombinations = (word) =>{
	const insertLetter = (letter, str, ind) =>{
		const startStr = str.slice(0,ind);
		const endStr = str.slice(ind);
		return startStr + letter + endStr;
	}; //console.log(insertLetter('A', 'aaaa', 2)); // 'aaAaa'

	const getChangeLetterPositionsArr = (letter, string) => Array.from({length: string.length+1}).map((str, i) => insertLetter(letter,string, i))
	 //console.log(getChangeLetterPositionsArr('A', 'abc')); //['Aabc', 'aAbc', 'abAc', 'abcA']

	if (word.length ===1) return [word];
	const wordLength = word.length;	
	let result = [word[0]];
	for(let i=1; i<wordLength; i++){
		let char = word[i];
		let temp = [];		
		for(let j=0; j<result.length;j++){			
			temp = temp.concat(getChangeLetterPositionsArr(char, result[j]));			
		}		
		result = temp;		
	}
	return result;
}






