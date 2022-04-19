import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';


@Component({
  selector: 'app-page-oferta',
  templateUrl: './page-oferta.component.html',
  styleUrls: ['./page-oferta.component.scss'],
})
export class PageOfertaComponent implements OnInit {

constructor( private router: Router, private authService: LoginService ) {}

  imgtalk: string = '../../../assets/Conversation.gif';


  public titleofertas: string = 'LANCES ATIVOS';
  public produto2: string = 'Macarrão';
  public quantidade2: string = '400T';
  public valor2: string = '400rs';
  public nomeitem: string = '';

  //Array de Ofertas
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

  //Array de detalhes
  public DetalheOferta: Array<{ PrecoCobrado: number; RSTransporte: number }> =
    [
      { PrecoCobrado: 400, RSTransporte: 9000 },
      { PrecoCobrado: 300, RSTransporte: 700 },
      { PrecoCobrado: 7000, RSTransporte: 8000 },
      { PrecoCobrado: 100, RSTransporte: 100 },
    ];

  

  SelecionarItem() {
    window.confirm('Item Selecionado');
  }

  aceitar() {
    window.confirm('Aceitar');
  }

  remover() {
    window.confirm('Remover');
  }


  criarLance(){

  }

    cadastraruser() {
    this.router.navigate(['/cadastro']);
  }

  

  ngOnInit(): void {}
}
