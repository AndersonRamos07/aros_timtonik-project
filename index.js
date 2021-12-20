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
  res.status(200).send(JSON.parse(jsonL));
});

//  http: POST - POR NOME
app.post('/searchByName', (req, res)=>{
  var jsonL = Function.saveContent();
  var jsonInArray = JSON.parse(jsonL);
  res.send(jsonInArray.find(elem => elem.nome == req.body.nomeSearch));
})

// http: POST - ADICIONAR
app.post('/add', (req, res) => {
  var retorno = Function.construir(req.body.nome, req.body.sobreNome, req.body.cpf, {"rua":req.body.rua,"bairro":req.body.bairro,"cidade":req.body.cidade});
  res.json(retorno);
});

app.listen(PORT, () => {
  console.log(`rodando na porta http://localhost:${PORT}`)
});