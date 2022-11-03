import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchForm = this.formBuilder.group({
    title: ['' || localStorage.getItem('title')?.split("+").join(' ')],
    author: ['' || localStorage.getItem('author')?.split("+").join(' ')],
    subject: ['' || localStorage.getItem('subject')?.split("+").join(' ')],
  });
  public filters: string = '';
  public hasErrors: boolean = false;
  @Output() buildUrlFilters: EventEmitter<string> = new EventEmitter();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  search(){
    if(this.validateFilters()){
      this.hasErrors = false;
      const title = this.searchForm.get('title')?.value?.split(" ").join('+') || '';
      const author = this.searchForm.get('author')?.value?.split(" ").join('+') || '';
      const subject = this.searchForm.get('subject')?.value?.split(" ").join('+') || '';
      const filters = this.buildUrl(title, author,subject);
      this.saveLocalStorage(filters,title, author,subject)
      this.buildUrlFilters.emit(filters);
    }
    else {
      this.hasErrors = true;
    }
  }
  buildUrl(title: string , author: string, subject: string): string{
        let url =''
        if(title){
            url += `title=${title}&&`
        }
        if(author){
            url += `author=${author}&&`
        }
        if(subject){
            url += `subject=${subject}&&`
        }
        return url;
    }

  validateFilters(): boolean{
    const title = this.searchForm.get('title')?.value;
    const author = this.searchForm.get('author')?.value;
    const subject = this.searchForm.get('subject')?.value;

    if(title || author || subject) return true;

    return false;
  }

  saveLocalStorage(filters:string, title: string , author: string, subject: string){
    localStorage.setItem('filters', filters)
    localStorage.setItem('title', title)
    localStorage.setItem('author', author)
    localStorage.setItem('subject', subject)
  }


}
