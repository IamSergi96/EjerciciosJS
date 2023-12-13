const miInput = document.querySelector("input");
//agrego el focus al input
miInput.addEventListener("focus", function(event){
    //la funcion ejecuta el console.log con el valor de input
    console.log("Valor del input:", event.target.value)
})