const fs = require('fs');
const path = require('path');


// Criar uma pasta nova, com o método mkdir e utilizando o path.join para juntar o caminho do diretório atual com o nome da pasta:
fs.mkdir(path.join(__dirname, 'new-folder'), (err) => {
    if (err) {
        console.log(`Erro ao criar a pasta: ${err.message}`);
    } else {
        console.log('Pasta criada com sucesso!');
    }
});

// Criar um arquivo dentro da pasta nova, com o método writeFile:
fs.writeFile(path.join(__dirname, 'new-folder', 'new-file.txt'), 'Conteúdo do arquivo aqui', (err) => {
    if (err) {
        console.log(`Erro ao criar o arquivo: ${err.message}`);
    } else {
        console.log('Arquivo criado com sucesso!');
    }
});

// Adicionar conteúdo ao arquivo criado, com o método appendFile:
fs.appendFile(path.join(__dirname, 'new-folder', 'new-file.txt'), '\nLinha adicional', (error) => {});

// Ler o conteúdo do arquivo criado, com o método readFile:
fs.readFile(path.join(__dirname, 'new-folder', 'new-file.txt'), 'utf-8', (error, data) => {
    const fileContent = data;

    console.log(`Conteúdo do arquivo: ${fileContent}`);
});