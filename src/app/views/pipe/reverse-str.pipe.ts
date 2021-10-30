import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseStr'
})
export class ReverseStrPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(value);
    return value.slice(0,args);
  }

}
