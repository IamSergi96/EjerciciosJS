function findArrayIndex(array, text){
    for(let i= 0; i<array.length;i++){
        if(array[i]===text){
            console.log(i);
            return i;
        }
    }
}

//Pruebas
const arrayUno=['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
const arrayDos=['Mosca', 'Caballo', 'Zebra', 'Mono'];
const textUno = 'Salamandra';
const textDos = 'Mono';

findArrayIndex(arrayUno,textUno);
findArrayIndex(arrayDos,textUno);
findArrayIndex(arrayUno,textDos);
findArrayIndex(arrayDos,textDos);