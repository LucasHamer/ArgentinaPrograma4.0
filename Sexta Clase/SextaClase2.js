let confirma = confirm("Desea recibir notifiaciones por mail");

if (confirma == true) {
    let mail = prompt("Coloque su email: ");
    let edad = parseInt(prompt("Coloque su edad: "));

    if (edad >= 18) {
        alert(`${mail}`);
    } else {
        alert("No tiene la edad suficiente");
    };
} else {

};
