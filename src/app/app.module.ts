import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableroComponent } from './tablero/tablero.component';
import { PartidaModel } from "./model/partida.model";

@NgModule({
  declarations: [
    AppComponent,
    TableroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
