import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookOverview'
})
export class BookOverviewPipe implements PipeTransform {

  transform(value: string): string {
    return `https://openlibrary.org${value}`;
  }

}
