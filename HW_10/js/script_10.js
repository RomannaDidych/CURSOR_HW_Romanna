const buttonArr =  Array.from(document.querySelectorAll('.button'));
const melodyArr = Array.from(document.querySelectorAll('.melody'));

const removeActive = () => buttonArr.forEach(btn => btn.classList.remove('active'));
const selectAudio = name => melodyArr.filter((sound) => sound.classList.contains(name))[0];		


buttonArr.forEach((btn) => btn.addEventListener('click', connectBtnWithAudio));	
	function connectBtnWithAudio(){		
		removeActive();
		this.classList.add('active');
		const btnName = this.getAttribute('data-btnName');		
		selectAudio(btnName).play();
	};

document.addEventListener('keydown', connectPressedBtnWithAudio);
	function connectPressedBtnWithAudio(e){		
		removeActive();
		const btnKey = e.key;		
		const pressedBtn = buttonArr.filter(btn => btn.getAttribute('data-btnName') === btnKey)[0];
		pressedBtn.classList.add('active');		
		selectAudio(btnKey).play();
	};






	
