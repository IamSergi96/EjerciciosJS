let myP = document.createElement("p");
myP.textContent="Voy en medio!";
//he creado el p con el parrafo, ahora usare el querySelectorAll para seleccionar a los dos
//no hago el querySelector porque el insertBefore me lo pondria delante de los dos
let divs = document.querySelectorAll("div");
//obtendré el segundo div usando el indice de su posicion en divs y le inserto el myP
divs[1].parentNode.insertBefore(myP, divs[1]);