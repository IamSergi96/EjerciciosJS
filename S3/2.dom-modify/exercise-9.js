let misDivs= document.querySelectorAll(".fn-insert.here");
misDivs.forEach(function(div){
    //creo el elemento p y le asigno el texto "Voy dentro!"
    let miP = document.createElement("p");
    miP.textContent = "Voy dentro!";
    //ahora s elo agrego a cada div
    div.appendChild(miP);
});
