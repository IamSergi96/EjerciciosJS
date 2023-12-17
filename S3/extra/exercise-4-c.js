//retomo el ejercicio 4-a
const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];
const miDivPrincipal = document.createElement("div");

countries.forEach(country => {
    const miDivSecundario = document.createElement("div");

    const miTitulo = document.createElement("h4");
    miTitulo.textContent = country.title;

    const miImagen = document.createElement("img");
    miImagen.setAttribute("src", country.imgUrl);
    miImagen.setAttribute("alt", country.title);

    miDivSecundario.appendChild(miTitulo);
    miDivSecundario.appendChild(miImagen);
    miDivPrincipal.appendChild(miDivSecundario);
});
document.body.appendChild(miDivPrincipal);

//empiezo el ejercicio
const botonEliminarSeleccionado = document.querySelector("button");
//creo la funcion para eliminar el country seleccionado
function eliminarSeleccionado (posicion){
    countries.splice(index, 1); //se elimina el pais en la posicion "posicion"
}
botonEliminarSeleccionado.addEventListener("click", eliminarSeleccionado); //le doy la propiedad de eliminar cuando se haga el evento de clicar
