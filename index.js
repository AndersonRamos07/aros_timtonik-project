const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 7000;

const Modelo = require('./models/Modelo');//import
const Function = require('./functions/functions');//import

// http: GET - HOME
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// http: GET - TODOS
app.get('/getAll', (req, res)=>{
  var jsonL = Function.saveContent();
  console.log(typeof(jsonL) + '<jsonL + typeOfwJSNconvert>');
  var jsonInArray = JSON.parse(jsonL);
  //var retornoSemUm = jsonInArray.pop();
  //var encontrarNoArray = jsonInArray.find(elem =>{elem === 1});
  console.log(typeof(encontrarNoArray) + '<encontrarNoArray>');
  res.status(200).send(jsonInArray);
});

//  http: POST - POR NOME
app.post('/searchByName', (req, res)=>{
  console.log(req.param.nomeSearch + '<nomeSearch>')
  var jsonL = Function.saveContent();
  var jsonInArray = JSON.parse(jsonL);
  var retorno = jsonInArray.find(elem => elem.nome == req.body.nomeSearch)
  res.send(retorno);
})

// http: POST - ADICIONAR
app.post('/add', (req, res) => {
  var endereco = {"rua":req.body.rua,"bairro":req.body.bairro,"cidade":req.body.cidade}
  var retorno = Function.construir(req.body.nome, req.body.sobreNome, req.body.cpf, endereco);
  res.json(retorno);
});

app.get('/getJson', (req, res)=>{
  var jsonL = Function.getContentConvert();
  console.log(jsonL + typeof(jsonL) + '<typeof(jsonL)> + getJson');
  res.send(jsonL);
})

app.listen(PORT, () => {
  console.log(`rodando na porta http://localhost:${PORT}`)
});

/*
app.post('/foi', (req, res)=>{
  var endereco = {
    "rua":req.body.rua,
    "bairro":req.body.bairro,
    "cidade":req.body.cidade
  }
  var retorno = Function.construir(req.body.nome, req.body.sobreNome, req.body.cpf, endereco);
  var inclusao = Function.pushContent(retorno);
  res.json(inclusao);
});
*/