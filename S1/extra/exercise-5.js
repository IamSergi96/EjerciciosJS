const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];

let ventas= 0;
for(i=0; i<products.length; i++){
    ventas +=products[i].sellCount;
}
console.log(ventas/products.length);