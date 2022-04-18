import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-oferta',
  templateUrl: './page-oferta.component.html',
  styleUrls: ['./page-oferta.component.scss'],
})
export class PageOfertaComponent implements OnInit {
  imgtalk: string = '../../../assets/Conversation.gif';

  public titleofertas: string = 'LANCES ATIVOS';
  public produto2: string = 'Produto aqui';
  public quantidade2: string = '400T';
  public valor2: string = '400rs';
  public numitem : string = ''


  public listofertas: Array<{
    id: number;
    produto: string;
    valor: number;
    quantidade: string;
  }> = [
    { id: 1, produto: 'MILHO', valor: 4000, quantidade: '2t' },
    { id: 2, produto: 'ARROZ', valor: 700, quantidade: '500kg' },
    { id: 3, produto: 'OVOS', valor: 600, quantidade: '200kg' },
    { id: 4, produto: 'SOJA', valor: 2000, quantidade: '10t' },
  ];

  pegaid() {
    window.confirm('Clicado');
  }

  SelecionarItem() {
    window.confirm("Valor item" + this.numitem);
  }

  constructor() {}

  ngOnInit(): void {}
}
