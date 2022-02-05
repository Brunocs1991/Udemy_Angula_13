import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DadosService } from './dados.service';

import { DashboardComponent } from './dashboard.component';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent
  ],
  providers: [
    DadosService
  ]
})
export class DashboardModule { }
