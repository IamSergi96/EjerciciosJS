const urlPlanetas = "http://localhost:3000/planets";
const urlPersonajes = "http://localhost:3000/characters";

const galeriaPlanetas = document.querySelector('[data-function="planets"]');
galeriaPlanetas.classList.add("galeriaPlanetas");
const galeriaPersonajes = document.querySelector(
  '[data-function="characters"]'
);
galeriaPersonajes.classList.add("galeriaPersonajes");

//creacion del input del filtro
const searchInput = document.createElement("input");
searchInput.classList.add("input");
searchInput.placeholder = "Busca a tu personaje";
searchInput.addEventListener("input", () => {
  filterCharacters(personajesData, searchInput.value);
});

//añadir elementos al body
document.body.appendChild(galeriaPersonajes);
document.body.appendChild(galeriaPlanetas);
document.body.appendChild(searchInput);

let personajesData; //para poder ser accedido por todos

async function getPlanets() {
  try {
    const response = await fetch(urlPlanetas);
    const planetsData = await response.json();

    planetsData.forEach((planeta) => {
      //creacion de elementos
      const planetaDiv = document.createElement("div");
      planetaDiv.classList.add("galeriaPlanetas-planeta");

      const planetaImg = document.createElement("img");
      planetaImg.src = planeta.image;
      planetaImg.alt = planeta.name;
      planetaImg.classList.add("galeriaPlanetas-planeta__image");

      const planetaName = document.createElement("h2");
      planetaName.textContent = planeta.name;
      planetaName.classList.add("galeriaPlanetas-planeta__name");

      //evento click para mostrar los personajes
      planetaDiv.addEventListener("click", () => {
        getCharacters(planeta.id);
        galeriaPlanetas.style.display = "none";
      });

      //añadir a la galeria de planetas
      planetaDiv.appendChild(planetaImg);
      planetaDiv.appendChild(planetaName);
      galeriaPlanetas.appendChild(planetaDiv);
    });
  } catch (error) {
    console.log("Error de peticion de planetas", error);
  }
}

//funcion de crear los elementos de personaje
function crearElementosPersonaje(personaje) {
  const personajeDiv = document.createElement("div");
  personajeDiv.classList.add("personaje");

  const personajeImg = document.createElement("img");
  personajeImg.src = personaje.avatar;
  personajeImg.alt = personaje.name;
  personajeImg.classList.add("personaje__image");

  const personajeName = document.createElement("h3");
  personajeName.textContent = personaje.name;
  personajeName.classList.add("personaje__name");

  //añadir al body
  personajeDiv.appendChild(personajeImg);
  personajeDiv.appendChild(personajeName);

  return personajeDiv;
}

async function getCharacters(idPlanet) {
  try {
    //primero limpiamos los personajes que hayan salido previamente
    galeriaPersonajes.innerHTML = "";
    //boton atras para volver a los planetas
    const volverAPlanetas = document.createElement("button");
    volverAPlanetas.textContent = "Volver a los planetas";
    volverAPlanetas.classList.add("botonAtras");
    volverAPlanetas.addEventListener("click", () => {
        galeriaPersonajes.innerHTML="";
        galeriaPlanetas.style.display= "flex";
    });
    galeriaPersonajes.appendChild(volverAPlanetas);

    const response = await fetch(`${urlPersonajes}?idPlanet=${idPlanet}`);
    const personajesData = await response.json();
    //iterar sobre los personajes
    personajesData.forEach((personaje) => {
      galeriaPersonajes.appendChild(crearElementosPersonaje(personaje));
    });
  } catch (error) {
    console.log("Error de petición de personajes", error);
  }
}

//creacion de la funcion adicional (filtro)
function filterCharacters(personajesData, filtro) {
  const personajesFiltrados = personajesData.filter((personaje) =>
    personaje.name.toLowerCase().includes(filtro.toLowerCase())
  );

  //limpiamos los personajes anteriores
  galeriaPersonajes.innerHTML = "";

  personajesFiltrados.forEach((personaje) => {
    galeriaPersonajes.appendChild(crearElementosPersonaje(personaje));
  });
}


//llamar a la funcion principal
getPlanets();
