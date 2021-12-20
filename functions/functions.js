const modelo = require('../models/Modelo');
const funcFiles = require('./fileFunctions');
const getFunc = require('./getFunction');

const cArquivo = './arquivo/_arosBD.json';

const construir = (pNome, pSobreNome, pCPF, pEnderecos) => {
  var modeloNovo = new modelo(pNome, pSobreNome, pCPF, pEnderecos);
  modeloNovo.setAttribute(pNome, pSobreNome);
  modeloNovo.addContador = 1;

  try{
    const dados = funcFiles.verificarConteudo(modeloNovo);
    var todoConteudo = funcFiles.pegarConteudo(cArquivo); //(tC)
    var tCSemColchete = todoConteudo.substring(0, todoConteudo.length -1);
    const tCAtualizado = tCSemColchete + ',\n' + dados + '\n]';
    funcFiles.aditarArquivo(tCAtualizado, cArquivo);
  }
  catch(erro){ console.log(erro.message); }
  finally{ console.log(modeloNovo.showThis()); }  
  return modeloNovo;
};

const saveContent = ()=>{
  return funcFiles.pegarConteudo(cArquivo);
};

const pegarOConteudo = () =>{
  var content = funcFiles.pegarConteudo(cArquivo); 
  var tudo = getFunc.convertArray(content);
}

module.exports = { construir, saveContent, pegarOConteudo }