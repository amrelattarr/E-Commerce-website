import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr:any[] , searchTerm: string): any[] {
    return arr.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }

}
