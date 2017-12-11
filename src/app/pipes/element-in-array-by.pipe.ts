import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elementInArrayBy'
})
export class ElementInArrayByPipe implements PipeTransform {
  transform(array: Array<any>, key:any, value:any, returnFieldValue:any): any {
    if (array === undefined) return
    var el = null
    for (let i=0; i<array.length; i++) {
      var obj = array[i]
      if (obj[key]===value) {
        if (returnFieldValue) {
          el = obj[returnFieldValue]
          break
        } else {
          el = obj
          break
        }
      }
    }
    return el
  }
}
