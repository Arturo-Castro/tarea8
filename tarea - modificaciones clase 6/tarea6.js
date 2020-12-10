function crearInput() {
    return document.createElement('input');
}


function crearLabel() {
    return document.createElement('label');
}


function crearBr() {
    return document.createElement('br');
}


function calcularPromedioArray(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma / array.length; 
}


function obtenerMinimo(array) {
    let numeroMinimo = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < numeroMinimo) {
            numeroMinimo = array[i];
        }
    }
    return numeroMinimo;

}


function obtenerMaximo(array) {
    let numeroMaximo = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > numeroMaximo) {
            numeroMaximo = array[i];
        }
    }
    return numeroMaximo;
}

const numeroDePersonas = Number(prompt('Cuantas personas son en tu grupo familiar?'));
const nodoContenedorEdades = document.querySelector('#contenedor-edades');

for (let i = 1; i <= numeroDePersonas; i++) {
    const nuevoTexto = document.createTextNode('Miembro ' + i);
    nodoContenedorEdades.appendChild(crearLabel().appendChild(nuevoTexto));
    nodoContenedorEdades.appendChild(crearInput());
    nodoContenedorEdades.appendChild(crearBr());
}


document.querySelector('#submit').onclick = function() {
    const nodeList = document.querySelectorAll('input');
    const arrayEdades = [];
    const arraySalarios = [];
    for (let i = 0; i < numeroDePersonas; i++) {
        if (Number(nodeList[i].value) === 0) {
            continue;
        }
        arrayEdades.push(Number(nodeList[i].value));
    }
    for (let i = numeroDePersonas; i < nodeList.length; i++) {
        if (Number(nodeList[i].value) === 0) {
            continue
        }
        arraySalarios.push(Number(nodeList[i].value));
    }

    document.querySelectorAll('#contenedor-texto p').forEach(function(p) {
        p.remove();
    })

    const nodoContenedorTexto = document.querySelector('#contenedor-texto');
    const contenedorTextoParrafo = document.createElement('p');
    const contenedorTextoEm = document.createElement('em');
    const textoPromedioEdades = document.createTextNode(`El promedio es ${calcularPromedioArray(arrayEdades)}`);
    const textoEdadMinima = document.createTextNode(`La edad minima es ${obtenerMinimo(arrayEdades)}`);
    const textoEdadMaxima = document.createTextNode(`La edad maxima es ${obtenerMaximo(arrayEdades)}`);
    const textoSalarioPromedio = document.createTextNode(`El salario promedio es ${calcularPromedioArray(arraySalarios)}`);
    const textoSalarioMinimo = document.createTextNode(`El salario minimo es ${obtenerMinimo(arraySalarios)}`);
    const textoSalarioMaximo = document.createTextNode(`El salario maximo es ${obtenerMaximo(arraySalarios)}`);
    const textoSalarioMensualPromedio = document.createTextNode(`El salario mensual promedio es ${calcularPromedioArray(arraySalarios)/12}`);
    contenedorTextoEm.appendChild(textoPromedioEdades);
    contenedorTextoEm.appendChild(crearBr());
    contenedorTextoEm.appendChild(textoEdadMinima);
    contenedorTextoEm.appendChild(crearBr());
    contenedorTextoEm.appendChild(textoEdadMaxima);
    contenedorTextoEm.appendChild(crearBr());
    contenedorTextoEm.appendChild(textoSalarioPromedio);
    contenedorTextoEm.appendChild(crearBr());
    contenedorTextoEm.appendChild(textoSalarioMinimo);
    contenedorTextoEm.appendChild(crearBr());
    contenedorTextoEm.appendChild(textoSalarioMaximo);
    contenedorTextoEm.appendChild(crearBr());
    contenedorTextoEm.appendChild(textoSalarioMensualPromedio);
    contenedorTextoParrafo.appendChild(contenedorTextoEm);
    nodoContenedorTexto.appendChild(contenedorTextoParrafo);
    return false;
}

document.querySelector('#agregar').onclick = function() {
    const nodoContenedorSalarios = document.querySelector('#contenedor-salarios');
    const textoLabel = document.createTextNode('Salario Anual');
    nodoContenedorSalarios.appendChild(crearLabel().appendChild(textoLabel));
    nodoContenedorSalarios.appendChild(crearInput());
    nodoContenedorSalarios.appendChild(crearBr());
    return false;
}



document.querySelector('#reset').onclick = function() {
    window.location.reload();
}

document.querySelector('#quitar').onclick = function() {
    const nodoContenedorSalarios = document.querySelector('#contenedor-salarios')
    nodoContenedorSalarios.textContent = ''
    return false;
}
