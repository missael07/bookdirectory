import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cover'
})
export class CoverPipe implements PipeTransform {

  transform(value: string): string {
    if(value){
      return  `https://covers.openlibrary.org/b/id/${value}-M.jpg`
    }

    return './assets/no-image.png';
  }

}
