const questionsType = [
  {
    title: "Gender",
    key: "gender",
    questions: ["Man", "Woman"],
  },
  {
    title: "Hair Color",
    key: "hairColor",
    questions: ["Blonde", "Red", "Pink", "Brown", "White", "Black"],
  },
  {
    title: "Moustache",
    key: "moustache",
    questions: ["Yes", "No"],
  },
  {
    title: "Glasses",
    key: "glasses",
    questions: ["Yes", "No"],
  },
  {
    title: "Hat or Cap",
    key: "hatOrCap",
    questions: ["Yes", "No"],
  },
  {
    title: "Clothes color",
    key: "clothesColor",
    questions: ["Red", "Orange", "Green", "White", "Black", "Pink"],
  },
  {
    title: "Skin color",
    key: "skinColor",
    questions: ["Light", "Dark"],
  },
  {
    title: "Long Hair",
    key: "longHair",
    questions: ["Yes", "No"],
  },
];

const persons = [
  {
    img: "public/exercise-3/001-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Red",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/002-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/003-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Green",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/004-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "Yes",
    clothesColor: "Red",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/005-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/006-man.svg",
    gender: "Man",
    hairColor: "Brown",
    moustache: "Yes",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Green",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/007-man.svg",
    gender: "Man",
    hairColor: "Red",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/008-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/009-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/010-woman.svg",
    gender: "Woman",
    hairColor: "Brown",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Pink",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/011-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/012-woman.svg",
    gender: "Woman",
    hairColor: "Red",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/013-woman.svg",
    gender: "Woman",
    hairColor: "White",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Pink",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/014-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/015-woman.svg",
    gender: "Woman",
    hairColor: "Brown",
    moustache: "No",
    glasses: "Yes",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/016-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "Yes",
    clothesColor: "Pink",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/017-woman.svg",
    gender: "Woman",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/018-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/019-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Red",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/020-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/021-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "Yes",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/022-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "Yes",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/023-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/024-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/025-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Red",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/026-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Red",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/027-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/028-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Pink",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/029-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/030-woman.svg",
    gender: "Woman",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Orange",
    skinColor: "Dark",
    longHair: "No",
  },
  {
    img: "public/exercise-3/031-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Green",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/032-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "Yes",
    hatOrCap: "No",
    clothesColor: "Pink",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/033-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/034-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Pink",
    skinColor: "Dark",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/035-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/036-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/037-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "Yes",
    clothesColor: "Red",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/038-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/039-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "Yes",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Green",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/040-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Red",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/041-man.svg",
    gender: "Man",
    hairColor: "Blonde",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/042-man.svg",
    gender: "Man",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Red",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/043-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Black",
    skinColor: "Light",
    longHair: "Yes",
  },
  {
    img: "public/exercise-3/044-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "Pink",
    skinColor: "Light",
    longHair: "No",
  },
  {
    img: "public/exercise-3/045-woman.svg",
    gender: "Woman",
    hairColor: "Black",
    moustache: "No",
    glasses: "No",
    hatOrCap: "No",
    clothesColor: "White",
    skinColor: "Light",
    longHair: "No",
  },
];

//Aqui empieza el codigo
//variables
const boardGame = document.querySelector('[data-function="boardGame"]');
const questionsContainer = document.querySelector(".b-questions");
const clueCountSpan = document.querySelector('[data-function="clueCount"]');
let selectedPerson;
let clues = 0;

//funcion init principal para iniciar el juego
function init() {
  selectRandomPerson();
  createBoardGame();
  createQuestionsBoard();
}

//creo las funciones secundarias
function selectRandomPerson() {
  selectedPerson = persons[Math.floor(Math.random() * persons.length)];
  console.log("persona seleccionada", selectedPerson);
}

function createBoardGame() {
  boardGame.innerHTML = "";
  persons.forEach((person) => {
    const img = document.createElement("img");
    img.src = person.img;
    img.alt = person.gender;
    img.addEventListener("click", () => checkGuess(person));
    boardGame.appendChild(img);
  });
}

function createQuestionsBoard() {
  questionsContainer.innerHTML = "";
  questionsType.forEach((question) => {
    const questionTitle = document.createElement("h2");
    questionTitle.textContent = question.title;
    questionsContainer.appendChild(questionTitle);

    question.questions.forEach((value) => {
      const button = document.createElement("button");
      button.textContent = value;
      button.addEventListener("click", () =>
        checkAnswer(question.key, value, button)
      );
      questionsContainer.appendChild(button);
    });
  });
}

//funciones terciarias, las que van dentro de las secundarias
function checkAnswer(key, value, button) {
  persons.forEach((person) => {
    if (person !== selectedPerson &&person[key] !== value) {
      console.log("deshabilitando por respuesta incorrecta", person);
      disablePerson(person);
    }
  });

  disableButton(button);
  clues++;
  updateClueCount();
}

function checkGuess(person) {
  if (person === selectedPerson) {
    alert(`¡Felicidades! Has acertado con ${clues} pistas usadas.`);
    resetGame();
  } else {
    alert("Oops... Game Over, prueba de nuevo ;)");
  }
}

//funciones cuaternarias
function disablePerson(person) {
  const personImage = boardGame.querySelector(`[src="${person.img}"]`);
  personImage.style.pointerEvents = "none";
  personImage.style.opacity = "0.1";
  console.log("persona deshab:", person)
}

function disableButton(button) {
  button.disabled = true;
}

function updateClueCount() {
  clueCountSpan.textContent = clues;
}

function resetGame() {
  selectRandomPerson();
  createBoardGame();
  createQuestionsBoard();
  clues = 0;
  updateClueCount();
}

//llamada a la funcion principal
init();
