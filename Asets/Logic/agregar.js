const btn = document.getElementById('btnAgregar');
const container = document.getElementById('contenedorAgregar');
const btnAgregado = document.getElementById('agregarContacto')
btn.addEventListener('click', () => {
    container.style.display='flex';
});
btnAgregado.addEventListener('click', () => {
    container.style.display='none';
})