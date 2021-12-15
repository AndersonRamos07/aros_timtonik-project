class ModeloJS {
  constructor(pNome, pSobreNome, pCPF, pEnderecos){
    this.Nome = pNome;
    this.SobreNome = pSobreNome;
    this.CPF = pCPF;
    this.Enderecos = pEnderecos;
  }
  setAttribute(pNome, pSobreNome){
    this.NomeCompleto = pNome + ' ' + pSobreNome;
  }
  showThis (){
    return `foi adicionado o ${this.Nome} ao sistema!`
  }
}

module.exports = ModeloJS