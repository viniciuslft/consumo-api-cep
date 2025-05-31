import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms'; // Para [(ngModel)]
//é fundamental para que o Angular consiga fazer requisições HTTP, como GET, POST, PUT, DELETE, etc.
//Habilita o sistema HTTP no app
import { HttpClientModule } from '@angular/common/http'; // Para API

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,          // Adicionado
    HttpClientModule      // Adicionado
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
