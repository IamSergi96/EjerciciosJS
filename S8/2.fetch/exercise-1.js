fetch('https://api.agify.io?name=michael')
     .then(data =>{
        console.log(data);
     })
     .catch(error => console.error("Error al obtener los datos"));
     