import { createProduct, Product } from './product.js'

const product1 = createProduct(1, 'Produto Func', 100);
const product2 = new Product(2, 'Produto Class', 200);

console.log(product1.getInfo());
console.log(product2.getInfo());