import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ConversorComponent } from './components/conversor.component';
import { ConversorService } from './services/conversor.service';
import { MoedaService } from './services/moeda.service';
import { NumeroDirective } from './directives/numero.directive';


@NgModule({
  declarations: [
    ConversorComponent,
    NumeroDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ConversorComponent
  ],
  providers:[
    MoedaService,
    ConversorService
  ]
})
export class ConversorModule { }
