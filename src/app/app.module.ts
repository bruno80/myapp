import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AlunoModalPageModule } from './aluno-modal/aluno-modal.module';
import { IonicStorageModule } from '@ionic/storage';

// APÓS CRIAR A PAGINA DO MODAL É NECESSÁRIO IMPORTÁ-LO AQUI, POIS O HOME DEVE TER CONHECIMENTO DELE.
// SÓ IMPORTAR ALGUMA COISA AQUI CASO ESSE ALGUMA COISA NÃO FOR ACESSADO POR ROTA. EX.: O MODAL.


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    AlunoModalPageModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
