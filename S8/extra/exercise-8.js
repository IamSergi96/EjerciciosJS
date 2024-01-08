const url = "https://ghibliapi.vercel.app/films";
async function getMovies(){
    try{
        const response = await fetch(url);
        const moviesData = await response.json();
        const galleryContainer = document.createElement("div");
        galleryContainer.classList.add("b-gallery");

        //recorrer los datos de la API
        moviesData.forEach((movie)=>{
            const movieTitle = document.createElement("h2");
            movieTitle.classList.add("b-gallery__title");
            movieTitle.textContent= movie.title;

            const movieImage = document.createElement("img");
            movieImage.src= movie.img;
            movieImage.alt=movie.name;

            const movieDiv = document.createElement("div");
            movieDiv.classList.add("b-gallery__item");

            //agregar a la galeria
            movieDiv.appendChild(movieTitle);
            movieDiv.appendChild(movieImage);
            galleryContainer.appendChild(movieDiv);

        });
        document.body.appendChild(galleryContainer);
    }catch(error){
        console.error("Error al obtener los datos de la API", error);
    }
}