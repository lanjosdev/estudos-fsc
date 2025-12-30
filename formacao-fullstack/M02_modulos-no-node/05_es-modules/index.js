// const { Product, createProduct } = require('./product');
// import * as productModule from './product.js'; // Importa todas as classes e funções do modulo. Ex: productModule.Product, productModule.createProduct
import { Product, createProduct } from './product.js';


const product1 = createProduct(1, 'Produto 1', 100);
const product2 = new Product(2, 'Produto 2', 200);

console.log(product1.getInfoProduct());
console.log(product2.getInfoProduct());