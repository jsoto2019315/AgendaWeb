document.querySelector('#btnLogin').addEventListener('click', iniciarSecion);

function iniciarSecion() {
    var email = '';
    var password = '';
    var acceso = false;

    email = document.querySelector('#userInput').value;
    password = document.querySelector('#passwordInput').value;

    acceso = validarCredenciales(email, password);

    if (acceso == true) {
        ingresar();
    } else{
        alert('Correo o contraseña incorrectas')
    }
}

function ingresar() {
    window.location.href = './Asets/Pages/contactos.html';
}


var buttonLogin = document.getElementById('btnLogin');

buttonLogin.addEventListener('click', (e) => {
    e.preventDefault();
})