//Ejercicio estación del mes
let mes = 8;
let estacion;
if (mes == 1 || mes == 2 || mes == 12) {
    estacion= "Invierno";
}
else if (mes == 3 || mes == 4 || mes == 5) {
    estacion = "Primavera";
}
else if (mes == 6 || mes == 7 || mes == 8) {
    estacion = "Verano";
}
else if (mes == 9 || mes == 10 || mes == 11) {
    estacion = "otoño";
}
else{
    estacion = "Valor incorrecto"
}
console.log(estacion);


//EJERCICIO -CALCULO HORA DEL DÍA
let horaDia = 2;
let mensaje;

if (horaDia >= 6 && horaDia >= 11) {
    mensaje = "Buenos dias";
}
else if (horaDia >= 12 && horaDia <= 18) {
    mensaje = "Buenas tardes";
}
else if (horaDia >= 10 && horaDia <= 24) {
    mensaje = "BUenas noches";
}
else if (horaDia >= 0 && horaDia < 6) {
    mensaje = "Durmiendo";
}
else{
    mensaje = "Valor incorrecto"
}
console.log(mensaje);