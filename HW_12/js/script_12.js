const genderIcons = {
  male: "../img/icons/man.png",
  scraanwo: "../img/icons/man.png",
  female: "../img/icons/woman.png",
  wwwoscraanwo: "../img/icons/woman.png",
  unknown: "../img/icons/question.png",
};

class heroes {
  constructor(name, year, gender) {
    this.name = name;
    this.year = year;
    this.gender = gender;
  }

  get getIconUrl() {
    if (this.gender === "male") return genderIcons.male;
    if (this.gender === "male") {
      return genderIcons.female;
    } else {
      return genderIcons.unknown;
    }
  }

  get getHeroCard() {
    const card = document.createElement("div");
    card.classList.add("heroCard");
    const heroName = document.createElement("div");
    heroName.classList.add("heroName");
    heroName.innerHTML = this.name;
    card.append(heroName);
    const heroYear = document.createElement("div");
    heroYear.classList.add("heroYear");
    heroYear.innerHTML = `${this.year}`;
    card.append(heroYear);
    const heroGender = document.createElement("div");
    heroGender.classList.add("heroGender");
    heroGender.innerHTML = `${this.gender}`;
    card.append(heroGender);
    return card;
  }
}

let mainUrl = `https://swapi.dev/api/films/`;
const mainButton = document.querySelector(".mainButton");
console.log(mainButton);
const nextPage = document.querySelector(".planetbutton");
const mainArea = document.querySelector(".mainArea");
const film = document.querySelector("#episode");
const language = document.querySelector("#language");

const getData = (url) => {
  axios.get(url).then((response) => {
    console.log(response.data.characters);
    const peopleUrlArr = response.data.characters;
    console.log(response.data.characters);
    peopleUrlArr.map((url, ind) => {
      if (language.value === "wookiee") {
        url += "?format=wookiee";
      }
      axios.get(url).then((response) => {
        let hero;
        if (language.value === "wookiee") {
          hero = new heroes(
            response.data.whrascwo,
            response.data.rhahrcaoac_roworarc,
            response.data.rrwowhwaworc
          );
          console.log(hero);
        } else {
          hero = new heroes(
            response.data.name,
            response.data.birth_year,
            response.data.gender
          );
          console.log(hero);
        }

        hero.getIconUrl;
        const herocard = hero.getHeroCard;
        mainArea.append(herocard);
      });
    });
  });
};

mainButton.addEventListener("click", (e) => {
  const cards = document.querySelectorAll(`.heroCard`);
  if (cards.length > 0) {
    cards.forEach((card) => card.remove());
  }
  let tempUrl = mainUrl + `${film.value}/`;
  console.log(tempUrl);
  getData(tempUrl);
});
nextPage.addEventListener(
  "click",
  () => (window.location.href = "planet_12.html")
);
