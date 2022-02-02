
import { Routes } from '@angular/router';
import { CadastrarTarefaComponent } from './cadastrar';

import { ListarTarefaComponent } from './listar';

export const TarefasRoutes: Routes = [
  {
    path: 'tarefas',
    redirectTo: 'tarefas/listar'
  },
  {
    path: 'tarefas/listar',
    component: ListarTarefaComponent
  },
  {
    path: 'tarefas/cadastrar',
    component: CadastrarTarefaComponent
  }
];
