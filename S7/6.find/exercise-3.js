const aliens = [{name: 'Zalamero', planet: 'Eden', age: 4029},{name: 'Paktu', planet: 'Andromeda', age: 32},{name: 'Cucushumushu', planet: 'Marte', age: 503021}];

const mutations = [{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}];
//he hecho uno con include y otro con asignacion para encontrarlos
const alienCuCu = aliens.find(alien=> alien.name.includes("Cucushumushu"));
const mutationTambor = mutations.find(mutacion => mutacion.name === "Porompompero");
console.log(alienCuCu, mutationTambor);
alienCuCu.mutation = mutationTambor;
console.log(alienCuCu);