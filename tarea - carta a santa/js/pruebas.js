function probarValidacionNombre(){
    console.assert(
        validacionNombre('') === 'Este campo debe tener al menos 1 caracter',
        'ValidacionNombre no validó que el nombre no sea vacio'
    )

    console.assert(
        validacionNombre('alsdjoaisdjoasdjoaijdoiasjdoiajsdoiajsdoiajsdoiajsdoiajdoias') === 'Este campo debe tener menos de 50 caracteres',
        'validacionNombre no valido que el nombre sea menor a 50 caracteres'
    )

    console.assert(
        validacionNombre('123.123#@!') === 'Este campo solo puede contener letras',
        'ValidacionNombre no funciono con un nombre incorrecto'
    )

    console.assert(
        validacionNombre('Fabricio') === '',
        'Validacion nombre no funciono con un nombre correcto'
    )
}




function probarValidacionCiudad(){
    console.assert(
        validacionCiudad('') === 'Por favor selecciona una ciudad',
        'ValidacionCiudad no valido que no se seleccione una ciudad'
    )
}


function probarValidacionDescripcionRegalo(){
    console.assert(
        validacionDescripcionRegalo('') === 'Este campo debe tener al menos 1 caracter',
        'ValidacionDescripcionRegalo no funciono con una descripcion vacia'
    )

    console.assert(
        validacionDescripcionRegalo('as#as!') === 'Este campo no puede tener caracteres especiales',
        'ValidacionDescripcionRegalo no funciono con caracteres erroneos'
    )

    console.assert(
        validacionDescripcionRegalo('regaloo') === '',
        'ValidacionDescripcionRegalo no funciono con una descripcion correcta'
    )
    console.assert(
        validacionDescripcionRegalo('asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd') === 'El campo descripcion es muy largo',
        'ValidacionDescripcionRegalo no valido que el campo descripcion no sea muy largo'
    )
}


probarValidacionNombre();
probarValidacionCiudad();
probarValidacionDescripcionRegalo();
