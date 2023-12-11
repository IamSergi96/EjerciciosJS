const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];
const pelisPequeñas = [];
const pelisMedianas = [];
const pelisGrandes = [];
for (i=0; i<movies.length; i++){
    if(movies[i].durationInMinutes>200){
        pelisGrandes.push(movies[i].name);
    }else if(movies[i].durationInMinutes>100){
        pelisMedianas.push(movies[i].name);
    }else{
        pelisPequeñas.push(movies[i].name);
    }
}
console.log("pelis grandes:", pelisGrandes, "pelis medianas", pelisMedianas,"pelis pequeñas", pelisPequeñas);