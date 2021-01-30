function agregarCarrito(bandeja) {
    const imagen = carritoDOM.img(bandeja.imagen);
    const div = document.createElement('div');
    const nombre = carritoDOM.h2(bandeja.nombre);
    const cantidad = carritoDOM.p(bandeja.cantidad,);
    const precio = carritoDOM.p(bandeja.precio);
    const boton = carritoDOM.button('seleccionar', 'select', bandeja.id);

    div.appendChild(imagen);
    div.appendChild(nombre);
    div.appendChild(cantidad);
    div.appendChild(precio);
    div.appendChild(boton);

    return div;
};

function selectproduct(event) {
    const idProduct = event.target.dataset.id;
    productoAgregado = bandeja.find(function (producto) {
        if (producto.id == idProduct) {
            return producto
        }
    })
    armarCarrito.push(productoAgregado)
    localStorage.setItem('ProductosCarrito', JSON.stringify(armarCarrito));
;}

let carritoDOM = new DOMcarrito;
let armarCarrito = []

window.addEventListener('load', function () {

    const listadoProductos = document.getElementById('listado-productos');
    const carritoFinal = document.getElementById("carrito-vendido");


    bandeja.forEach(function (bandejas) {
        const carrito = agregarCarrito(bandejas);
        listadoProductos.appendChild(carrito);
    });

    const card = JSON.parse(localStorage.getItem('ProductosCarrito'));
    console.log(card);
    if (card) {
        card.forEach(function (producto) {
            const carrito = agregarCarrito(producto);
            carritoFinal.appendChild(carrito);
        });
    };

    const bntselect = document.querySelectorAll('.select');
    bntselect.forEach(function (select) {
        select.addEventListener('click', selectproduct)
    })
});