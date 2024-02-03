const btnFavoritos = document.getElementById('btnFavoritos');
const containerFavoritos = document.getElementById('containerFavoritos');
const cerrar = document.getElementById('btnCerrarFavoritos');

btnFavoritos.addEventListener('click' , () => {
    containerFavoritos.style.display = 'flex';
});

cerrar.addEventListener('click' , () => {
    containerFavoritos.style.display = 'none';
});