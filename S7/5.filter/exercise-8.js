const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

document.querySelector("button").addEventListener("click", function(){//selecciono el boton y le doy la funcion al evento clicar
    const valorInput = document.querySelector("input").value;//selecciono el input del cual quiero su valor
    const streamersFiltrados = streamers.filter(streamer => streamer.name.includes(valorInput))//filtro de streamers segun el input
    console.log(streamersFiltrados);
});

