const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 7000;

const Modelo = require('./models/ModeloJS'); //import
const Function = require('./functions/functions');          //import

app.get('/', (req, res) => {
  res.json('Initial Page');
})

app.post('/salvar', (req, res) => {
  var retorno = Function.construir(req.body.nome, req.body.sobreNome, req.body.cpf, req.body.ender);
  res.json(retorno);
})

app.get('/todos', (req, res)=>{
  
})

app.listen(PORT, () => {
  console.log(`rodando na porta http://localhost:${PORT}`)
})