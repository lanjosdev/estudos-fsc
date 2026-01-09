function loginUser(email, password) {
    // Retorna uma promise simulando o login de um usuário
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;
            if (error) {
                return reject(new Error('Erro na conexão com o banco de dados.'));
            }

            // Retorna o sucesso da operação
            resolve({ email, password });
        }, 3000);
    });
}

function getUserVideos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;
            if (error) {
                return reject(new Error('Erro ao buscar vídeos do usuário.'));
            }

            // Retorna o sucesso da operação
            resolve(['video_1', 'video_2', 'video_3']);
        }, 2000);
    });
}

function getUserVideoDetails() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;
            if (error) {
                return reject(new Error('Erro ao buscar detalhes do vídeo.'));
            }

            // Retorna o sucesso da operação
            resolve({ id: '1', title: 'Video Title', description: 'Video Description', views: 1000 });
        }, 2000);
    });
}


// Nova maneira de consumir uma promise com um função async/await (mais legível e fácil de ler)
const getUserData = async () => {
    try {
        const user = await loginUser('teste@teste.com', '123456');
        console.log('Usuário logado com sucesso!');
        console.log('Dados do usuário:', user);

        const videos = await getUserVideos();
        console.log('Vídeos do usuário buscados com sucesso!');
        console.log('Vídeos do usuário:', videos);

        const videoDetails = await getUserVideoDetails();
        console.log('Detalhes do vídeo buscados com sucesso!');
        console.log('Detalhes do vídeo do usuário:', videoDetails);
    }
    catch (error) {
        console.error(error.message); // mensagem legível
        // console.error(error.stack);   // stack trace para debug
    }
}
getUserData();