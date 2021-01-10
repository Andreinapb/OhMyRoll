class Carrito {
    producto = '';
    precio = 0;
    cantidadPedida = 0;

    constructor(producto, precio, cantidadPedida) {
        this.producto = producto;
        this.precio = precio;
        this.cantidadPedida = cantidadPedida;
    }

    tomarOrden(cantidadPedida, precio) {
        let precioFinal = this.cantidadPedida * this.precio;
        console.log('su pedido es' + ' ' + this.cantidadPedida + ' ' + this.producto + '=' + precioFinal + ' '+ 'pesos')

    }
}

let pedido1= new Carrito ('bandeja de 6 Rolls', 300, 3);
pedido1.tomarOrden();
let pedido2= new Carrito ('bandeja de 12 Rolls', 900, 2);
pedido2.tomarOrden();