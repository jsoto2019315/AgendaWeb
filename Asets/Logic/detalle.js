// Primer contacto

const flechaDetalle = document.getElementById('aumentar1');
const infoDetallada = document.getElementById('infoDetallada1');

let desplegado = false;

flechaDetalle.addEventListener('click', () => {
  if (desplegado) {
    infoDetallada.style.display = 'flex';
    infoBasica1.style.height = '260px';
    flechaDetalle.style.rotate = '180deg';
  } else {
    infoDetallada.style.display = 'none';
    infoBasica1.style.height = '80px';
    flechaDetalle.style.rotate = '0deg';
  }
  desplegado = !desplegado;
});

// segundo Contacto

const flechaDetalle2 = document.getElementById('aumentar2');
const infoDetallada2 = document.getElementById('infoDetallada2');

let desplegado2 = false;

flechaDetalle2.addEventListener('click', () => {
  if (desplegado2) {
    infoDetallada2.style.display = 'flex';
    infoBasica2.style.height = '260px';
    flechaDetalle2.style.rotate = '180deg';
  } else {
    infoDetallada2.style.display = 'none';
    infoBasica2.style.height = '80px';
    flechaDetalle2.style.rotate = '0deg';
  }
  desplegado2 = !desplegado2;
});

// Tercer Contacto

const flechaDetalle3 = document.getElementById('aumentar3');
const infoDetallada3 = document.getElementById('infoDetallada3');

let desplegado3 = false;

flechaDetalle3.addEventListener('click', () => {
  if (desplegado3) {
    infoDetallada3.style.display = 'flex';
    infoBasica3.style.height = '260px';
    flechaDetalle3.style.rotate = '180deg';
  } else {
    infoDetallada3.style.display = 'none';
    infoBasica3.style.height = '80px';
    flechaDetalle3.style.rotate = '0deg';
  }
  desplegado3 = !desplegado3;
});

//Cuarto Contacto

const flechaDetalle4 = document.getElementById('aumentar4');
const infoDetallada4 = document.getElementById('infoDetallada4');

let desplegado4 = false;

flechaDetalle4.addEventListener('click', () => {
  if (desplegado4) {
    infoDetallada4.style.display = 'flex';
    infoBasica4.style.height = '260px';
    flechaDetalle4.style.rotate = '180deg';
  } else {
    infoDetallada4.style.display = 'none';
    infoBasica4.style.height = '80px';
    flechaDetalle4.style.rotate = '0deg';
  }
  desplegado4 = !desplegado4;
});

//Quinto Contacto

const flechaDetalle5 = document.getElementById('aumentar5');
const infoDetallada5 = document.getElementById('infoDetallada5');

let desplegado5 = false;

flechaDetalle5.addEventListener('click', () => {
  if (desplegado5) {
    infoDetallada5.style.display = 'flex';
    infoBasica5.style.height = '260px';
    flechaDetalle5.style.rotate = '180deg';
  } else {
    infoDetallada5.style.display = 'none';
    infoBasica5.style.height = '80px';
    flechaDetalle5.style.rotate = '0deg';
  }
  desplegado5 = !desplegado5;
});