const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
//creo la ul
let miLista = document.createElement("ul");
//itero sobre el array de apps
apps.forEach(function(app){
    //creo elemenos li llamados appLI por cada app
    let appLi = document.createElement("li");
    //asigno el texto del elemento app del array al nuevo li
    appLi.textContent= app;
    //agrego el nuevo elemento li con el texto correspondiente a la ul
    miLista.appendChild(appLi);
});
//agrego el ul miLista al body del documento html
document.body.appendChild(miLista);