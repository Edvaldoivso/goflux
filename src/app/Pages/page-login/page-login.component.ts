import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {


  mensagem : string = "FAÇA SEU LOGIN"


  

  constructor() { }

  ngOnInit(): void {
  }

}
