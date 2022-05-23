const PrecioOriginal = 100;
const descuento = 15;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioCDescuento = 100 - descuento;
    const precioConDescuento = (PrecioOriginal * porcentajePrecioCDescuento)/100;

    return precioConDescuento;
}



console.log("El precio original es," + PrecioOriginal + "");
console.log({
    PrecioOriginal,
    descuento,
    porcentajePrecioCDescuento,
    precioConDescuento,
});

