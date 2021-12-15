export default class Modelo{
  private Nome: String;
  private CPF: Number;
  private Enderecos: {};

  constructor(pNome, pCPF, pEnderecos){
    this.Nome = pNome;
    this.CPF = pCPF;
    this.Enderecos = pEnderecos;
  }
  private showThis(){
    return Modelo;
  }
}