const userAnwsers = [];

function confirmExample(description){
    return confirm(description);
}

function promptExample(description){
    return propmt(description)
}

function father(description, callback){
    const result = callback(description);
    userAnwsers.push(result);
}
father("deseas continuar?", confirmExample);
father("Como te llamas?", promptExample);
console.log(userAnwsers);
