const urlApi = "http://localhost:3000/characters";
const cCharactersDiv = document.querySelector(".c-characters");

//creacion del formulario
const formulario = document.createElement("form");
formulario.classList.add("form");

//como sera la estructura del formulario(los campos de los objetos):
const camposFormulario = [
  { label: "name", type: "text", id: "name", required: true },
  { label: "avatar", type: "text", id: "avatar", required: true },
  { label: "critic", type: "number", id: "critic", required: true },
  { label: "defense", type: "number", id: "defense", required: true },
  { label: "vitality", type: "number", id: "vitality", required: true },
  { label: "damage", type: "number", id: "damage", required: true },
];

camposFormulario.forEach((campo) => {
  //creacion de un input por cada campo (tambien con un label)
  const label = document.createElement("label");
  label.setAttribute("for", campo.id);
  label.textContent = campo.label;

  const input = document.createElement("input");
  input.type = campo.type;
  input.id = campo.id;
  if (campo.required) {
    //para que todos los inputs sean requeridos
    input.required = true;
  }

  //los añadimos al formulario
  formulario.appendChild(label);
  formulario.appendChild(input);
  //agregamos un salto de linea en cada propiedad del objeto que creamos
  formulario.createElement("br");
});

//boton de guardar los datos del formulario
const botonGuardado = document.createElement("button");
botonGuardado.type = "button";
botonGuardado.textContent = "Agregar Personaje";
botonGuardado.addEventListener("click", guardarPersonaje);

//lo agregamos al formulario
formulario.appendChild(botonGuardado);
//agregamos formulario al body del html
cCharactersDiv.appendChild(formulario);

//funcion de guardarPersonaje:
async function guardarPersonaje() {
  try {
    //obtener los valores del formulario
    const name = document.getElementById("name").value;
    const avatar = document.getElementById("avatar").value;
    //los siguientes son int que los tenemos que pasar a string para que el tipo text del input los acepte
    const critic = parseInt(document.getElementById("critic").value);
    const defense = parseInt(document.getElementById(defense));
    const vitality = parseInt(document.getElementById(vitality));
    //damage es un string que combian numeros y letras
    const damage = document.getElementById(damage).value.split(",");

    //al haver recogido las propiedades creamos el objeto nuevo (personaje):
    const nuevoPersonaje = {
      name,
      avatar,
      critic,
      defense,
      vitality,
      damage,
    };
    //seguidamente, se envia el objeto con fetch a la url
    const response = await fetch(urlApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ character: nuevoPersonaje }),
    });
    if (!response.ok) {
      throw new Error("Error en la creación del personaje");
    }
    const data = await response.json();
    console.log("Personaje creado con éxito", data);
  } catch (error) {
    console.error("Error al guardar el personaje", error.message);
  }
}
