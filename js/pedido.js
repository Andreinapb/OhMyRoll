const carrito = $("#carrito");
const productos = $("#catalogo-productos");
const listaProductos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn =$("#vaciar-carrito");
const procesarPedidoBtn = $('#procesar-pedido');

const carro = new Carrito();


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
 
    listaProductos.change(function (event) {
        carro.obtenerEvento(event)
    });

    document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());
}