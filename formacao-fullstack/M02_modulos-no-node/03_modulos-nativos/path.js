const path = require('path');


console.log(__filename); // Caminho completo do arquivo atual - Exemplo: /Users/lucas/Documents/Projects/nodejs/03_modulos-nativos/path.js
console.log(__dirname); // Caminho completo do diretório atual - Exemplo: /Users/lucas/Documents/Projects/nodejs/03_modulos-nativos

// Extraindo a parte final o nome do arquivo e do diretório atual, com o método basename e extname:
const fileName = path.basename(__filename);
console.log(`Nome do arquivo atual: ${fileName}`); // Saida: path.js
const fileExtension = path.extname(__filename);
console.log(`Extensão do arquivo atual: ${fileExtension}`); // Saida: .js
const dirName = path.basename(__dirname);
console.log(`Nome do diretório atual: ${dirName}`); // Saida: 03_modulos-nativos

// Juntando/concatenando o caminho do diretório atual com o nome do arquivo, com o método join:
console.log(path.join(__dirname, 'test.txt')); // Exemplo: /Users/lucas/Documents/Projects/nodejs/03_modulos-nativos/test.txt