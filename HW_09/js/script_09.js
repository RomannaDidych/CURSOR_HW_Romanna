//generateBlocks();
//generateBlocksInterval();
const colors = ['red', 'blue', 'green', 'orange', 'white', 'purple', 'yellow', 'magenta', 'brown', 'lightgreen']
const puzzlesArea = document.querySelector('.fullscreen__puzzle');
const piecesNumber = 25;
const getRandomColor = () => {
	const index = Math.floor(Math.random() * colors.length);
	return colors[index];
}

const generatePiece = () => {
	const piece = document.createElement('div');
	piece.classList.add('piece');
	piece.style.backgroundColor = getRandomColor();	
	return piece;
}
//console.log(generateBlock());
function generateBlocks(number){
	for(let i=0; i<number;i++){
		puzzlesArea.append(generatePiece())
	}
};
generateBlocks(piecesNumber);
const pieces = document.querySelectorAll('.piece');

let intID = setInterval(() => pieces.forEach((piece) => piece.style.backgroundColor = getRandomColor()),1000);
	
 



