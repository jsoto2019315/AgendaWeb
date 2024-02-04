// const flechaDetalle = document.getElementById('aumentar');
// const detallegeneral1 = document.getElementById('detalleGeneral1');
// const detalle1 = document.getElementById('detalle1');
// const infoBasica1 = document.getElementById('infoBasica1');
// const infoDetallada = document.getElementById('infoDetallada1');

const flechaDetalle = document.getElementById('aumentar');
const detallegeneral1 = document.getElementById('detalleGeneral1');
const detalle1 = document.getElementById('detalle1');
const infoBasica1 = document.getElementById('infoBasica1');
const infoDetallada = document.getElementById('infoDetallada1');

let desplegado = false;

flechaDetalle.addEventListener('click', () => {
  if (desplegado) {
    // infoDetallada.style.display = 'none';
    // infoBasica1.style.height = '80px';
    // flechaDetalle.style.rotate = '0deg';

    infoDetallada.style.display = 'flex';
    infoBasica1.style.height = '260px';
    flechaDetalle.style.rotate = '180deg';
  } else {
    // infoDetallada.style.display = 'flex';
    // infoBasica1.style.height = '260px';
    // flechaDetalle.style.rotate = '180deg';

    infoDetallada.style.display = 'none';
    infoBasica1.style.height = '80px';
    flechaDetalle.style.rotate = '0deg';
  }
  desplegado = !desplegado;
});
