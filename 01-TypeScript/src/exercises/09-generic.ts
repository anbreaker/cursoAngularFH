/*
    ===== Código de TypeScript =====
*/

function whatTypeIam<T>(argumento: T) {
  return argumento;
}

let iAmString = whatTypeIam('Hello World');
let iAmNumbero = whatTypeIam(100);
let iAmArray = whatTypeIam([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

let iAmExplicit = whatTypeIam<number>(100);

console.log(iAmString);
console.log(iAmExplicit);
