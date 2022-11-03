import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { HomeComponent } from './home/home.component';

const childRoutes: Routes = [
  { 
    path: 'search', component: BookSearchComponent,
  },
      { path: 'book', component: BookDetailsComponent
      },
      { path: 'home', component: HomeComponent
      },
];


@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildRoutesModule { }
