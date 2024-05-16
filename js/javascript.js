function calcularPrecio() {
    const tamano = document.getElementById("tamano").value;
    const complejidad = document.getElementById("complejidad").value;
    let precioBase = 1000;

    switch(tamano) {
        case "Pequeño":
            precioBase = 1000;
            break;
        case "Mediano":
            precioBase = 2000;
            break;
        case "Grande":
            precioBase = 3000;
            break;
        default:
            precioBase = 1000;
    }

    switch(complejidad) {
        case "Básico":
            precioBase += 1500;
            break;
        case "Intermedio":
            precioBase += 2500;
            break;
        case "Avanzado":
            precioBase += 3500;
            break;
        default:
            precioBase += 1000;
    }

    document.getElementById("resultado").innerText = "El precio total es: 2000 " + precioBase;
}