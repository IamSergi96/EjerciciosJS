const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];
const preNewStreamers = streamers.filter(player=> player.gameMorePlayed.includes("League"));
//primero hago un filter() con los objetos que incluyan Legend en su propiedad gameMorePlayed
//lo hago en dos variables porque me parece más senzillo de ver. 
//Ahora hago el cambio a Uppercase si age>35 con .map
const newStreamers = preNewStreamers.map(player => ({...player, gameMorePlayed: player.age>35 ? player.gameMorePlayed.toUpperCase(): player.gameMorePlayed}));
console.log(newStreamers);