document.addEventListener("DOMContentLoaded", function () {
    const colorInput = document.getElementById("colorInput");
    const cardHeader = document.querySelector(".card-header");
    const cardFooter = document.querySelector(".card-footer");

    colorInput.addEventListener("input", function () {
        const selectedColor = colorInput.value;
        cardHeader.style.backgroundColor = selectedColor;
        cardFooter.style.backgroundColor = selectedColor;
    });
});

function verificarEdad() {
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const fechaNacimientoDate = new Date(fechaNacimiento);
    const fechaHoy = new Date();
    const mayoriaEdad = new Date(fechaNacimientoDate.getFullYear() + 18, fechaNacimientoDate.getMonth(), fechaNacimientoDate.getDate());

    if (fechaHoy >= mayoriaEdad) {
        document.getElementById("resultado").textContent = "La persona es mayor de edad en Colombia.";
    } else {
        document.getElementById("resultado").textContent = "La persona no es mayor de edad en Colombia.";
    }
}