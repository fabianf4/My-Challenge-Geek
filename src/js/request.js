const url = "http://localhost:3000/productos";

export function getProductos() {
return fetch(url).then(res => {
    return res.json()
})
}

export function newProduct(product) {
    const {nombre, precio, imagen} = product
    return fetch(url, {method: "POST", body: JSON.stringify({ nombre, precio, imagen})}).then(res => res.json())
}
export function deleteProduct(id) {
    return fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })
}