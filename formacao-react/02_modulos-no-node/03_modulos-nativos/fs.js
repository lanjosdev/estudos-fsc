const fs = require('fs');
const path = require('path');

// Cria uma pasta no diretório do arquivo em execução
fs.mkdir(path.join(__dirname, 'new-folder'), (err) => {
    if (err) {
        console.error(err);
    }
    else {
        console.log('Pasta criada com sucesso');
    }

    // Cria um arquivo no diretório da pasta criada
    fs.writeFile(path.join(__dirname, 'new-folder', 'new-file.txt'), 'Conteúdo do arquivo aqui', (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Arquivo criado com sucesso');
        }

        // Adiciona conteúdo ao arquivo criado
        fs.appendFile(path.join(__dirname, 'new-folder', 'new-file.txt'), '\nConteúdo adicional ao arquivo aqui', (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('Conteúdo adicional ao arquivo criado com sucesso');
            }

            // Lê o conteúdo do arquivo criado
            let fileContent = '';
            fs.readFile(path.join(__dirname, 'new-folder', 'new-file.txt'), 'utf8', (err, data) => {
                if (err) {
                    console.error(err);
                } else {
                    fileContent = data;
                    console.log('O conteúdo do arquivo é:', fileContent);
                }
            });
        });
    });
});

