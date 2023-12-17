const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];
//primero damos pillamos el input
const inputIncluye = document.querySelector("input");
//le damos un event listener
inputIncluye.addEventListener("input", function(){
    const filteredStreamers = streamers.filter(streamer =>streamer.name.includes(inputIncluye.value));
    console.log(filteredStreamers);
});

