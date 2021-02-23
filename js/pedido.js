const carro = new Carrito();


// const procesarPedidoBtn = document.getElementById('procesar-pedido');

cargarEventos();

function cargarEventos() {

    productos.click(function (event) {
        carro.comprarProducto(event)
    });
    carrito.click(function (event) {
        carro.eliminarProducto(event)
    });
    vaciarCarritoBtn.click(function (event) {
        carro.vaciarCarrito(event)
    });

}