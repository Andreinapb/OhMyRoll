class DOMcarrito {
    constructor() {

    }
    h2(nombre) {
        const h2 = document.createElement('h2');
        h2.textContent = nombre;
        return h2;
    }

    p(contenido) {
        const p = document.createElement('p');
        p.textContent = contenido;

        return p;
    }

    img (src) {

        const img = document.createElement ('img');
        img.src = src;

        return img;
    }

    boton (click,clase) {
        const boton = document.createElement ('button');
        boton.textContent = click;
        boton.classList.add = (clase);

        return boton;

    }

}