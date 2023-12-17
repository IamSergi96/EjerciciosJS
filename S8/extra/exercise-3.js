const urlOrders = "http://localhost:3000/orders";
const urlProducts = "http://localhost:3000/products";
//obtencion lista de pedidos
fetch(urlOrders)
     .then(response=>response.json())
     .then(orders=>{ //ordernar por fecha de mas reciente a mas lejano
        orders.sort((a,b)=> new Date(b.date)- new Date(a.date));

        //iterar sobre cada pedido
        orders.forEach(order =>{
            const divOrder = document.createElement("div");
            
            const infoOrder = document.createElement("p");
            infoOrder.textContent = `Fecha del pedido: ${order.date}`;

            //iterar sobre productos en cada pedido
            order.product.forEach(product=>{
                fetch(`${urlProducts}/${product.id}`)//template literals (construyo dinamicamente una URL de solicitud concatenando los productos con el id del producto)
                     .then(response => response.json())
                     .then(infoProduct =>{
                        const infoProductP = document.createElement("p")
                        infoProductP.textContent = `Producto: ${infoProduct.name}, Cantidad: ${infoProduct.quantity}`
                        divOrder.appendChild(infoProductP)
                     })
                     .catch(error =>console.error("Error de obtención de info del producto", error))
            })
            //finalmente agrego el divOrder al body
            document.body.appendChild(divOrder);
            
        })
     })
     .catch(error =>console.error("Error al obtener los pedidos", error));