import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expiry'
})
export class ExpiryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result;
    if (value) {
      let dateElems = value.split('');
      let i = 0;
      dateElems.forEach((elem) => {
        if (elem === '/') {
          dateElems.splice(i, 1);
        }
      });
      if (dateElems.length > 1) {
        let i = 0;
        dateElems.forEach((elem) => {
          if (i < 3) {
            result += elem;
            if (i === 1) {
              result += '/';
            }
          }
        });
      } else {
        dateElems.forEach((elem) => {
          result += elem;
        });
      }
    }
    return result;
  }

}
