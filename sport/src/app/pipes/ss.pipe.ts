import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'ss'
})
export class SsPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return null;
  }

}
