const nombre = document.getElementById("nombre")
const edad = document.getElementById("edad")
const boton = document.getElementById("boton")
const resultado = document.getElementById("resultado")

boton.addEventListener('click', function(){

    const edadtrb = edad.value
    const nombrevalidaor = nombre.value

    let message


    if (nombrevalidaor.length === 0 || edadtrb.length === 0){
        message='¡Rellene los campos!'
    }else if (edadtrb < 18){
        message='eres menor de edad. ¡Sigue aprendiendo y disfrutando de la codificacion!'
    }else if(edadtrb > 18){
        message='eres mayor de edad. ¡Preparate para grandes oportunidades en el mundo de la programacion!'
    }else{
        message='ingresas un valor valido'
    }

    resultado.textContent=message
})