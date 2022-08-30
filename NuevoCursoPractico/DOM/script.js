console.log('Hello, World');

function decirhola() {
    console.log('Saludos');
}

//const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

//console.log(h1);

console.log({
    //h1,
    p,
    parrafito,
    pid,
    input,
});

//h1.innerHTML = 'Patito <br> prueba';

//h1.getAttribute('pantalla')
//console.log(h1.getAttribute('pantalla'));
//h1.setAttribute('class', 'rojo');
//h1.classList.add('rojo');
//h1.classList.remove('verde');

//h1.classList.add('rojo');
//h1.classList.remove('verde');
//h1.classList.toggle('verde');
//h1.classList.contains('verde');

// con el elemento input no debemos de obtener su atributo, sino directamente podemos acceder a su value.
//input.value = "456";

console.log(document.createElement('img'));
console.log(document.createElement('span'));

const img = document.createElement('img');
img.setAttribute('src', 'https://cdn.motor1.com/images/mgl/v9e9Y/s1/lanzamiento-lexus-is-2021.jpg');
console.log(img);

img.height = 525;
//pid.append(img);
//pid.innerHTML = "",
pid.appendChild(img);


const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');

//  escuchar eventos de html desde js
//btn.addEventListener('click', btnOnClick);
form.addEventListener('submit', sumarInputValues);

function cambioInput() {
    console.log('cambio el input');
}

function sumarInputValues(event) {
    console.log({event});
    event.preventDefault();
    const sumaInputs = parseInt(input1.value ) + parseInt(input2.value);
    pResult.innerText= "Resultado: " + sumaInputs;
    console.log('click del boton');
    console.log(sumaInputs);
}

