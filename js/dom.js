class DOMcarrito {
    constructor() {
    }

    img (src) {

        const img = document.createElement ('img');
        img.classList.add ('img3');
        img.src = src;

        return img;
    }

    h2(nombre) {
        const h2 = document.createElement('h2');
        h2.textContent = nombre;
        h2.classList.add ('p2');
        return h2;
    }

    p(contenido) {
        const p = document.createElement('p');
        p.classList.add ('p3');
        p.textContent = contenido;

        return p;
    }

  
    button(content, className, id) {
        const button = document.createElement('button');
        button.textContent = content;
        button.classList.add(className);
        button.setAttribute('data-id', id);
        return button;    
      }

}