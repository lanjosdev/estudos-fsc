function getProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;
            if (error) {
                return reject(new Error('Erro ao buscar produtos.'));
            }

            resolve([
                { id: '1', name: 'Product 1', price: 100 }
            ]);
        }, 2000);
    });
}

function getCategories() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;
            if (error) {
                return reject(new Error('Erro ao buscar categorias.'));
            }

            resolve([
                { id: '1', name: 'Category 1' }
            ]);
        }, 2000);
    });
}

function getUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;
            if (error) {
                return reject(new Error('Erro ao buscar usuários.'));
            }

            resolve([
                { id: '1', name: 'User 1', age: 20 }
            ]);
        }, 2000);
    });
}

// Consumindo promises de forma sequencial com os await (como ensinado nas aulas até então).
// const init = async () => {
//     const products = await getProducts();
//     const categories = await getCategories();
//     const users = await getUsers();

//     console.log({ 
//         products, 
//         categories, 
//         users 
//     });
// };

// Consumindo promises de forma paralela com o Promise.all (mais eficiente e rápido).
// const init = async () => {
//     try {
//         const [products, categories, users] = await Promise.all([
//             getProducts(),
//             getCategories(),
//             getUsers()
//         ]);

//         console.log({ 
//             products, 
//             categories, 
//             users 
//         });
//     } 
//     catch (error) {
//         console.error(error.message); // mensagem legível
//         // console.error(error.stack);   // stack trace para debug
//     }
// };

// Consumindo promises de forma paralela com o Promise.allSettled (retorna um array de objetos com o status da promise e o valor ou o erro).
const init = async () => {
    try {
        const results = await Promise.allSettled([
            getProducts(),
            getCategories(),
            getUsers()
        ]);

        console.log(results);
    } 
    catch (error) {
        // Obs: o Promise.allSettled não fará disparar o catch, mas o status da promise será "rejected".
        console.error(error.message); // mensagem legível
        // console.error(error.stack);   // stack trace para debug
    }
};

init();