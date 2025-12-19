// Modulo onde é definido a classe Product e a função createProduct, utilizando padrão commonjs

// Classe Product que representa um produto
class Product {
    // Construtor da classe Product
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    // Função para obter as informações do produto
    getInfoProduct() {
        return `ID do produto: ${this.id} | Nome do produto: ${this.name} | Preço do produto: ${this.price}`;
    }
}

// Função para criar um novo produto
function createProduct(id, name, price) {
    return new Product(id, name, price);
}

// Exportação das classes e funções do modulo, utilizando padrão commonjs
module.exports = {
    Product,
    createProduct
};