async function getCharacters(){
    const response = await fetch('https://rickandmortyapi.com/api/character');
    if(!response.ok){
        throw new Error("Error de petición");
    }
    const character = await response.json();
    console.log(character);
}
getCharacters();
