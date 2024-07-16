export function crearCard(producto) {
  const {nombre, precio, imagen, id} = producto
    return `<div class="card" id=${id}>
                    <img class="card-imagen" src=${imagen} />
                    <div class="card-nombre">
                      <p>${nombre}</p>
                      <div class="card-precio">
                        <p>${precio}</p>
                        <button data-id=${id} class="card-delete">
                        <i class="gg-trash"></i>
                        </button>
                      </div>
                    </div>
                 </div>`
}

