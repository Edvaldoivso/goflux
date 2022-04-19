import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-empresa',
  templateUrl: './form-empresa.component.html',
  styleUrls: ['./form-empresa.component.scss'],
})
export class FormEmpresaComponent implements OnInit {
  constructor() {}

  public cnpj: string = '';
  public rasao: string = '';
  public cidade: string = '';
  public estado: string = '';
  public area: string = '';
  public senha: string = '';

  CadastraEmpresa() {
    let Dados = [this.senha, this.area, this.cidade, this.rasao, this.estado];

    let StringDados = Dados.toString();
    localStorage.setItem(this.rasao, StringDados);
    localStorage.setItem(this.cnpj, this.senha);
    window.confirm('Salvo Localmente !');
  }

  ngOnInit(): void {}
}
