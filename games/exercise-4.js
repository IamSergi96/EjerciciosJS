//creacion de variables: importamos las imagenes, hacemos el tablero y los intentos, la columna y la fila del tesoro
const imgXUrl = './public/exercise-4/x.png';
const imgChestUrl = './public/exercise-4/chest.png';
const imgSkullUrl = './public/exercise-4/skull.png';

const board = document.querySelector('tbody');
const attempts = document.querySelector('span');

let attemptsCount = 0;

//usaremos prompt() para obtener las columnas y las finas del jugador
let rows = parseInt(prompt("Cuantas filas quieres?"));
let columns = parseInt(prompt("Cuantas columnas quieres?"));

//colocar el tesoro en posicion random con Math.random
let treasureRow = Math.floor(Math.random()*rows);
let treasureColumn = Math.floor(Math.random()*columns);

//creamos el tablero de juego
for(let i = 0; i<rows; i++){
    const gameRow = document.createElement("tr"); //elemento tr para tablas Table Row
    for(let j=0; j<columns; j++){
        const cell = document.createElement("td"); //elemento td para tablas Table Data
        cell.addEventListener("click", () => checkCell(i, j)); //creamos evento click en cada celda, con fucion que hacemos mas abajo
        cell.classList.add("cell")
        gameRow.appendChild(cell);
    }
    board.appendChild(gameRow);
}

//funcion checkCell
function checkCell(i, j){
    attemptsCount++; //que sume +1 en los intentos
    attempts.textContent= attemptsCount; //y lo mostramos en el marcador de attempts
    if(i === treasureRow && j === treasureColumn){
        revealTreasure(); //funcion que haremos mas adelante
    }else{
        revealSkull(i, j); //funcion que haremos mas adelante
    }
}

//funciones reveal (tesoro y calavera)
function revealTreasure(){
    const treasureCell = board.rows[treasureRow].cells[treasureColumn];
    console.log("Treasure Row:", treasureRow);
    console.log("Treasure Column:", treasureColumn);
    treasureCell.innerHTML = `<img src="${imgChestUrl}" alt="Chest">`;
    //debo hacer un TimeOut porque primero sale el alert y luego se reinicia el juego, asi que no da tiempo a que salga la imagen del tesoro
    setTimeout(()=>{ //ahora si funciona
        alert(`Enhorabuena! El tesoro es tuyo! Lo has conseguido en ${attemptsCount} intentos!`);
        resetGame();//funcion que haremos mas adelante
    },100)
}

function revealSkull(row, column){
    const skullCell = board.rows[row].cells[column];
    skullCell.innerHTML = `<img src="${imgSkullUrl}" alt="Skull">`;
}

//resetear el juego
function resetGame(){
    //resetear variables
    attemptsCount=0;
    attempts.textContent = attemptsCount;
    //resetear imagenes de las celdas
    for(let i=0; i<rows;i++){
        for(let j=0; j<columns;j++){
            let clearCell = board.rows[i].cells[j];
            clearCell.innerHTML= "";
        }
    }
    //nuevas posiciones del tesoro:
    treasureRow = Math.floor(Math.random()*rows);
    treasureColumn = Math.floor(Math.random()*columns);
}
const images = document.querySelectorAll("img");
images.classList.add("images");

