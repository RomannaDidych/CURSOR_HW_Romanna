
const colors = ['red', 'blue', 'green', 'orange', 'white', 'purple', 'yellow', 'magenta', 'brown', 'lightgreen']
const puzzlesArea = document.querySelector('.puzzleArea');
const blocksNumber = 25;

const getRandomColor = () => {
	const index = Math.floor(Math.random() * colors.length);
	return colors[index];
}

const generateBlock = () => {
	const block = document.createElement('div');
	block.classList.add('block');
	block.style.backgroundColor = getRandomColor();	
	return block;
}

function generateBlocks(number){
	for(let i=0; i<number;i++){
		puzzlesArea.append(generateBlock())
	}
};
generateBlocks(blocksNumber);

const blocks = document.querySelectorAll('.block');
const delay = 1000;
let intID = setInterval(() => blocks.forEach((block) => block.style.backgroundColor = getRandomColor()),delay);
	
 



