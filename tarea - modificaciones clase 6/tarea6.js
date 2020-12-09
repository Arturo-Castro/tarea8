function crearInput(){
    return document.createElement('input');
}


function crearLabel(){
    return document.createElement('label');
}


function crearBr(){
    return document.createElement('br');
}


function calcularPromedioArray(array){
    let suma = 0;
    let promedio;
    for(let i=0; i<array.length; i++){
        suma += array[i];
    }promedio = suma / array.length;
    return promedio;
}


function obtenerMinimo(array){
    let arrayMinimo = array[0];
    for(let i=1; i<array.length; i++){
        if (array[i] < arrayMinimo){
            arrayMinimo = array[i];
        }  
    }return arrayMinimo;   
    
}


function obtenerMaximo(array){
    let arrayMaximo = array[0];
    for(let i=1; i<array.length; i++){
        if(array[i] > arrayMaximo){
            arrayMaximo = array[i];
        }
    }return arrayMaximo;
}

const cantidadDePersonas = Number(prompt('Cuantas personas son en tu grupo familiar?'));
const nodoPagina1 = document.querySelector('#contenedor1');

for(let i=1; i<=cantidadDePersonas; i++){
    const nuevoTexto = document.createTextNode('Miembro ' + i);
    nodoPagina1.appendChild(crearLabel().appendChild(nuevoTexto));
    nodoPagina1.appendChild(crearInput());
    nodoPagina1.appendChild(crearBr());
}


document.querySelector('#submit').onclick = function(){
    const nodeList = document.querySelectorAll('input');
    const array = [];
    const array2 = [];
    for(let i=0; i<cantidadDePersonas; i++){ //en vez de nodelist.length hacer cantidad de personas.length asi termina la iteracion ahi, dsp poner el resto en otra llista y hacer calculos con esa lista!!
        if(Number(nodeList[i].value) === 0){
            continue;
        }
        array.push(Number(nodeList[i].value)); //ahora iterar con la otra mitad del array correspondiente a salarios
    }
    for(let i=cantidadDePersonas; i<nodeList.length; i++){
        if(Number(nodeList[i].value) === 0){
            continue
        }
        array2.push(Number(nodeList[i].value));
    }
    const nodoPagina2 = document.querySelector('#contenedor-texto');
    const nuevoParrafo = document.createElement('p');
    const nuevoEm = document.createElement('em');
    const texto1 = document.createTextNode(`El promedio es ${calcularPromedioArray(array)}`);
    const texto2 = document.createTextNode(`La edad minima es ${obtenerMinimo(array)}`);
    const texto3 = document.createTextNode(`La edad maxima es ${obtenerMaximo(array)}`);
    const texto4 = document.createTextNode(`El salario promedio es ${calcularPromedioArray(array2)}`);
    const texto5 = document.createTextNode(`El salario minimo es ${obtenerMinimo(array2)}`);
    const texto6 = document.createTextNode(`El salario maximo es ${obtenerMaximo(array2)}`);
    const texto7 = document.createTextNode(`El salario mensual promedio es ${calcularPromedioArray(array2)/12}`);
    nuevoEm.appendChild(texto1);
    nuevoEm.appendChild(crearBr());
    nuevoEm.appendChild(texto2);
    nuevoEm.appendChild(crearBr());
    nuevoEm.appendChild(texto3);
    nuevoEm.appendChild(crearBr());
    nuevoEm.appendChild(texto4);
    nuevoEm.appendChild(crearBr());
    nuevoEm.appendChild(texto5);
    nuevoEm.appendChild(crearBr());
    nuevoEm.appendChild(texto6);
    nuevoEm.appendChild(crearBr());
    nuevoEm.appendChild(texto7);
    nuevoParrafo.appendChild(nuevoEm);
    nodoPagina2.appendChild(nuevoParrafo);
    return false;
}

document.querySelector('#agregar').onclick = function(){
    const nodoPagina3 = document.querySelector('#contenedor2');
    const nuevoTexto2 = document.createTextNode('Salario Anual');
    nodoPagina3.appendChild(crearLabel().appendChild(nuevoTexto2));
    nodoPagina3.appendChild(crearInput());
    nodoPagina3.appendChild(crearBr());
    return false;
}



document.querySelector('#reset').onclick = function(){
    window.location.reload();
}

document.querySelector('#quitar').onclick = function(){
    let contenedor2 = document.querySelector('#contenedor2')
    contenedor2.textContent=''
    return false;
}
