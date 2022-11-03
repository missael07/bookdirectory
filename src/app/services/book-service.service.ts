import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import {  of } from 'rxjs';
import { Books } from '../interface/book.interface';
import { Book } from '../models/book.model';

const base_url = 'http://openlibrary.org/search.json?';
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

    public page: number = 1;
    public loading: boolean = false;
    public book: Book =  new Book('', '', 0, 0, [], '', [], [],'');
    constructor(private http: HttpClient) { }

    getBooks( filters:string, page: number = 0): Observable<Book[]>{

        if(this.loading){

            return of([]);
        } 

        this.loading = true;
        const pageNumber = page == 0 ? this.page : 1;
        return  this.http.get<Books>(`${base_url}${filters}page=${pageNumber}`).pipe(
            map((resp) => resp.docs),
            tap( () =>{
                this.page += 1;
                this.loading = false;
            })
        );

    }

}
