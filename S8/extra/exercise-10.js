// Inicializar la página actual
let currentPage = 1;

// Obtener la galería del DOM
const gallery = document.getElementsByClassName("b-gallery")[0];

// Crear el botón de carga
const loadMoreBtn = document.createElement("button");
loadMoreBtn.classList.add("b-btn");
loadMoreBtn.addEventListener("click", loadMore);
loadMoreBtn.textContent = `Pagina ${currentPage}. Cargar más personajes`;
document.body.appendChild(loadMoreBtn);

// Definir la cantidad de personajes por página y la URL de la API
const charactersPerPage = 5;
const urlAPI = "http://localhost:3000/characters";

// Función para obtener personajes de la API
async function getCharacters(page) {
  try {
    //limpio la galeria porque quiero que aparezcan 5 nuevos personajes (y solo 5 por pagina) al cambiar de pagina
    gallery.innerHTML="";
    // Realizar la solicitud a la API
    const response = await fetch(`http://localhost:3000/characters?_page=${currentPage}&_limit=5`);
    const characterData = await response.json();

    // Procesar los personajes y agregarlos a la galería
    characterData.forEach((character) => {
      const characterDiv = document.createElement("div");
      characterDiv.classList.add("b-gallery__item");

      const characterImg = document.createElement("img");
      characterImg.src = character.image;
      characterImg.alt = character.name;
      characterImg.classList.add("b-gallery__img");

      const characterTitle = document.createElement("h2");
      characterTitle.textContent = character.name;
      characterTitle.classList.add("b-gallery__text");

      characterDiv.appendChild(characterTitle);
      characterDiv.appendChild(characterImg);
      gallery.appendChild(characterDiv);
    });
  } catch (error) {
    console.error("Error al hacer la peticion de personajes", error);
  }
}

// Función para cargar más personajes al hacer clic en el botón
function loadMore() {
  currentPage++;
  getCharacters(currentPage);
  loadMoreBtn.textContent = `Pagina ${currentPage}. Cargar más personajes`;
  console.log(`Loading more characters per page${currentPage}`)

  // Ocultar el botón en la página 4
  if (currentPage === 4) {
    loadMoreBtn.style.display = "none";
  }
}

// Cargar los 5 primeros personajes al cargar la página inicialmente
getCharacters(currentPage);
