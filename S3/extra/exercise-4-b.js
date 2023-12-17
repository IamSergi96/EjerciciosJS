//retomo todo lo previo en el ejercicio 4-a
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
const miBoton = document.querySelector("button");
//voy a crear la funcion de borrar el ultimo elemento de la lista
function eliminarElUltimo(){
    countries.pop();
}
//voy a otorgarle la habiliad a miBoton para usar la funcion al ser clicado (evento)
miBoton.addEventListener(click, eliminarElUltimo);