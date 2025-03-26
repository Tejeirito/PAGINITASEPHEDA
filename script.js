// Formulario de registro
const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    // Aquí puedes agregar la lógica para enviar los datos de registro al servidor
    console.log('Datos de registro:', { username, email, password });

    // Limpiar los campos del formulario
    registerForm.reset();
});

