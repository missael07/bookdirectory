import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookServiceService } from '../../services/book-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})

export class BookDetailsComponent implements OnInit {
  public img:string = ''
  public book: any;
  constructor(private bookService: BookServiceService, private router: Router) { 
    console.log(this.bookService.book);
    this.book = this.bookService.book;
    if(!this.book.title){
      router.navigateByUrl('bookdirectory/search')
    }
  }

  ngOnInit(): void {
  }

}
