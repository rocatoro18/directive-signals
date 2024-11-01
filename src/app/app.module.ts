import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { SignalsLayoutComponent } from './signals/layout/signals-layout/signals-layout.component';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule


@NgModule({
  declarations: [
    AppComponent,
    //SignalsLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Agrega HttpClientModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
