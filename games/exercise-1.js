//TO-DO: hacer que cuando se haga score (acierto) las cartas queden marcadas con el src="public/exercise-1/tick.svg". porque quedan ocultas de nuevo, aunque si que no se pueden volver a seleccionar

let cardArray = [
    {
        id: 1,
        name: "earth",
        img: "public/exercise-1/earth.svg",
    },
    {
        id: 2,
        name: "jupiter",
        img: "public/exercise-1/jupiter.svg",
    },
    {
        id: 3,
        name: "mars",
        img: "public/exercise-1/mars.svg",
    },
    {
        id: 4,
        name: "mercury",
        img: "public/exercise-1/mercury.svg",
    },
    {
        id: 5,
        name: "saturn",
        img: "public/exercise-1/saturn.svg",
    },
    {
        id: 6,
        name: "uranus",
        img: "public/exercise-1/uranus.svg",
    },
    {
        id: 7,
        name: "earth",
        img: "public/exercise-1/earth.svg",
    },
    {
        id: 8,
        name: "jupiter",
        img: "public/exercise-1/jupiter.svg",
    },
    {
        id: 9,
        name: "mars",
        img: "public/exercise-1/mars.svg",
    },
    {
        id: 10,
        name: "mercury",
        img: "public/exercise-1/mercury.svg",
    },
    {
        id: 11,
        name: "saturn",
        img: "public/exercise-1/saturn.svg",
    },
    {
        id: 12,
        name: "uranus",
        img: "public/exercise-1/uranus.svg",
    },
];

// Inicializar variables
let selectedCards = [];
let score = 0;
let attempts = 0;

// Función para barajar el array aleatoriamente
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Tablero inicial
function gameBoard() {
  const board = document.createElement("div");
  board.classList.add("board");

  // Barajar las cartas aleatoriamente
  shuffleArray(cardArray);

  // Cartas con evento click para volteo (flip)
  cardArray.forEach((card) => {
    const cardImage = document.createElement("img");
    cardImage.src = "public/exercise-1/universe.svg";
    cardImage.classList.add("card-image");
    cardImage.dataset.cardImage = card.id;
    cardImage.addEventListener("click", flipCard);
    board.appendChild(cardImage);
  });

  // Adjuntar el tablero al cuerpo del documento (o al elemento deseado)
  document.body.appendChild(board);
}
function flipCard() {
    const selectedCard = this;
    selectedCard.src = cardArray[selectedCard.dataset.cardImage - 1].img;
  
    // Evitar que las mismas cartas se seleccionen nuevamente
    if (selectedCards.length === 1 && selectedCards[0] === selectedCard) {
      return;
    }
  
    selectedCard.src = cardArray[selectedCard.dataset.cardImage - 1].img;
  
    // No seleccionar una carta que ya ha salido y se ha encontrado su doble (ya ha puntuado)
    if (selectedCards.length === 2) {
      return;
    }
  
    selectedCards.push(selectedCard);
  
    if (selectedCards.length === 2) {
      attempts++;
    }
  
    // Comparación de tarjetas seleccionadas
    const card1 = cardArray[selectedCards[0].dataset.cardImage - 1];
    const card2 = cardArray[selectedCards[1].dataset.cardImage - 1];
  
    if (card1.name === card2.name) {
      // Acierto
      score++;
      selectedCards.forEach((card) => {
        card.src = "public/exercise-1/tick.svg";
        card.removeEventListener("click", flipCard);
      });
  
      // Se ha completado el juego?
      if (score === cardArray.length / 2) {
        alert("¡Has ganado, felicidades!");
      }
    } else {
      // Invalidación de jugada
      setTimeout(() => {
        selectedCards.forEach((card) => {
          card.src = "public/exercise-1/universe.svg";
        });
        // Descartar las cartas seleccionadas para la siguiente jugada
        selectedCards = [];
      }, 500);
    }
    //para descartar las cartas se acierte o se invalide la jugada
    setTimeout(()=>{
        selectedCards.forEach((card)=>{
            card.src = "public/exercise-1/universe.svg";
        });
        selectedCards=[];
    }, 500);
  
    // Actualizar marcador
    document.querySelector('[data-function="score"]').textContent = score;
    document.querySelector('[data-function="attempts"]').textContent = attempts;
  };
  

// Iniciar
gameBoard();