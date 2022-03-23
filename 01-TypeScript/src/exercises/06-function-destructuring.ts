/*
    ===== Código de TypeScript =====
*/

export interface Product {
  desc: string;
  price: number;
}

const phone: Product = {
  desc: 'Nokia A1',
  price: 150,
};

const tablet: Product = {
  desc: 'iPad Air',
  price: 350,
};

export function calculeISV(products: Product[]): [number, number] {
  let total = 0;

  products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * 0.15];
}

const articles = [phone, tablet];

const [total, isv] = calculeISV(articles);

console.log('Total:', total);
console.log('ISV:', isv);
