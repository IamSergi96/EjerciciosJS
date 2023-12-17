const baseUrl = 'https://api.nationalize.io?name=';
document.querySelector("button").addEventListener("click", () =>{
     const valorInput = document.querySelector("input").value;
     fetch(baseUrl)
           .then(response => response.json())
           .then(data =>{
            //creamos aqui el elemento <p>
               const nuevoP = document.createElement("p");
               nuevoP.textContent = `El elemento ${data.name} tiene ${data.count} porciento de ser de ${data.country}`;
               document.body.appendChild(nuevoP);
               //aqui creo los botones con el texto X
               const botonEliminar = document.createElement("button");
               botonEliminar.textContent = "X";
               document.body.appendChild(botonEliminar)
               botonEliminar.addEventListener("click", function(){
                //funcion eliminar nuevoP (p)
                document.body.removeChild(nuevoP);
               })
               

           })
           .catch(error => console.log("Error de petición"));
})
