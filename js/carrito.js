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

let armarCarrito = []

window.addEventListener('load', function () {

    const carritoFinal = document.getElementById("carrito-vendido");

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