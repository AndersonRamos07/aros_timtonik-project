const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 7000;

const file = require('fs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//app.use(function (req, res) {
//  res.setHeader('Content-Type', 'text/plain')
//  res.write('you posted:\n')
//  res.end(JSON.stringify(req.body, null, 2))
//})

const Modelo = require('./models/ModeloDeClasse/ModeloJS');
const Function = require('./functions/functions');
const Arquivo = require('./functions/functionsFile');

app.get('/', (req, res)=>{
  res.json('Initial Page');
})
/*
app.post('/:nome:cpf:ender', (req, res)=>{

  var nome = req.params.nome;
  var cpf = req.params.cpf;
  var ender = req.params.ender;
  var novoModelo = Function.construir(nome, cpf, ender);

  novoModelo.setAttribute(nome);

  res.json(novoModelo);
})
*/
app.post('/salvar', (req, res)=>{
  var retorno = Function.construir(req.body.nome, req.body.sobreNome, req.body.cpf, req.body.ender);
  res.json(retorno);
})


app.post('/gravar', (req, res)=>{
  var dados = Function.construir(req.body.nome, req.body.cpf, req.body.ender);
  var resultado = ',\n' + JSON.stringify(dados) + '\n]';

  file.appendFile('./arquivo/bd.json', resultado, (err)=>{
   if(err)throw err
   console.log('Arquivo gravado!') 
  })
  res.end('acho que foi...')
})


app.post('/novo', (req, res)=>{
  var novoNome = req.body.nome;
  var novoCPF = req.body.cpf;
  var novoEnder = req.body.ender;
  var novinhoEmFolha = Function.construir(novoNome, novoCPF, novoEnder);

  if (Arquivo.escrever(novinhoEmFolha)){
      res.send(novinhoEmFolha.showThis());
  } else{
      res.send(Arquivo.escrever(novinhoEmFolha));
  }

//  res.json('foi!');
})

app.listen(PORT, ()=>{
  console.log(`rodando na porta http://localhost:${PORT}`)
})