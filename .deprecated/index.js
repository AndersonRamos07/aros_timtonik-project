const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 7000;

const Modelo = require('./models/ModeloJS'); //import
const Function = require('./functions/functions');          //import

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/salvar', (req, res) => {
  var endereco = {
    "rua":req.body.rua,
    "bairro":req.body.bairro,
    "cidade":req.body.cidade
  }
  var retorno = Function.construir(req.body.nome, req.body.sobreNome, req.body.cpf, endereco);
  res.json(retorno);
});

app.get('/all', (req, res)=>{
  var jsonL = Function.saveContent();
  res.status(200).send(jsonL);
});

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

app.listen(PORT, () => {
  console.log(`rodando na porta http://localhost:${PORT}`)
});

/*
app.get('/todos', (req, res)=>{
  var jsonL = Function.transForm();
  res.json(jsonL);
})

app.get('/all', (req, res)=>{
  var jsonL = Function.getContent();
  res.send(jsonL);
})
*/