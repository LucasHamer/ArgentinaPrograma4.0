let num = "";
let total = 0;
let prom = 0;
let divisor = 0; 

do {
    num = prompt("Coloque un numero: ");
    if (!isNaN(num) && num !== "FIN") {
        total += parseFloat(num);
        divisor++;
    }
} while (num !== "FIN");

if (divisor>0) {
    prom = total / divisor;
    alert(`Tu promedio es ${prom}`);
}
alert(`Tu total es: ${total}`);