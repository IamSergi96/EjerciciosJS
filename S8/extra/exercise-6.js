let characters; // Declaramos characters globalmente

// Obtener personajes de la API y mostrar sus datos
// Lo hacemos con una función async await
async function getCharacters() {
  try {
    const response = await fetch("http://localhost:3000/characters");
    const charactersData = await response.json(); // Me daba una promesa, así que uso await para esperar su resolución
    if (Array.isArray(charactersData)) {
      characters = charactersData; // Inicializamos characters con los datos de la API
      // Qué hacer con los datos de la API => mostrar personajes
      const charactersContainer = document.querySelector(".c-characters");
      characters.forEach((character) => {
        const characterDiv = document.createElement("div");
        characterDiv.innerHTML = `<img src="${character.avatar}" alt="${character.name}">
            <p>${character.name}</p>
            <p>Vitality: ${character.vitality}</p>`;
        characterDiv.dataset.characterId = character.id; // Agregamos el ID como un atributo de datos
        characterDiv.addEventListener("click", () => selectCharacter(character.id));
        charactersContainer.appendChild(characterDiv);
      });
    } else {
      console.error("La respuesta API no es un array", charactersData);
    }
  } catch (error) {
    console.error("Error de petición fetch:", error);
  }
}

// Llamamos a la función getCharacters() para obtener los personajes al cargar la página
getCharacters();

// Para que el usuario elija los personajes
let selectedCharacters = []; // Inicializamos un array para almacenar los dos personajes

// Función para hacer la selección
function selectCharacter(characterId) {
  const character = characters.find((c) => c.id === characterId);
  selectedCharacters.push(character);
  if (selectedCharacters.length === 2) {
    // Mostrar el botón luchar cuando se escojan 2 personajes
    const arenaDiv = document.querySelector("[data-function='arena']");
    const fightButton = document.createElement("button");
    fightButton.textContent = "Luchar!";
    fightButton.addEventListener("click", startBattle);
    arenaDiv.appendChild(fightButton);
  }
}

// Iniciar la batalla, función startBattle
function startBattle() {
  let attackerIndex = Math.floor(Math.random() * 2); // Inicializamos el atacante de manera aleatoria
  let defenderIndex = 1 - attackerIndex;

  const battleResultDiv = document.createElement("div");
  const arenaDiv = document.querySelector("[data-function='arena']");
  arenaDiv.appendChild(battleResultDiv);

  function performTurn() {//funcion de inicio de turno
    const attacker = selectedCharacters[attackerIndex];
    const defender = selectedCharacters[defenderIndex];

    // Calcular daño y verificar si el defensor ha perdido
    const defenderLost = calculateDamage(attacker, defender);

    // Mostrar el resultado de la batalla
    if (defenderLost) {
      battleResultDiv.innerHTML = `<p>¡Batalla terminada! El ganador es ${attacker.name}</p>`;
      // Botón de reinicio de batalla
      const resetButton = document.createElement("button");
      resetButton.textContent = "Reiniciar";
      resetButton.addEventListener("click", resetGame);
      arenaDiv.appendChild(resetButton);
    } else {
      battleResultDiv.innerHTML = `<p>${attacker.name} ataca a ${defender.name}. ${defender.name} tiene ${defender.vitality} de vitalidad restante.</p>`;
      // Cambiar el atacante y el defensor para el próximo turno
      [attackerIndex, defenderIndex] = [defenderIndex, attackerIndex];

    }
  }
  // Iniciar el primer turno
  performTurn();
}


// Función para calcular el daño
function calculateDamage(attacker, defender) {
  let totalDamage = 0;

  attacker.damage.forEach((damageDice) => {
    const [numberDice, numberSides] = damageDice.split("d").map(Number);

    for (let i = 0; i < numberDice; i++) {
      let roll = Math.floor(Math.random() * numberSides) + 1;

      if (roll === attacker.critic) {
        roll *= 2; // En el caso de que de daño crítico, doblamos el daño
      }

      totalDamage += roll;
    }
  });

  const finalDamage = totalDamage - defender.defense;

  if (finalDamage > 0) {
    defender.vitality -= finalDamage; // Restar el daño a la vitalidad del defensor
  }

  if (defender.vitality <= 0) {
    // El defensor ha perdido la partida
    return true;
  }

  return false;
}

// Función para reiniciar el juego
function resetGame() {
  // Reiniciar variables (limpiar array personajes elegidos) y limpiar pantalla
  selectedCharacters = [];
  const arenaDiv = document.querySelector("[data-function='arena']");
  arenaDiv.innerHTML = "";
  //reiniciar la vitalidad de los personajes a su vitalidad inicial
  characters.forEach((character)=>{
    character.vitality = character.initialVitality; //he añadido una propiedad initialVitality a la API porque al terminar la batalla la vitalidad del personaje no se reiniciaba
  })
}
