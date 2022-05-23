const PrecioOriginal = 100;
const descuento = 15;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioCDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioCDescuento)/100;

    return precioConDescuento;
}

console.log("El precio original es," + PrecioOriginal + "");
console.log({
    PrecioOriginal,
    descuento,
    //porcentajePrecioCDescuento,
    //precioConDescuento,
}); 

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const inputDiscount = document.getElementById("InputDiscount");
    const ResultPrice = document.getElementById("ResultPrice");
    const priceValue = inputPrice.value;
    const discountValue = inputDiscount.value;

    ResultPrice.innerText = "El precio con descuento es Q." + calcularPrecioConDescuento(priceValue, discountValue) + ".00.";
}

