import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http: HttpClient) { }

  getBooks(){
    return this.http.get('').pipe(
      map((resp) =>{
        return resp;
      })
    )
  }
}
