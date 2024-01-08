const urlApi = "https://hp-api.onrender.com/api/characters";
const galeria = document.createElement("div");
galeria.classList.add("galeria");

async function getCharacters() {
  try {
    const response = await fetch(urlApi);
    const characters = await response.json();

    characters.forEach((character) => {
      // Creación de variables
      const characterDiv = document.createElement("div");
      characterDiv.classList.add("galeria-character");

      const characterName = document.createElement("h2");
      characterName.textContent = character.name;
      characterName.classList.add("galeria-character__name");

      const characterImg = document.createElement("img");
      characterImg.src = character.image;
      characterImg.alt = character.name;
      characterImg.classList.add("galeria-character__img");

      const characterActor = document.createElement("h3");
      characterActor.textContent = character.actor;

      // Añadir a la galería
      characterDiv.appendChild(characterName);
      characterDiv.appendChild(characterImg);
      characterDiv.appendChild(characterActor);
      galeria.appendChild(characterDiv);
      document.body.appendChild(galeria);
    });
  } catch (error) {
    console.error("Error de fetching", error);
  }
}
