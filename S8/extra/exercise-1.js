const urlEndpoint = "https://breakingbadapi.com/api/characters";
const galeria = document.createElement("div");
galeria.classList.add("galeria");
fetch(urlEndpoint)
     .then(response => response.json())
     .then(characters =>{
        characters.forEach(character=>{
            const characterImage = document.createElement("img")
            characterImage.classList.add("imagenes")
            characterImage.src = character.img
            characterImage.alt = character.name
            
            const characterName = document.createElement("div")
            characterName.classList.add("nombreImagen")
            characterName.textContent = character.name

            const characterCard = document.createElement("div")
            characterCard.classList.add("targetaImagenes")

            characterCard.appendChild(characterImage)
            characterCard.appendChild(characterName)

            galeria.appendChild(characterCard)
        })
     })
.catch(error => console.error("Error:",error));

// Failed to load resource: the server responded with a status of 404 (Not Found)
// exercise-1.html:1 Unchecked runtime.lastError: Could not establish connection. Receiving end does not exist.
// exercise-1.html:1 Access to fetch at 'https://breakingbadapi.com/api/characters' from origin 'http://127.0.0.1:5500' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
// breakingbadapi.com/api/characters:1 
        
// Failed to load resource: net::ERR_FAILED
// exercise-1.js:26 Error: TypeError: Failed to fetch
// at exercise-1.js:4:1