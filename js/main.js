function agregarCarrito(bandeja) {
    const div = document.createElement('div');

    const nombre = CarritoDom.h2(bandeja.nombre);

    const cantidad = document.createElement('p');
    cantidad.textContent = bandeja.cantidad;

    const precio = document.createElement('p');
    precio.textContent = bandeja.precio;

    const imagen = document.createElement('img');
    imagen.src = bandeja.imagen;


    const boton = document.createElement('button');
    boton.textContent = 'Agregar Producto';
    boton.classList.add('btnAgregar');


    div.appendChild(nombre);
    div.appendChild(cantidad);
    div.appendChild(precio);
    div.appendChild(imagen);
    div.appendChild(boton);

    return div;
}

const CarritoDom = new carritoDom ();

window.addEventListener('load', function () {

    const listadoProductos = document.getElementById('listado-productos')

    bandeja.forEach(function (bandejas) {
        const carrito = agregarCarrito(bandejas);
        listadoProductos.appendChild(carrito);
    })

})