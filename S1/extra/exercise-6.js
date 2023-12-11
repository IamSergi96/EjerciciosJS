const goodProducts = [];
const badProducts = [];
const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];
for(i=0; i< products.length; i++){
    if(products[i].sellCount>20){
        goodProducts.push(products[i].name);
    }else{
        badProducts.push(products[i].name);
    }
}
console.log("Son malos productos:", badProducts, "mientras que son buenos productos", goodProducts);