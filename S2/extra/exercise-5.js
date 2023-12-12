function rollDice(caras){
    console.log(Math.floor((Math.random()*caras)+1));
}
//le sumo +1 porque no puede haver cara 0

rollDice(6);
rollDice(8);
rollDice(16);