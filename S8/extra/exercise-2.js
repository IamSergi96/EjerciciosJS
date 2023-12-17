const apiUrl = "http://localhost:3000/diary"
//creo un div principal
const diario = document.createElement("div")
fetch(apiUrl)
     .then(response => response.json())
     .then(notes => {
        //ordeno con la funcion .sort los objetos a y b, si la diferencia es negativa
        //b es posterior a a, si es positiva a es posterior.
        notes.sort((a,b) => new Date(a.date) - new Date(b.date))
        //creo un div para cada nota de diary
        notes.forEach(note=>{
            const notaDiario = document.createElement("div")
            //elementos h3, h5 y p
            const tituloDiario =  document.createElement("h3")
            tituloDiario.textContent = note.title

            const fechaDiario = document.createElement("h5")
            fechaDiario.textContent = note.date

            const descripcionDiario = document.createElement("p")
            descripcionDiario.textContent = note.description

            //boton para eliminar la nota
            const botonEliminar = document.createElement("button")
            botonEliminar.textContent = "Eliminar nota"
            botonEliminar.addEventListener("click", ()=>{
                //funcion de eliminacion que luego creare
                eliminarNota(note.id);
                diario.removeChild(notaDiario)                
            })
            //agrego los elementos en el div de cada nota
            notaDiario.appendChild(tituloDiario)
            notaDiario.appendChild(fechaDiario)
            notaDiario.appendChild(descripcionDiario)
            notaDiario.appendChild(botonEliminar)

            //lo pongo todo en el div principal
            diario.appendChild(notaDiario)
        })
    })
    .catch(error => console.error("Error", error))

//funcionpara elimianar la nota
const eliminarNota = (idNota) => {
    fetch(`${apiUrl}/${idNota}`, {method: "DELETE" }) //construyo una URL combinando apiUrl y idNota
         .then(response =>{
            if(!response.ok){
                throw new Error (`Error al eliminar la nota`);
            }
            console.log(`Nota con ID ${idNota} eliminada`);
         })
         .catch(error=>console.error("Error:", error));       
}
