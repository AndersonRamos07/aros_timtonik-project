const fs = require('file-system');
const os = require('os');

const arquivo = process.argv[2] || '../arquivo/bd.txt';
const encoding = 'utf8';
const callBack = (err) => {
  if (err) throw err
  console.log('Complete!')
}

const callBackTeste = (err) => {
  if (err) throw err;
      return true;
}


const escrever = (pconteudo) =>{
  var conteudo;
  conteudo = os.EOL + pconteudo;
  return fs.appendFile('../arquivo/bd.txt', conteudo, 'utf8', callBackTeste);
}

const ler = (conteudo) =>{
  fs.writeFile(arquivo, conteudo, enconding, callBack)
}

module.exports = {escrever, ler}