//Código de lcuadrado.
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm.");

const PerimetroCuadrado = ladoCuadrado*4;
console.log("El perímetro del cuadrado es: " + PerimetroCuadrado + " cm.");

const areaCuadrado = ladoCuadrado*ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + " cm^2");

console.groupEnd();

//Encapsulando código en funciones.
function perimetroCuadrado(lado) {
    return lado * 4;
}

function CalcularPerimetroCuadrado() {
    //return medida*4;
    const input = document.getElementById("TxtMedida");
    var resultado = document.getElementById("TxtResultado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    //TxtResultado.innerHTML(perimetro);
    resultado.value = perimetro;
    //input.value = perimetroCuadrado(value);
    alert("El perimetro del cuadrado es  " + perimetro);
}

function CalcularAreaCuadrado(medida) {
    //const area = document.getElementById("TxtArea");
    //area.value = medida*medida;
    //document.getElementById("TxtArea").innerText("holaMundo");
    var resultado = document.getElementById("TxtArea");
    
    TxtArea.value = medida*medida;
    alert("El área del cuadrado es " + medida*medida);
}
