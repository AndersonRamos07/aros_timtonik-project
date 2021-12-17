class ModeloJS {
  static contador = 0;
  constructor(pNome, pSobreNome, pCPF, pEnderecos){
    this.id = ModeloJS.contador;
    this.nome = pNome;
    this.sobreNome = pSobreNome;
    this.cpf = pCPF;
    this.enderecos = pEnderecos;
  }
  setAttribute(pNome, pSobreNome){
    this.nomeCompleto = pNome + ' ' + pSobreNome;
  }
  showThis (){
    return `foi adicionado o ${this.nome} ao sistema!`
  }
  set addContador(plus){
    ModeloJS.contador = ModeloJS.contador + plus;
  }
}

module.exports = ModeloJS

/*contar(plus){
  this.id = this.contador + plus;
}
*/
/*  implementaContador(){
    return this.id++
  }
  */