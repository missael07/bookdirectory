import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookSearchComponent } from './book-search/book-search.component';

const routes: Routes = [
    { 
        path: 'home', 
        component: BookSearchComponent,
        loadChildren: () => import('./child-routes.module').then(m => m.ChildRoutesModule)
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
