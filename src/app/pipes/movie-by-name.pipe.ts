import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieByName'
})
export class MovieByNamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
