function agregarVenta() {
    let producto = document.getElementById("producto").value;
    let precio = parseFloat(document.getElementById("precio").value);
    let cantidad = parseInt(document.getElementById("cantidad").value);

    if (!producto || !precio || !cantidad) {
        alert("Por favor complete todos los campos.");
        return;
    }

    let total = precio * cantidad;

    let tabla = document.getElementById("tablaVentas");

    let fila = `
        <tr>
            <td>${producto}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>${total}</td>
        </tr>
    `;

    tabla.innerHTML += fila;

    // limpia campos
    document.getElementById("producto").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("cantidad").value = "";
}
