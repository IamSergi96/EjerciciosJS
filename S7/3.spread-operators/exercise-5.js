const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const newColors = [...colors];
newColors.splice(1,1); //he supuesto que la posicion 2 se refiere al array, pues es el indice 1.
console.log(newColors);
