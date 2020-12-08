const $form = document.querySelector('#carta-a-santa');


function validacionNombre(nombre){
    if(nombre.length === 0){
        return 'Este campo debe tener al menos 1 caracter';
    }if(nombre.length >= 50){
        return 'Este campo debe tener menos de 50 caracteres';
    }if (!/^[a-z]+$/i.test(nombre)){
        return 'Este campo solo puede contener letras';
    }return '';

}


function validacionCiudad(ciudad){
    if(ciudad.length === 0){
        return 'Por favor selecciona una ciudad';
    }
    return '';
}   


function validacionDescripcionRegalo(descripcionRegalo){
    if (descripcionRegalo.length >= 100) { 
        return 'El campo descripcion es muy largo';
    }if(descripcionRegalo.length === 0){
        return 'Este campo debe tener al menos 1 caracter';
    }else if (!/^[a-z0-9, \.]+$/i.test(descripcionRegalo)){
        return 'Este campo no puede tener caracteres especiales';
    }return '';
}
  

function validacionFormulario(event){
    
    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form['descripcion-regalo'].value;
    const errorNombre = validacionNombre(nombre);
    const errorCiudad = validacionCiudad(ciudad);
    const errorDescripcionRegalo = validacionDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo,
    }
    
    const arrayLi = document.querySelectorAll('#errores li');
    arrayLi.forEach(function(li){
        li.remove();
    });

    const esExito = manejarErrores(errores) === 0;

    if (esExito){
        document.querySelector('#exito').className='';
        $form.className='oculto'; 
    }

    event.preventDefault();
};



function manejarErrores(errores){
    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');
    let contadorErrores = 0;

    keys.forEach(function(key){
        const error = errores[key];

        if (error){
            contadorErrores++;
            $form[key].className = 'error';
            const $error = document.createElement('li');
            $error.innerText = error;
            $errores.appendChild($error)
        }else{
            $form[key].className = '';
        }
    })
    return contadorErrores;
}


$form.onsubmit = validacionFormulario;
