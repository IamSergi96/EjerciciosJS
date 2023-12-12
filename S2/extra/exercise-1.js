const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
const comedia=[];
const aventura=[];
const accion=[];
const thriller=[];
const animacion=[];
for (let movie of movies){
    if(movie.categories.includes("comedia")){
        comedia.push(movie);
    }else if(movie.categories.includes("aventura")){
        aventura.push(movie);
    }else if(movie.categories.includes("acción")){
        accion.push(movie);
    }else if(movie.categories.includes("thriller")){
        thriller.push(movie);
    }else if(movie.categories.includes("animación")){
        animacion.push(movie);
    }
}
console.log("categoria comedia", comedia);
console.log("categoria aventura", aventura);
console.log("categoria accion", accion);
console.log("categoria thriller", thriller);
console.log("categoria animacion", animacion);

//TODO: preguntar si hay que clasificar por la categoria secundaria

