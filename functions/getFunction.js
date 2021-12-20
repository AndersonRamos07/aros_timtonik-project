const fFc = require('./fileFunctions');
//const axios = require('/axios');

const fetch = require('fetch');

//  *****   CONVERTE DE STRING PARA ARRAY
const convertArray = (pArray) =>{
    const arrayConvertido = JSON.parse(pArray);
    return arrayConvertido;
}

//  *****   PEGAR O CONTEUDO
const getModel = (pArquivo) =>{
    var json = fFc.pegarConteudo(pArquivo);
    console.log(/*JSON.stringify(json)*/ typeof(json) + '<getModel/json');
}

module.exports = {getModel, convertArray}

/*
axios({
    method: 'get',
    url: 'http://localhost:7000',
    responseType: 'stream'
  })
    .then(function (response) {
      response.data.pipe(fs.createWriteStream('ada_lovelac'))
    });
*/