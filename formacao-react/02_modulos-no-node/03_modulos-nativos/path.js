const path = require('path');
const fs = require('fs');

// Pega o nome do arquivo em execução
const fileName = path.basename(__filename);
console.log(`O nome do arquivo em execução é: ${fileName}`);

// Pega a extensão do arquivo em execução
const fileExtension = path.extname(__filename);
console.log(`A extensão do arquivo em execução é: ${fileExtension}`);

// Pega o diretório do arquivo em execução
const fileDirectory = path.dirname(__filename);
console.log(`O diretório do arquivo em execução é: ${fileDirectory}`);

// Criar um arquivo no diretório do arquivo em execução
// fs.writeFile(path.join(__dirname, "message.txt"), 'Conteúdo do arquivo', () => {}); // alternativa
fs.writeFile(path.join(fileDirectory, 'message.txt'), 'Conteúdo do arquivo', () => {});