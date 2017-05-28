import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyCent'
})
export class CurrencyCentPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (Number(value) / 100).toFixed(2);
  }

}
