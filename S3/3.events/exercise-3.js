const miInput = document.querySelector("input");
miInput.addEventListener("input", function(event){
    console.log("Valor del input", event.target.value);
});
