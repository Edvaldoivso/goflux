import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-colaborador',
  templateUrl: './form-colaborador.component.html',
  styleUrls: ['./form-colaborador.component.scss'],
})
export class FormColaboradorComponent implements OnInit {
  constructor() {}

  public cnpj: string = '';
  public nome: string = '';
  public cidade: string = '';
  public estado: string = '';
  public atuacao: string = '';
  public senha: string = '';
  public gestor: string = '';

  CadastraFuncionario() {
    let Dados = [
      this.nome,
      this.cidade,
      this.estado,
      this.atuacao,
      this.senha,
      this.gestor, 
    ];
    let StringDados = Dados.toString();
    localStorage.setItem(this.cnpj, this.senha);
    localStorage.setItem(this.nome, StringDados);
    window.confirm('Salvo Localmente !');
  }

  Pausar() {
    window.confirm('Pausar ?');
  }

  ngOnInit(): void {}
}
