const modelo = require('../models/ModeloJS');
const funcFiles = require('./fileFunctions');

const cArquivo = './arquivo/arosBD.json';
//const FILE = './arquivo/aros_bd.json';

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
  catch(erro){
    console.log(erro.message);
  }
  finally{
  console.log(modeloNovo.showThis());
  }
  
  return modeloNovo;
};

const saveContent = ()=>{
  return funcFiles.pegarConteudo(cArquivo);
};

const pushContent = (pConteudo)=>{
  var paraConverter = saveContent();
  paraConverter.push(pConteudo);
  return console.log('Acho que foi... <pushContent>')
}

module.exports = {construir, saveContent, pushContent}

/*
const transForm = ()=>{
  return funcFiles.lerConteudo('./arquivo/main_aros.json');
};

const getContent = ()=>{
  return funcFiles.pegarConteudo('./arquivo/main_aros.json');
};
*/
/*
const construir = (pNome, pSobreNome, pCPF, pEnderecos) => {
  var modeloNovo = new modelo(pNome, pSobreNome, pCPF, pEnderecos);
  modeloNovo.setAttribute(pNome, pSobreNome);
  try{
    //var dados = JSON.stringify(modeloNovo)+'\n,';
    const dados = funcFiles.verificarConteudo(modeloNovo);
    funcFiles.aditarArquivo(dados, './arquivo/aros_bd.json');
    //fs.appendFile('./arquivo/main.json', dados, (err)=>{
    //  if(err)throw err
    //  console.log('Arquivo gravado!')})
  }
  catch(erro){
    console.log(erro.message);
  }
  console.log(modeloNovo.showThis());
  
  return modeloNovo;
};
*/

/*transForm, getContent, */