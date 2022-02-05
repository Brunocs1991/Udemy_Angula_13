import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ConversorComponent } from './components/conversor.component';
import { ConversorService } from './services/conversor.service';
import { MoedaService } from './services/moeda.service';
import { NumeroDirective } from './directives/numero.directive';
import { ModalCotacaoComponent } from './utils/modal-cotacao.component';
import { DataBrPipe } from './pipes/data-br.pipe';


@NgModule({
  declarations: [
    ConversorComponent,
    NumeroDirective,
    ModalCotacaoComponent,
    DataBrPipe
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
