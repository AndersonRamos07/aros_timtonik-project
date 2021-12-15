const fs = require('fs');
const os = require('os');

const verificarArquivo = (pArquivo)=>{
  return fs.readdir(pArquivo).length > 0 ? false : true;
};

const verificarConteudo = (pConteudo)=>{
  if(typeof(pConteudo) == 'string'){
    return pConteudo;
  }
  else if(typeof(pConteudo) == 'object'){
    return JSON.stringify(pConteudo);
  }
  else{
    console.log(`O conteúdo é do tipo${typeOf(pConteudo)}`)
  }  
}

const aditarArquivo = (pConteudo, pArquivo)=>{
  return fs.appendFile(pArquivo, pConteudo, (err)=>{
      if(err)throw err
      console.log('Arquivo gravado!')})
}

module.exports = {verificarArquivo, verificarConteudo, aditarArquivo}