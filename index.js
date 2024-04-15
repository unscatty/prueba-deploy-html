const boton = document.getElementById('boton');
const conteo = document.getElementById('conteo');
let contador = 0;

boton.addEventListener('click', () => {
  contador++;
  conteo.textContent = contador;
});
