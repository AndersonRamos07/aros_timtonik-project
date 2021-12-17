const fs = require('fs');
const fsDir = require('fs.promises');
const os = require('os');

//  CONFERE O ARQUIVO E RETORNA FALSE/TRUE
const verificarArquivo = (pArquivo)=>{
  return fs.readdir(pArquivo).length > 0 ? false : true;
};

//  CONVERTE E RETORNA EM JSON.STRINGIFY
const verificarConteudo = (pConteudo)=>{
  if(typeof(pConteudo) == 'string'){return pConteudo;}
  else if(typeof(pConteudo) == 'object'){return JSON.stringify(pConteudo, null, ' ');}
  else{console.log(`O conteúdo é do tipo${typeOf(pConteudo)}`)}  
};

//  RETORNA O CONTEUDO EM STRING
const pegarConteudo = (pArquivo)=>{
  var retorno;
  try {const data = fs.readFileSync(pArquivo, 'utf8'); retorno = data;}
  catch (err) {console.error(err)}
  return retorno;
};

//  INSERE O CONTEUDO NO ARQUIVO
const aditarArquivo = (pConteudo, pArquivo)=>{
  return fs.writeFile(pArquivo, pConteudo, (err)=>{
    if(err)throw err
    console.log('Arquivo gravado!')})
};

module.exports = {verificarArquivo, verificarConteudo, aditarArquivo, pegarConteudo}