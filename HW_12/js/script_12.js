const genderIcons = {
	male: '../img/icons/man.png',
	female: '../img/icons/woman.png',
	unknown : '../img/icons/question.png'
}



class heros {
	constructor(name, year, gender){
		this.name = name;
		this.year = year;
		this.gender = gender;

	}

	get getIconUrl(){
		if(this.gender === 'male') return genderIcons.male;
		if(this.gender === 'male'){
			return genderIcons.female
		} else {
			return genderIcons.unknown
		}
	}

	get getHeroCard(){
		const card = document.createElement('div');
		card.classList.add('heroCard');
		const heroName = document.createElement('div');
		heroName.classList.add('heroName');
		heroName.innerHTML = this.name;
		card.append(heroName);
		const heroYear = document.createElement('div');
		heroYear.classList.add('heroYear');
		heroYear.innerHTML = `birth year: ${this.year}`;
		card.append(heroYear);
		return card;
	}

}


let mainUrl = `https://swapi.dev/api/films/`
const mainButton = document.querySelector('.mainButton');
const mainArea = document.querySelector('.mainArea');

const getData = (url) =>{
	axios.get(url).
	then(response => {
		const peopleUrlArr = response.data.characters;
		console.log(response.data.characters)
		peopleUrlArr.map((url, ind) =>{
			axios.get(url).
			then((response) => {//console.log(response.data)
				const hero = new heros(response.data.name, response.data.birth_year, response.data.gender);
				console.log(hero);
				const herocard = hero.getHeroCard;
				mainArea.append(herocard); 
			});
		})
	})
}

mainButton.addEventListener('click', (e) => {	
	const film = document.querySelector('#episode').value;	
	/*const language = document.querySelector('#language').value;
	console.log(film,language)
	let tempUrl;
	if(language === 'wookiee'){
		tempUrl = mainUrl + `${film}/?format=wookiee`;
	} else {
		tempUrl = mainUrl + `${film}/`;
	}*/
	tempUrl = mainUrl + `${film}/`;
	console.log(tempUrl);
	getData(tempUrl);
		

})
