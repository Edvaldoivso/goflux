import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from 'src/app/Classes/Usuario';
import { LoginService } from 'src/app/login.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss'],
})
export class PageLoginComponent implements OnInit {
  private usuario: Usuario = new Usuario();

  //Construtores
  constructor(private router: Router, private authService: LoginService) {}

  public alerta = false;
  public senha: string = '';
  public cnpj: string = '';
  public mensagem: string = '';
  public novouser : boolean = false;


  validalogin() {
    if (this.cnpj && this.senha) {
      let Local = localStorage.getItem(this.cnpj);
      if (Local == this.senha) {
        this.router.navigate(['/Ofertas']);
      } else {
        this.mensagem = 'Revise seus dados!'
        this.alerta = true;
      }
    } else {

       this.mensagem = 'Que tal se cadastrar?';     
      this.alerta = true;
      setTimeout(() => {
        this.alerta = false;
      }, 4000);
    }
  }

  cadastraruser() {
    this.router.navigate(['/cadastro']);
  }

  ngOnInit(): void {}
}
