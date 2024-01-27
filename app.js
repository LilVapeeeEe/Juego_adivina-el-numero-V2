let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;
let maximoIntentos = 3;

console.log(numeroSecreto);
 
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
   elementoHTML.innerHTML = texto;
   return;
}
function verificarIntento() {
    let numeroDeusuario = parseInt(document.getElementById('valorUsuario').value)
    
    console.log(intentos);
    if (numeroDeusuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        //El usuario no acerto
        if (numeroDeusuario > numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }

        intentos++;
        limpiarCaja();
    //El usuario excedio el maximo de intentos
    if (intentos >= maximoIntentos) {
        asignarTextoElemento('p','No lograste descubrir el numero, reinicia el juego');
        document.getElementById('intento').setAttribute('disabled', 'true');
    }
}
return;
}
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

 
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    //Si ya sorteamos todos los numeros
    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles, reinicia el juego') 
    } else{
        // Si el numero generado esta en la lista
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 0;
}

function reiniciarJuego() {
    //Limpiar la caja y reiniciar el juego
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar numero aleatorio
    //Reiniciar el contador de intentos
    condicionesIniciales();
    //Deshabiliar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();