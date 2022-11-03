import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { 
        path: 'bookdirectory', 
        component: PagesComponent,
        loadChildren: () => import('./child-routes.module').then(m => m.ChildRoutesModule)
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
