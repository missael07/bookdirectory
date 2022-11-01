import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';



@NgModule({
  declarations: [
    PagesComponent,
    BookSearchComponent, BookListComponent],
  imports: [ CommonModule, SharedModule, RouterModule ],
  exports: [
    PagesComponent,
    BookSearchComponent
  ]
})
export class PagesModule { }
