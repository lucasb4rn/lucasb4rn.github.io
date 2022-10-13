import { ProfissionalReadComponent } from './components/views/profissional/profissional-read/profissional-read.component';
import { HomeComponent } from './components/views/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfissionalCreateComponent } from './components/views/profissional/profissional-create/profissional-create.component';
import { ProfissionalDeleteComponent } from './components/views/profissional/profissional-delete/profissional-delete.component';
import { ProfissionalUpdateComponent } from './components/views/profissional/profissional-update/profissional-update.component';
import { ColaboradorReadComponent } from './components/views/colaborador/colaborador-read/colaborador-read.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'profissional',
    component: ProfissionalReadComponent
  },
  {
    path:'colaborador',
    component: ColaboradorReadComponent
  },
  {
    path:'profissional/create',
    component: ProfissionalCreateComponent
  },
  {
    path:'profissional/delete/:id',
    component: ProfissionalDeleteComponent
  },
  {
    path:'profissional/update/:id',
    component: ProfissionalUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
