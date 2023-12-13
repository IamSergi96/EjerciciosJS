const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
//creo la lista
const paises = document.createElement("ul");
//lo anado al body del html
document.body.appendChild(paises);
//creacion de los li (pais)
countries.forEach(pais => {
    const paisLi = document.createElement("li");
    paisLi.textContent= pais;
    paises.appendChild(paisLi);
})