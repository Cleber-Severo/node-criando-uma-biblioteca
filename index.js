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



pegaArquivo('./arquivos/texto.md');


// \[[^[\]]*?\]
