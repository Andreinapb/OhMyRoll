const compra = new Carrito();
const listaCompra = document.querySelector("#lista-compra tbody");
const carrito = $('#carrito');
const procesarCompraBtn = $('#procesar-compra');
const cliente = $('#cliente');
const correo = $('#correo');


cargarEventos();

function cargarEventos() {
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());

    carrito.click(function (event) {
        compra.eliminarProducto(event)
    });

    compra.calcularTotal();

    procesarCompraBtn.click(function (event) {
        procesarCompra(event)
    });

    carrito.change(function (event) {
        compra.obtenerEvento(event)
    });
}

function procesarCompra(e) {
    e.preventDefault();
    if (compra.obtenerProductosLocalStorage().length === 0) {
        alert('Por favor agregar productos');
        setTimeout(() => {
            location.href = "carrito.html"
        }, 1000);
    } else {
        {
            alert('Su pedido fue enviado con éxito');
            setTimeout(() => {
                localStorage.clear();
                location.href = "index.html"
            }, 1000);
        }
    }
}