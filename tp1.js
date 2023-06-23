/*  
  Ejercicio 1: 
  Implementar la función 'extractValues' que toma un objeto y retorna un array con todos los valores del objeto.
  Ejemplo: 
  extractValues({a: 1, b: 2, c: 3}) debería retornar [1, 2, 3]
*/
function extractValues(obj) {
    return Object.values(obj);
  }
  
  
  console.log(extractValues({a: 1, b: 2, c: 3})); 


/*  
  Ejercicio 2: 
  Implementar la función 'arrayToLengthCounters' que toma un array de strings y retorna un objeto donde cada elemento
  del array se convierte en una clave del objeto y el valor es la longitud de cada string.
  Ejemplo: 
  arrayToLengthCounters(['gato', 'perro', 'elefante']) debería retornar {gato: 4, perro: 5, elefante: 8}
*/

function arrayToLengthCounters(arr) {
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    let value = key.length;

    contenedor[key] = value;
  }

  return contenedor;
}
let str = ["gato", "perro","elefante"];

let contenedor = arrayToLengthCounters(str);
console.log(contenedor);


/*  
  Ejercicio 3: 
  Implementar la función 'findKeysInCommon' que toma dos objetos y retorna un array con los nombres de las 
  propiedades que tienen en común.
  Ejemplo:
  findKeysInCommon({a: 1, b: 2, c: 3}, {b: 4, c: 5, d: 6}) debería retornar ['b', 'c']
*/

function findKeysInCommon(objeto1, objeto2) {
    const key1 = Object.keys(objeto1);
    const key2 = Object.keys(objeto2);
    
    return key1.filter(key => key2.includes(key));
  }
  
  const objeto1 = {a: 1, b: 2, c: 3};
  const objeto2 = {b: 4, c: 5, d: 6};
  
  const keysInCommon = findKeysInCommon(objeto1, objeto2);
  console.log(keysInCommon);

// Llamamos a las funciones y mostramos los resultados

function main() {
  console.log(extractValues({a: 1, b: 2, c: 3}));
  console.log(arrayToLengthCounters(['gato', 'perro', 'elefante']));
  console.log(findKeysInCommon({a: 1, b: 2, c: 3}, {b: 4, c: 5, d: 6}));
}

main();
