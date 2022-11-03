import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subject'
})
export class SubjectPipe implements PipeTransform {

  transform(value: string[]): string {
    if(!value || value.length <= 0) return '';
    let str = value.slice(0,10);
    return str.join(", ");
  }

}
