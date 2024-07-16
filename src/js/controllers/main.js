import { crearCard } from "../card.js";
import { deleteProduct, getProductos, newProduct } from "../request.js";

const productosHtml = document.querySelector("#productos");
const formulario = document.querySelector("#formulario");
let eliminarBotones;


const render = () => { 
    getProductos().then( productos => productosHtml.innerHTML =  mostrarProductos(productos)).then(() => {
        eliminarBotones = document.querySelectorAll(".card-delete")
        eliminarBotones.forEach(eliminarBoton => {
            eliminarBoton.addEventListener("click", evento => {
                evento.preventDefault()
                let id = evento.target.dataset.id;
                deleteProduct(id).then(res => render())
            });
        })
    })
} 
function mostrarProductos(productos) { 
    let html = ``
    productos.forEach(producto => {
        html += crearCard(producto)
    });
    return html
}
function addCard(evento) {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;
    const product = {nombre, precio, imagen}
    newProduct(product).then(nuevo => productosHtml.innerHTML+= crearCard(nuevo))
}

formulario.addEventListener("submit", evento => addCard(evento));
formulario.addEventListener("reset", evento => evento)

render();
