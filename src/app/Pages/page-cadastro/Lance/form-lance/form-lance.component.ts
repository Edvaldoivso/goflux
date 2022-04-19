import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-lance',
  templateUrl: './form-lance.component.html',
  styleUrls: ['./form-lance.component.scss'],
})
export class FormLanceComponent implements OnInit {
  constructor() {}

  public Produto: string = '';
  public Origem: string = '';
  public Destino: string = '';
  public Quantidade: string = '';

  SalvaOferta() {
    let DadosLance = [this.Origem, this.Destino, this.Produto, this.Quantidade];
    let LanceString = DadosLance.toString();
    localStorage.setItem('Oferta: ' + this.Produto, LanceString);
    window.confirm('Salvo Localmente');
  }

  PausarOferta() {
    window.confirm('Em produção?');
  }

  ngOnInit(): void {}
}
