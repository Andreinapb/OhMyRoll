class Carrito {

    comprarProducto(event) {
        event.preventDefault();
        if (event.target.classList.contains('agregar-carrito')) {
            const producto = event.target.parentElement.parentElement;
            this.leerDatosProducto(producto);
        }
    }

    leerDatosProducto(producto) {
        const infoProducto = {
            imagen: producto.querySelector('img').src,
            titulo: producto.querySelector('h5').textContent,
            precio: producto.querySelector('p').textContent,
            id: producto.querySelector('button').getAttribute('data-id'),
            cantidad: 0
        }
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function (productoLS) {
            if (productoLS.id === infoProducto.id) {
                productosLS = productoLS.id;
            }
        });

        if (productosLS === infoProducto.id) {
            alert('Producto ya agregado')
        } else {
            this.insertarCarrito(infoProducto);
        }

    }

    insertarCarrito(producto) {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src="${producto.imagen}" width=100>
        </td>
        <td>${producto.titulo}</td>
        <td>${producto.precio}</td>
        <td>
            <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}">x</a>
        </td>
    `;
        listaProductos.appendChild(row);
        this.guardarProductosLocalStorage(producto)

    }

    eliminarProducto(event) {
        event.preventDefault();
        let producto, productoID;
        if (event.target.classList.contains('borrar-producto')) {
            event.target.parentElement.parentElement.remove();
            producto = event.target.parentElement.parentElement;
            productoID = producto.querySelector('a').getAttribute('data-id');
        }
        this.eliminarProductoLocalStorage(productoID)
    }

    vaciarCarrito(e) {
        e.preventDefault();
        while (listaProductos.firstChild) {
            listaProductos.removeChild(listaProductos.firstChild);
        }
        this.vaciarLocalStorage();

        return false;
    }

    guardarProductosLocalStorage(producto) {
        let productos;
        productos = this.obtenerProductosLocalStorage();
        productos.push(producto);
        localStorage.setItem('productos', JSON.stringify(productos));
    }

    obtenerProductosLocalStorage() {
        let productoLS;
        if (localStorage.getItem('productos') === null) {
            productoLS = [];
        } else {
            productoLS = JSON.parse(localStorage.getItem('productos'));
        }
        return productoLS;
    }

    eliminarProductoLocalStorage(productoID) {
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function (productoLS, index) {
            if (productoLS.id === productoID) {
                productosLS.splice(index, 1);
            }
        });
        localStorage.setItem('productos', JSON.stringify(productosLS));
    }

    leerLocalStorage() {
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function (producto) {
            //Construir plantilla
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <img src="${producto.imagen}" width=100>
                </td>
                <td>${producto.titulo}</td>
                <td>${producto.precio}</td>
                <td>
                <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}">x</a>
                </td>
            `;
            listaProductos.appendChild(row);
        });
    }
    vaciarLocalStorage() {
        localStorage.clear();
    }

    procesarPedido(event) {
        event.preventDefault();

        if (this.obtenerProductosLocalStorage().length === 0) {
            alert('Por favor agrega un producto')
        } else {
            location.href = "compra.html";
        }
    }
    
    }
