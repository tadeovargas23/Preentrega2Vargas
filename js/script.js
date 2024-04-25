const estudiantes = [];

function agregarEstudiante() {
    const nombre = prompt("Ingrese el nombre del estudiante:");
    const edad = parseInt(prompt("Ingrese la edad del estudiante:"));
    const calificacionesStr = prompt("Ingrese las calificaciones del estudiante separadas por comas:");
    const calificaciones = calificacionesStr.split(",").map(calificacion => parseInt(calificacion));
    
    const estudiante = {
        nombre: nombre,
        edad: edad,
        calificaciones: calificaciones
    };
    estudiantes.push(estudiante);
    alert(`Estudiante "${nombre}" agregado.`);
}

function buscarEstudiantePorNombre(nombre) {
    const estudianteEncontrado = estudiantes.find(estudiante => estudiante.nombre === nombre);
    if (estudianteEncontrado) {
        alert("Estudiante encontrado:\n\n" +
            `Nombre: ${estudianteEncontrado.nombre}\n` +
            `Edad: ${estudianteEncontrado.edad}\n` +
            `Calificaciones: ${estudianteEncontrado.calificaciones.join(", ")}`
        );
    } else {
        alert("No se encontró ningún estudiante con ese nombre.");
    }
}


function filtrarEstudiantesPorEdad(edadMinima) {
    const estudiantesFiltrados = estudiantes.filter(estudiante => estudiante.edad >= edadMinima);
    if (estudiantesFiltrados.length > 0) {
        alert("Estudiantes filtrados por edad:\n\n" +
            estudiantesFiltrados.map(estudiante =>
                `Nombre: ${estudiante.nombre}\n` +
                `Edad: ${estudiante.edad}\n` +
                `Calificaciones: ${estudiante.calificaciones.join(", ")}\n`
            ).join("\n")
        );
    } else {
        alert("No se encontraron estudiantes con esa edad o superior.");
    }
}


while (true) {
    const opcion = prompt("Seleccione una opción:\n" +
        "1. Agregar estudiante\n" +
        "2. Buscar estudiante por nombre\n" +
        "3. Filtrar estudiantes por edad\n" +
        "4. Salir"
    );

    switch (opcion) {
        case "1":
            agregarEstudiante();
            break;
        case "2":
            const nombreBuscado = prompt("Ingrese el nombre del estudiante que desea buscar:");
            buscarEstudiantePorNombre(nombreBuscado);
            break;
        case "3":
            const edadMinima = parseInt(prompt("Ingrese la edad mínima para filtrar estudiantes:"));
            filtrarEstudiantesPorEdad(edadMinima);
            break;
        case "4":
            alert("¡Hasta luego!");
            exit();
        default:
            alert("Opción inválida. Por favor, seleccione una opción válida.");
            break;
    }
}

