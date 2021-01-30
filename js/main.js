function agregarCarrito(bandeja) {
    const div = document.createElement('div');

    const nombre = carritoDOM.h2(bandeja.nombre);

    const cantidad = carritoDOM.p(bandeja.cantidad);

    const precio = carritoDOM.p(bandeja.precio);

    const imagen = carritoDOM.img(bandeja.imagen);

    const boton = carritoDOM.button('seleccionar', 'select', bandeja.id);

    div.appendChild(nombre);
    div.appendChild(cantidad);
    div.appendChild(precio);
    div.appendChild(imagen);
    div.appendChild(boton);

    return div;
};

function selectproduct(event) {
    const idProduct = event.target.dataset.id; 
    productoAgregado = bandeja.find (function(producto){
        if (producto.id == idProduct) {
            return producto}
    })
    console.log (productoAgregado);
}

let carritoDOM = new DOMcarrito;

let productoAgregado = [];



window.addEventListener('load', function () {

    const listadoProductos = document.getElementById('listado-productos')

    bandeja.forEach(function (bandejas) {
        const carrito = agregarCarrito(bandejas);
        listadoProductos.appendChild(carrito);
    });

    const bntselect = document.querySelectorAll('.select');

    bntselect.forEach(function (select) {
        select.addEventListener('click', selectproduct)
    })

})