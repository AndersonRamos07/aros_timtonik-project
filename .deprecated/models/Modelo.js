class Modelo {
  static contador = 0;
  constructor(pNome, pSobreNome, pCPF, pEnderecos){
    this.id = Modelo.contador;
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
  set addContador(lastID){
    Modelo.contador = lastID + 1;
  }
}

module.exports = Modelo