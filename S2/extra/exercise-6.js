function swap(array, indUno, indDos){
    const change = array[indUno];
    array[indUno]=array[indDos];
    array[indDos]= change;
    console.log(array);
}

const arrayUno=['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];
swap(arrayUno, 1,3);