import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SubjectPipe } from '../pipes/subject.pipe';
import { CoverPipe } from '../pipes/cover.pipe';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookOverviewPipe } from '../pipes/book-overview.pipe';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    PagesComponent,
    BookSearchComponent, BookListComponent,SubjectPipe, CoverPipe, BookDetailsComponent, 
    BookOverviewPipe,SearchComponent, HomeComponent],
  imports: [ CommonModule, SharedModule, RouterModule, ReactiveFormsModule, FormsModule ],
  exports: [
    PagesComponent,
    BookSearchComponent
  ]
})
export class PagesModule { }
