function findArrayIndex(array, text){
    for(let i= 0; i<array.length;i++){
        if(array[i]===text){
            return i;
        }
    }
}

function removeItem(array, text){
    const index = findArrayIndex(array, text);
    if (index >= 0){
    array.splice(index, 1);
    }
    console.log (array);
    
}
//Pruebas
const arrayUno=['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
const arrayDos=['Mosca', 'Caballo', 'Zebra', 'Mono'];
const textUno = 'Salamandra';
const textDos = 'Mono';

removeItem(arrayUno,textUno);
removeItem(arrayDos,textUno);
removeItem(arrayUno,textDos);
removeItem(arrayDos,textDos);