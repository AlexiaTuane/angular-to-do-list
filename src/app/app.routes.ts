// app.routes.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgendaComponent } from './agenda/agenda.component';
import { PostItComponent } from './post-it/post-it.component';
import { SudokuComponent } from './sudoku/sudoku.component';
import {ListaComponent} from './lista/lista.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'lista', component: AgendaComponent },
  { path: 'post-it', component: PostItComponent },
  { path: 'sudoku', component: SudokuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule { }
export { routes };