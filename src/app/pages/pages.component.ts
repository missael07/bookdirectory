import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  public bookList: any[] = [];
  public loading: boolean = true;
  book ='';
  constructor(private bookService: BookServiceService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
