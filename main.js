let nombreProducto =  prompt("Ingrese nombre del producto (ESC para salir)");
console.log(nombreProducto);
let precioProducto =  parseFloat(prompt("Ingrese precio del producto"));
console.log(precioProducto);
let productos = 0;
let total = 0;

const interes = 1.18; 

while ((nombreProducto != "ESC") && (nombreProducto != null)) {
    // total precio
    total = total + precioProducto;
    console.log("Total productos $" +total);

    // suma de los productos
    productos++;
    console.log("Llevas "+productos+ " productos");

    nombreProducto = prompt("Ingrese nombre del producto (ESC para salir)");
    console.log(nombreProducto);
    if ((nombreProducto != "ESC") && (nombreProducto != null)) {
        let precioProducto =  parseFloat(prompt("Ingrese precio del producto"));
        console.log(precioProducto);
     } else {
            break;
    }
}

let cuotas = prompt("Ingrese numero de cuotas (3 cuotas precio contado)");
console.log(cuotas);

// si las cuotas son mayores a 3 se le agrega un interés
if(cuotas > 3) {
    total = total * interes;
    console.log(total);
}

// si las cuotas son menores o igual a 3 es precio contado
if(cuotas <= 3) {
    total = total;
    console.log(total);
}

// valor cuota
function sumarInteres(total) {
    return total / cuotas;
}
let valorCuota = sumarInteres(total);
alert("Pagarás $"+valorCuota.toFixed(0)+ " por "+cuotas+ " meses");

