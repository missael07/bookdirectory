import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookSearchComponent } from './book-search/book-search.component';

const childRoutes: Routes = [
  { path: 'home', component: BookSearchComponent,},
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];


@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildRoutesModule { }
