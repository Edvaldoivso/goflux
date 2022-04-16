import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Pages
import { PageCadastroComponent } from './Pages/page-cadastro/page-cadastro.component';
import { PageLanceComponent } from './Pages/page-lance/page-lance.component';
import { PageLoginComponent } from './Pages/page-login/page-login.component';
import { PageOfertaComponent } from './Pages/page-oferta/page-oferta.component';



//Render
const routes: Routes = [
  
  {path:"", component : PageLoginComponent},
  {path:"cadastro", component : PageCadastroComponent},
  {path:"lance", component : PageLanceComponent},
  {path:"Ofertas", component : PageOfertaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
