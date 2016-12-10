import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let phone = '';
    let numIndex = 0;
    let phoneNums = value.split('');
    phoneNums.forEach((num) => {
      if (numIndex === 2 || numIndex === 4 || numIndex === 6) {
        phone += num + ' ';
      } else {
        phone += num;
      }
      numIndex++;
    });
    return phone;
  }

}
