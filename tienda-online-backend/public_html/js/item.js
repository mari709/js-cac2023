const btnagregar = document.querySelector('#add');
const btnquitar = document.querySelector('#subtract');
const quantity = document.querySelector('#quantity');

btnagregar.addEventListener('click', () => quantity.value = Number(quantity.value) + 1);//lo parseo a numero para que no concatene como cadena
btnquitar.addEventListener('click', () => quantity.value = Number(quantity.value) -1);//lo parseo a numero para que no concatene como cadena
//agregar validacion numeros positivos
