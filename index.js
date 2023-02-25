import fs from 'fs'; 
import chalk from 'chalk';

function trataErro(erro) { 
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório'));
}
// async/await

async function pegaArquivo(caminhoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoArquivo, encoding);
        console.log(chalk.green(texto));
    } catch (erro) {
        trataErro(erro)
    } finally {
        console.log(chalk.yellow('operação concluída'));
    }
}



//promisses com then()

// function pegaArquivo(caminhoArquivo) {
//     const encoding = 'utf-8';
//     fs.promises
//         .readFile(caminhoArquivo, encoding)
//         .then((texto) => console.log(chalk.green(texto))) 
//         .catch(trataErro)
// }

pegaArquivo('./arquivos/texto.md');

