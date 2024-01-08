//creacion de las constantes
const squares = document.querySelectorAll('[data-function="square"]');
const scoreDisplay = document.querySelector('[data-function="score"]');
const secondsLeftDisplay = document.querySelector('[data-function="time-left"]');
//he declarado las variables fuera de init y luego las he llamado a init porque no en consola me decia que sino no se definian
let score;
let diglettPosition;
let secondsLeft;

//funcion principal init
function init() {
  //Inicializar la posicion de Digglet y el temporizador
  //variables
  diglettPosition = Math.floor(Math.random() * squares.length); //situar a Digglet en algun square random
  secondsLeft = 30;
  score = 0;
  //funciones que importamos a init (mas abajo las creamos):
  //estas funciones seran de actualizar
  updateScore();
  updateDiglettPosition();
  updateTimer();
  //funcion intervalo para mover a Diglett cada 0.5s
  const moveInterval = setInterval(()=>{
    moveDiglett();
  }, 500);//diglett se mueve cada 0.5s
  //funcion temporizador
  const timerInterval = setInterval(() => {
    updateTimer();
  }, 1000); //el temporizador se actualiza cada 1 segundo
  //evento al clicar cada casilla
  squares.forEach((square, index) => {
    //dado un square y un index...
    square.addEventListener("click", () => {
      if (index === diglettPosition) {
        //acierto, se atrapa a diglett
        score++;
        updateScore();
      }
    });
  });
  //funcion cuenta atras (temporizador):
  setTimeout(() => {
    clearInterval(moveInterval); //se limpiara el intervalo de movimiento de diglett
    clearInterval(timerInterval); //se limpiara el intervalo de temporizador
    endGame(); //finaliza el juego
  }, secondsLeft * 1000);
}


//Ahora voy a crear las FUNCIONES SECUNDARIAS A INIT:
//funcion intervalo

//funcion para mover aleatoriamente a Diglett (con Math.random), no confundir con su posicion inicial, que tambien es random, ésta es la de mover y la de actualizar posicion
function moveDiglett() {
  diglettPosition = Math.floor(Math.random() * squares.length);
  updateDiglettPosition();
}
//su funcion "hermana para actualizar la posicion"
function updateDiglettPosition() {
  squares.forEach((square, index) => {
    //dado un square y un index (de cada squares)
    square.style.backgroundImage = index == diglettPosition
      ? "url('https://img.pokemondb.net/sprites/sun-moon/shiny/diglett.png')" //no se me cargaba el archivo de public asi que he puesto un url en linea
      : "url('public/exercise-2/bg.jpg')"; //si se da la condicion aparecera la foto de diglett, sino un square normal
  });
}
//funcion de actualizar el marcador y el temporizador
function updateScore() {
  scoreDisplay.textContent = score; //el score actual pasa a ser el contenido del scoreDisplay (puntuador)
}

function updateTimer() {
  if (secondsLeft === 0) {
    clearInterval(gameInterval);
    endGame();
  } else {
    secondsLeft--; // Restar un segundo y...
    secondsLeftDisplay.textContent = secondsLeft; // El temporizador se actualiza con los segundos restantes
  }
}

//funcion final del juego
function endGame(){
    alert(`Game over! Tu puntuacion es de ${score}`);
}
//finalmente iniciamos el juego llamando a la funcion principal init()
init();

