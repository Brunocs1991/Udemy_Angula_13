import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JogoDaVelhaModule } from './jogo-da-velha/jogo-da-velha.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JogoDaVelhaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
