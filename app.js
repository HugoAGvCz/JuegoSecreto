let numeroSecreto = 0;
let listaNumerosSorteados = [];
let intentos = 0;
let palabraIntento = '';
let numeroMaximo = 10;
let numeroJuegos = 1;

function asignarTextoElemento(elemento, texto) { 
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

condicionesIniciales();

function numeroAleatorio() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1; 
    console.log(Math.floor(numeroMaximo / 2))
    console.log(listaNumerosSorteados);
    console.log(numeroGenerado);

    if(listaNumerosSorteados.length === numeroMaximo || numeroJuegos > Math.floor(numeroMaximo / 2)) {
        asignarTextoElemento('p', 'Ya no hay más números disponibles, reinicia el juego');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            console.log('Número repetido');
            return numeroAleatorio();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            numeroJuegos++;
            return numeroGenerado;
        }   
    }
}

function verificar() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > numeroMaximo) {
        // alert('Ingresa un número válido');
        asignarTextoElemento('p', 'Ingresa un número válido');
        nuevoJuego();
        return;
    }

    if (intentos > 3) {
        // alert('Has agotado los intentos');
        asignarTextoElemento('p', 'Ya no tienes más intentos');
        juegoTerminado();
        return;
    }
    
    if (numeroUsuario === numeroSecreto) {
        // alert('Felicidades! Adivinaste el número secreto');
        palabraIntento = intentos == 1 ? 'intento' : 'intentos';
        asignarTextoElemento('p', `Felicidades! Adivinaste el número secreto en ${intentos} ${palabraIntento}`);
        juegoTerminado();
    } else {
        if (numeroUsuario > numeroSecreto) {
            // alert('El número secreto es menor');
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            // alert('El número secreto es mayor');
            asignarTextoElemento('p', 'El número secreto es mayor');
        }   
        intentos++;
        limpiarCampo
    }
    /* let resultado = factorial(numeroUsuario);
    asignarTextoElemento('p', `El factorial de ${numeroUsuario} es ${resultado}`); */
    return numeroUsuario;
}
 
function nuevoJuego() {
    limpiarCampo();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    document.getElementById('intentar').removeAttribute('disabled');
    return;
}

function limpiarCampo() {
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    console.clear();
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('P', `Ingresa un número entre el 1 y ${numeroMaximo}`);
    numeroSecreto = numeroAleatorio();
    intentos = 1;
    
    console.log(numeroSecreto + " <- No es el número secreto");
    
    return;
}

function juegoTerminado() {
    document.getElementById('reiniciar').removeAttribute('disabled');
    document.getElementById('intentar').setAttribute('disabled', 'true');
    return;
}

function factorialRecursivo(numero) {
    if (numero === 0) {
        return 1;
    } else {
        return numero * factorial(numero - 1)
    }
}

function factorial(numero) {
    let resultado = 1;
    for (let i = numero; i >= 1; i--) {
        console.log(resultado); 
        resultado *= i;
    }  
    return resultado
} 