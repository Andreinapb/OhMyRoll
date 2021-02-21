class shoppingCart {
    constructor(carrito, bandejas) {
        let subtotal = 0
        this.carrito = carrito
        this.bandejas = bandejas
        this.verCarrito = function(checkout) {
            let compra = ""
            for (let i in this.carrito) {
                let r = bandejas.find(c => c.bandeja.id === carrito[i])
                    grilla += `<tr>
                                <td>${r.nombre}</td>
                                <td>${r.horas}</td>
                                <td class="right">$ ${r.precio}</td>
                            </tr>`
                    subtotal += r.precio
                }
            grillaCheckout.innerHTML = grilla
        }
        this.verTotales = function(grillaTotales) {
            let grilla = `<tr><td>SUBTOTAL</td><td class="right">$ ${this.subtotal().toFixed(0)}</td></tr>
                          <tr><td>DESCUENTO</td><td class="right">-$ ${this.aplicoDescuento().toFixed(0)}</td></tr>
                          <tr class="blue lighten-4"><td>TOTAL</td><td class="right">$ ${this.total().toFixed(0)}</td></tr>`
                grillaTotales.innerHTML = grilla
        }
        this.subtotal = function() {
            return subtotal
        }
        this.aplicoDescuento = function() {
            switch (this.carrito.length) {
                case 1: //aplico un 5%
                    return (subtotal - (subtotal * 0.95))
                    break
                case 2: //aplico un 20%
                    return (subtotal - (subtotal * 0.80))
                    break
                case 3: //aplico un 30%
                    return (subtotal - (subtotal * 0.70))
                    break
                case 4: //aplico un 40%
                    return (subtotal - (subtotal * 0.60))
                    break
                default:
                    return (subtotal)
            }
        }
        this.total = function() {
            return Number(subtotal - this.aplicoDescuento())
        }
    }
}