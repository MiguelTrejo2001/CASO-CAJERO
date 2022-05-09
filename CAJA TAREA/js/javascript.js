function ingresar() {
    let password = "0405";
    var p = document.getElementById("password").value;

    if (p.length < 4) {

    } else if (p.length = 4 && password == p) {
        alert("Contraseña Correcta");
        location = "menudeopciones.html";
    } else {
        alert("Contraseña Incorrecta, Inténtelo de nuevo");
    }
}

function alerta50() {
    alert("Se ha realizado el deposito de S/.50 exitosamente");
}
function alerta100() {
    alert("Se ha realizado el deposito de S/.100 exitosamente");
}
function alerta200() {
    alert("Se ha realizado el deposito de S/.200 exitosamente");
}
function alerta500() {
    alert("Se ha realizado el deposito de S/.500 exitosamente");
}
function alerta1000() {
    alert("Se ha realizado el deposito de S/.1000 exitosamente");
}
function alerta2000() {
    alert("Se ha realizado el deposito de S/.2000 exitosamente");
}

function alertaB(){ 
    alert("Usted a retirado S/.50 con Exito");
}
function alertaC(){
    alert("Usted a retirado S/.100 con Exito");
}
function alertaD(){
    alert("Usted a retirado S/.200 con Exito");
}
function alertaE(){
    alert("Usted a retirado S/.500 con Exito");
}
function alertaF(){
    alert("Usted a retirado S/.1000 con Exito");
}
function alertaG(){
    alert("Usted a retirado S/.2000 con Exito");
}