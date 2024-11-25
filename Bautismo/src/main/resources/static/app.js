// Función para registrar un usuario
function registrarUsuario() {
    // Obtener los datos del formulario
    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let contraseña = document.getElementById('contraseña').value;
    let rol = document.getElementById('rol').value;

    // Crear un objeto con los datos del usuario
    let usuario = {
        nombre: nombre,
        correo: correo,
        contraseña: contraseña,
        rol: rol
    };

    // Enviar los datos al backend usando fetch (AJAX)
    fetch('http://localhost:8080/api/usuarios/registrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    })
    .then(response => response.json())
    .then(data => {
        // Si el registro fue exitoso, mostrar mensaje de éxito
        alert('Usuario registrado con éxito');
        // Cerrar el modal después del registro
        $('#modalRegistro').modal('hide');
    })
    .catch(error => {
        // Manejar errores
        console.error('Error al registrar usuario:', error);
        alert('Hubo un error al registrar al usuario');
    });
}

// Función para buscar un usuario por correo
function buscarUsuarioPorCorreo(correo) {
    fetch(`http://localhost:8080/api/usuarios/buscar/${correo}`, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        // Mostrar los datos del usuario o error si no existe
        console.log(data);
    })
    .catch(error => {
        console.error('Error al buscar usuario:', error);
    });
}
