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

    button(content, className, id) {
        const button = document.createElement('button');
        button.textContent = content;
        button.classList.add(className);
        button.setAttribute('data-id', id);
        return button;    
      }

}