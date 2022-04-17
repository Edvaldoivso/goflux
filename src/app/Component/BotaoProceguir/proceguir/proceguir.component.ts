import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proceguir',
  templateUrl: './proceguir.component.html',
  styleUrls: ['./proceguir.component.scss'],
})
export class ProceguirComponent implements OnInit {
  public validacao: Array<{ cnpj: number; senha: string }> = [];

 



  
  ValidaAcesso() {

    if (this.validacao.length < 2) {
      const confirm = window.confirm("Revise seus dados");
    } else {
      let dados = localStorage.getItem("cnpj");
      console.log(this.validacao.length, dados)
    }
  }


  constructor() {}

  ngOnInit(): void {}
}
