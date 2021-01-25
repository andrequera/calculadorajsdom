
// Capturando los elementos
const botonNumeros = document.getElementsByName("data-number");
// console.log(botonNumeros )
const botonOpera = document.getElementsByName("data-opera");
const botonIgual = document.getElementsByName("data-igual")[0];
const botonBorrar = document.getElementsByName("data-borrar")[0];
var resul = document.getElementById("resul");
var opeActual = "";
var opeAnterior = "";
var operacion = undefined;

// console.log(botonBorrar);
// console.log(resul);
// haciendo eventos
botonNumeros.forEach(function (boton) {
    // agregando evento
    boton.addEventListener("click", function () {
        agregarNumero(boton.innerText);
        // alert(boton.innerText);
    })
})
botonOpera.forEach(function (boton) {
    boton.addEventListener("click", function () {
        selectOperacion(boton.innerText)
        // alert(boton.innerText);
    })
});


// aca llama el boton directamente  agrega el evento click, que llama una funcion y luego llama otras funciones ()
botonIgual.addEventListener("click", function () {
    calcular();
    actualizarPantalla();

});

botonBorrar.addEventListener("click", function () {
    borrar();
    actualizarPantalla();
});

// ahora definiendo los metodos, haciendo los metodos
function agregarNumero(num) {
    // llevandolo a texto para concatenar (para unir), recordar que la pantalla es in input text
    opeActual = opeActual.toString() + num.toString();
    actualizarPantalla();

}

function actualizarPantalla() {
    resul.value = opeActual;
}

function borrar() {
    opeActual = "";
    opeAnterior = "";
    operacion = undefined;
}

// al actualizar limpio todo
borrar();

function selectOperacion(op) {
    if (opeActual === "") return;
    if (opeAnterior !== "") {
        calcular()
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = "";
}

function calcular() {
    var calculo;
    // parsetfloat para convertir en valores numericos
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual)
    // preguntando si son numericos
    if (isNaN(anterior) || isNaN(actual)) return;
    switch (operacion) {
        case "+":
            calculo = anterior + actual;
            break;
        case "-":
            calculo = anterior - actual;
            break;
        case "x":
            calculo = anterior * actual;
            break;
        case "/":
            calculo = anterior / actual;
            break;
        default:
            return;

    }
    opeActual= calculo;
    operacion= undefined;
    opeAnterior="";

}
