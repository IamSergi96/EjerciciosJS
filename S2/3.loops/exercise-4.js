const toys = [{id: 5, name: 'Buzz MyYear'}, {id: 11, name: 'Action Woman'}, {id: 23, name: 'Barbie Man'}, {id: 40, name: 'El gato con Guantes'},{id: 40, name: 'El gato felix'}]
const newToys=[];
for(const toy of toys){
    if(!toy.name.includes("gato")){
        newToys.push(toy);
    }
}
console.log(newToys);




//lo hice asi antes pero creo que al eliminar modificaba el length de toys y no me eliminaba "el gato felix"
//for(const toy of toys){
//   if(toy.name.includes("gato")){
//        toys.splice(toys.indexOf(toy),1);
//    }
//}
//console.log(toys);