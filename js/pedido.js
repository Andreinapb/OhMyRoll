const carrito = $("#carrito");
const productos = $("#catalogo-productos");
const listaProductos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn =$("#vaciar-carrito");
const procesarPedidoBtn = $('#procesar-pedido');

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

    procesarPedidoBtn.click(function (event) {
        carro.procesarPedido(event)
    });

    document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());
}