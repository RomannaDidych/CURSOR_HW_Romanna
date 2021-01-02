
 const colors = ['red', 'blue', 'green', 'orange', 'white', 'purple', 'yellow', 'magenta', 'brown', 'lightgreen']
 const puzzlesArea = document.querySelector('.puzzleArea');
export const blocksNumber = 25;

export const getRandomColor = () => {
	const index = Math.floor(Math.random() * colors.length);
	return colors[index];
}

export const generateBlock = () => {
	const block = document.createElement('div');
	block.classList.add('block');
	block.style.backgroundColor = getRandomColor();	
	return block;
}

export function generateBlocks(number){
	for(let i=0; i<number;i++){
		puzzlesArea.append(generateBlock())
	}
};

	
 



