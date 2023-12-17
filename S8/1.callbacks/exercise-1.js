const numbersList = [];

function sum(a,b){
    return a + b;
}

function substract(a,b){
    return a - b;
}

function father(a, b, callback){
    const result = callback(a,b)
    numbersList.push(result);
}


father(2,3,substract);
father(1,4,substract);
father(2,5,sum);
father(6,9,sum);
father(0,8,substract);
console.log(numbersList);

