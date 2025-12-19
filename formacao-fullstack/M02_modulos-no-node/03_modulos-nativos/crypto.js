const crypto = require('crypto');


// Gerar um UUID aleatório, com o método randomUUID:
const randomUUID = crypto.randomUUID();
console.log(`UUID aleatório: ${randomUUID}`);