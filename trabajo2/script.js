function verificar() {
    const fecha = document.getElementById("fecha").value;
    const fecha1 = new Date(fecha);
    const fechadia = new Date();
    const mayoredad = new Date(fecha1.getFullYear() + 18, fecha1.getMonth(), fecha1.getDate());

    if (fechadia >= mayoredad) {
        document.getElementById("resultado").textContent = "La persona es mayor de edad en Colombia.";
    } else {
        document.getElementById("resultado").textContent = "La persona no es mayor de edad en Colombia.";
    }
}
