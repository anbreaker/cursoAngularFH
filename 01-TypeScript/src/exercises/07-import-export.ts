import { Product, calculeISV } from './06-function-destructuring';
/*
    ===== Código de TypeScript =====
*/

const cartShopping: Product[] = [
  {
    desc: 'Phone 1',
    price: 100,
  },
  {
    desc: 'Phone 2',
    price: 150,
  },
];

const [total, isv] = calculeISV(cartShopping);

console.log('Total', total);
console.log('ISV', isv);
