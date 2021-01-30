
window.addEventListener('load', function () {

    const listadoProductos = document.getElementById('listado-productos');

    bandeja.forEach(function (bandejas) {
        const carrito = agregarCarrito(bandejas);
        listadoProductos.appendChild(carrito);
    });
})