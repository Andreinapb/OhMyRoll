let tarjeta = ""
let contenidoBandeja = []


function cargoTarjeta() {
    $.ajax({
        url: "json/bandeja.json",
        dataType: "json",
        success: function (contenidoBandeja) {
            // localStorage.contenidoBandeja = JSON.stringify(contenidoBandeja)
            $.each(contenidoBandeja, function (i) {
                tarjeta +=
                    `<div class="card col-6 col-lg-3 tarjeta" style="width: 18rem;">
                <img src="${contenidoBandeja[i].imagen}" class="card-img-top imagen" alt="..." >
                <div class="card-body" >
                <h5 class="card-title"> ${contenidoBandeja[i].nombre} + ${contenidoBandeja[i].cantidad}</h5> 
                <p class="card-text"> ${contenidoBandeja[i].precio} </p>
                <button class="btn btn-dark agregar-carrito" data-id="${contenidoBandeja[i].id}" ><i class=""></i>Agregar</button>
                 </div> 
                 </div>`
            })
            $("#catalogo-productos").html(tarjeta)
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
    cargoTarjeta ()
}, 1000);

$(document).ready(setTimeout)
