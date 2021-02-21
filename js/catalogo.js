let tarjeta = ""
let contenidoBandeja = []
let carrito = []
let objetoCarrito = ""

function cargoTarjeta() {
    $.ajax({
        url: "json/bandeja.json",
        dataType: "json",
        success: function (contenidoBandeja) {
            localStorage.contenidoBandeja = JSON.stringify(contenidoBandeja)
            $.each(contenidoBandeja, function (i) {
                tarjeta +=
                    `<div class="card col-6 col-lg-3 tarjeta" style="width: 18rem;">
                <img src="${contenidoBandeja[i].imagen}" class="card-img-top imagen" alt="..." >
                <div class="card-body" >
                <h5 class="card-title"> ${contenidoBandeja[i].nombre} + ${contenidoBandeja[i].cantidad}</h5> 
                <p class="card-text"> ${contenidoBandeja[i].precio} </p>
                <button class="btn btn-dark" onclick="agregarBandeja(${contenidoBandeja[i].id})"><i class=""></i>Agregar</button>
                <button class="btn btn-dark" onclick="quitarBandeja(${contenidoBandeja[i].id})"><i class=""></i>Quitar</button>
                 </div> 
                 </div>`
            })
            $("#catalogo-productos").html(tarjeta)
            itemsEnCarrito()
        },
        error: function () {
            console.error(`Ocurrió un error`)
            tarjeta = `<div class="container"> 
                        <h4>Sus rolls se estan horneando, regrese de nuevo en unos minutos</h4> 
                     </div>`
            $("#catalogo-productos").html(tarjeta)
        }
    })
}

setTimeout(() => {
    cargoTarjeta()
    $('#catalogo-productos').fadeIn(5000)
})

function itemsEnCarrito() {
    let leyendacarrito = "TOTAL DE BANDEJAS EN SU CARRITO:"
    $("#itemscarrito").text(`${leyendacarrito} ${carrito.length}`)
}

function agregarBandeja(id) {
    carrito.push(id)
    localStorage.setItem('Carrito', JSON.stringify(carrito));
    itemsEnCarrito()
}

function quitarBandeja(id) {
    let filtro = carrito.find(c => c == id)
    if (id == carrito.id) {
        carrito.splice(id, 1);
        localstorage.removeItem('Carrito')
        itemsEnCarrito()
    }

}

function quitarBandeja (id) {
    let filtro = carrito.find(c => c == id)
        if (filtro == id) { carrito.splice(id, 1);
            itemsEnCarrito()
        } else { //puedo agregarlo
            alert("usted no agregó este producto")
            itemsEnCarrito()
        }
}

console.log(quitarBandeja)


$document.ready(function () {
    setTimeout()
})