const modelo = require('../models/ModeloJS');
const funcFiles = require('./fileFunctions');

const construir = (pNome, pSobreNome, pCPF, pEnderecos) => {
  var modeloNovo = new modelo(pNome, pSobreNome, pCPF, pEnderecos);
  modeloNovo.setAttribute(pNome, pSobreNome);
  try{
    //var dados = JSON.stringify(modeloNovo)+'\n,';
    const dados = funcFiles.verificarConteudo(modeloNovo);
    funcFiles.aditarArquivo(dados, './arquivo/main.json');
    //fs.appendFile('./arquivo/main.json', dados, (err)=>{
    //  if(err)throw err
    //  console.log('Arquivo gravado!')})
  }
  catch(erro){
    console.log(erro.message);
  }
  console.log(modeloNovo.showThis());
  
  return modeloNovo;
}

module.exports = {construir}