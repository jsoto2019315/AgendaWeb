
function obtenerListaUsuarios(){
    var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLs'));

    if (listaUsuarios == null) {
        listaUsuarios = [
            ['1','José David','Soto Puac','jsoto2019315','12345','2'],
            ['2','Angel Adolfo','Méndez Orozco','amendez2019362','54321','1']
        ]
    }
    return listaUsuarios;
}

function validarCredenciales(pCorreo , pPassword){
    var listaUsuarios = obtenerListaUsuarios();
    var acceso = false;

    for (var i = 0; i < listaUsuarios.length; i++) {
        if (pCorreo == listaUsuarios[i][3] && pPassword == listaUsuarios[i][4]) {
            acceso = true;
            sessionStorage.setItem('usuarioActivo', listaUsuarios[i][1] + ' ' + listaUsuarios[i][2]);
            sessionStorage.setItem('rolUsuarioActivo', listaUsuarios[i][5]);
        }
    }
    return acceso;
}
