import { Component, HostListener, Input, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';
import { FormBuilder } from '@angular/forms';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  public bookList: Book[] = [];
  public loading: boolean = true;
  public loadingRecords: boolean = false;
  @HostListener('window:scroll', ['$event'])
  onScroll(){
    this.scrollLoadRecords();
  }
  constructor( private bookService: BookServiceService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const filters = localStorage.getItem('filters') ?? '';
    if(filters){
      this.loadRecords(filters);
    }
    else{
      setTimeout(() => {
        this.loading = false;
      }, 5000);
    }
  }

  loadRecords(filters: string){
    this.loading = true;
    this.bookService.page = 1;
    this.bookService.getBooks(filters,1).subscribe((resp) => {
      this.bookList = resp;
      // .map(book => {
      //   const bookToReturn = new Book(
      //     book.type,
      //     book.title,
      //     book.first_publish_year,
      //     book.number_of_pages_median,
      //     book.author_name,
      //     book.cover_i,
      //     book.subject,
      //     book.first_sentence,
      //     book.key
      //   )
      //   return bookToReturn;
      // } );
      console.log(this.bookList);
      
      this.loading = false;
    });
  }

  scrollLoadRecords(){
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);
    if(pos > max){
      this.loadingRecords = this.bookService.loading;
      if(this.bookService.loading) return; 
      const filters = localStorage.getItem('filters') ?? '';
      this.bookService.getBooks(filters).subscribe((resp) => {
        this.bookList.push(...resp)
        this.loading = false;
        setTimeout(() => {
          this.loadingRecords = false;
        }, 3000);

      });
    }
  }
}
