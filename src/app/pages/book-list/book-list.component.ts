import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookServiceService } from '../../services/book-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Input() bookList: any[] = [];
  constructor(private router: Router, private bookService: BookServiceService) { }

  ngOnInit(): void {
  }
  showDetails(book: Book){
    this.bookService.book = book;
    this.router.navigateByUrl('bookdirectory/book')
  }

}
