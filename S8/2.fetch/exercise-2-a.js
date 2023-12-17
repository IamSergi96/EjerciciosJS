const baseUrl = 'https://api.nationalize.io?name=';
document.querySelector("button").addEventListener("click", () =>{
     const valorInput = document.querySelector("input").value;
     fetch(baseUrl)
           .then(response => response.json())
           .then(data =>{
               console.log(data);
           })
           .catch(error => console.log("Error al obtener los datos"));
})
