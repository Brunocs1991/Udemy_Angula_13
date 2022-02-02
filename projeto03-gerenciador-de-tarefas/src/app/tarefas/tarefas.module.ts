import { TarefaService } from './shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTarefaComponent } from './listar';



@NgModule({
  declarations: [
    ListarTarefaComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
