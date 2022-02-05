import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ConversorComponent } from './components/conversor.component';



@NgModule({
  declarations: [
    ConversorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ConversorComponent
  ]
})
export class ConversorModule { }
