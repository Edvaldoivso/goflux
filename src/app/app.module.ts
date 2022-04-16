import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { OfertasComponent } from './Component/ListaOferta/ofertas/ofertas.component';

 //Pages
import { PageLoginComponent } from './Pages/page-login/page-login.component';
import { PageCadastroComponent } from './Pages/page-cadastro/page-cadastro.component';
import { PageOfertaComponent } from './Pages/page-oferta/page-oferta.component';
import { PageLanceComponent } from './Pages/page-lance/page-lance.component';
import { CadastrarComponent } from './Component/BotaoCadastrar/cadastrar/cadastrar.component';
import { ProceguirComponent } from  './Component/BotaoProceguir/proceguir/proceguir.component';
import { PausarComponent } from  './Component/BotaoPausar/pausar/pausar.component';
import { SalvarComponent } from  './Component/BotaoSalvar/salvar/salvar.component';

@NgModule({
  declarations: [
    AppComponent,
    OfertasComponent,
    PageLoginComponent,
    PageCadastroComponent,
    PageOfertaComponent,
    PageLanceComponent,
    CadastrarComponent,
    ProceguirComponent,
    PausarComponent,
    SalvarComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
