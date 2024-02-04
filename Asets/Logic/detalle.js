const flechaDetalle = document.getElementById('aumentar');
const detallegeneral1 = document.getElementById('detalleGeneral1');
const detalle1 = document.getElementById('detalle1');
const infoBasica1 = document.getElementById('infoBasica1')

flechaDetalle.addEventListener('click' , () => {
    detalle1.style.display='flex';
    infoBasica1.style.height='260px';
});
