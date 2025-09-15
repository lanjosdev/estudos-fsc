import { Product, createProduct, productPrice } from './product.js';

const product1 = createProduct(1, 'Produto Func', 100);
const product2 = new Product(2, 'Produto Class', 200);

console.log(product1.getInfo());
console.log(product2.getInfo());
console.log(`Preço do produto: ${productPrice}`);


// Outa maneira de importar com *
// import * as productModule from './product.js';

// const product1 = productModule.createProduct(1, 'Produto Func', 100);
// const product2 = new productModule.Product(2, 'Produto Class', productModule.productPrice);

// console.log(product1.getInfo());
// console.log(product2.getInfo());
// console.log(`Preço do produto: ${productModule.productPrice}`);