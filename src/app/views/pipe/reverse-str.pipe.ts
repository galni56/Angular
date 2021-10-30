import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseStr'
})
export class ReverseStrPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let strValue = value.substring(0, args)
    let reverseValue = strValue.split('').reverse().join('');

    return value ? value.slice(args) + reverseValue : '';
  }

}
