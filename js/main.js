function agregarCarrito(bandeja) {
    const div = document.createElement('div');

    const nombre = carritoDOM.h2 (bandeja.nombre);

    const cantidad = carritoDOM.p (bandeja.cantidad);

    const precio = carritoDOM.p (bandeja.precio);

    const imagen = carritoDOM.img (bandeja.imagen);

    const boton = carritoDOM.boton ('agregar', 'btnproduct');

    div.appendChild(nombre);
    div.appendChild(cantidad);
    div.appendChild(precio);
    div.appendChild(imagen);
    div.appendChild(boton);

    return div;
}

let carritoDOM = new DOMcarrito;


window.addEventListener('load', function () {

    const listadoProductos = document.getElementById('listado-productos')

    bandeja.forEach(function (bandejas) {
        const carrito = agregarCarrito(bandejas);
        listadoProductos.appendChild(carrito);
    })

})