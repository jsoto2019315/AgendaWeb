/*const username = document.getElementById('userInput');
const password = document.getElementById('passwordInput');
const buttonLogin = document.getElementById('btnLogin');

buttonLogin.addEventListener('click', (e) =>{
    e.preventDefault();
    const data = {
        username: username.value,
        password: password.value
    }
    console.log(data)
})

//Cración del arreglo

let users1 = ['Jose Soto', '12345'];
let users2 = ['Angel Méndez', 'qwer'];
let users3 = ['Alejandro Max', '7890'];
let users4 = ['Oscar Morales', '54321'];*/


function obtenerListaUsuarios(){
    var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLs'));

    if (listaUsuarios == null) {
        listaUsuarios=[
            ['1', 'José David', 'Soto Puac', 'jsoto-2019315@kinal.edu.gt', '12345', '1']
            ['2', 'Angel Adolfo', 'Méndez Orozco', 'amendez2019362@kinal.edu.gt', '54321', '1']
        ]
    }
    return listaUsuarios 
}

function validarCredenciales(pCorreo , pContraseña){
    var listaUsuarios = obtenerListaUsuarios();
    var acceso = false;

    for (var i = 0; i < listaUsuarios.length; i++) {
        if (pCorreo == listaUsuarios[i][3] && pContraseña == listaUsuarios[i][4]) {
            acceso = true;
            sessionStorage.setItem('usuarioActivo', listaUsuarios[i][1] + ' ' + listaUsuarios[i][2]);
            sessionStorage.setItem('rolUsuarioActivo', listaUsuarios[i][5]);
        }        
    }
    return acceso;
}
