const previousPage = document.querySelector(".backButton");
const url = `https://swapi.dev/api/planets/`;
const planetArea = document.querySelector(".planetArea");

const createPlanete = (name) => {
  const planet = document.createElement("div");
  planet.classList.add("planet");
  planet.innerHTML = name;
  return planet;
};

const getData = (url) => {
  axios.get(url).then((response) => {    
    const planetsNames = response.data.results.map((planet) => planet.name);
    planetsNames.forEach((name) => {
      const currentPlanet = createPlanete(name);
      planetArea.append(currentPlanet);
    });
  });
};
getData(url);
previousPage.addEventListener(
  "click",
  () => (window.location.href = "index_12.html")
);
 
