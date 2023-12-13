const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const divDeAtaque = document.querySelector('[data-function="printHere"]');
const listaCoches = document.createElement("ul");
//creacion de li para cada coche
cars.forEach(coche =>{
    const elementoLi = document.createElement("li")
    elementoLi.textContent = coche;
    listaCoches.appendChild(elementoLi);
});
//agrego la lista ul con li a body
divDeAtaque.appendChild(listaCoches);
