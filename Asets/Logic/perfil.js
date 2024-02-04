const btnPerfil = document.getElementById('btnPerfil');
const contenedorPerfil = document.getElementById('contenedorPerfil');
const btnCerrar = document.getElementById('cerrarPerfil');

btnPerfil.addEventListener('click' , () => {
    contenedorPerfil.style.display='flex';
})

btnCerrar.addEventListener('click' , () => {
    contenedorPerfil.style.display='none';
})