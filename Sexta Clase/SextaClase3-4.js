let escribir = prompt("Coloque un parrafo: ");
while (escribir != "FIN") {
    escribir = prompt("Coloque un parrafo: ");
    document.write(`${escribir}`);
    document.write("<br>");
};
