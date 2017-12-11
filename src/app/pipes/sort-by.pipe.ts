import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})

export class SortByPipe implements PipeTransform {
  transform(arr: Array<any>, prop: any, reverse: boolean = false, type: any): any {
    if (arr === undefined) return
    if (type==="OBJECT") {
      const m = reverse ? -1 : 1
      return arr.sort((a: any, b: any): number => {
        const x = a[prop]
        const y = b[prop]
        return (x === y) ? 0 : (x < y) ? -1*m : 1*m
      })
    } else if (type==="STRING") {
      const newArray = []
      for (let i=0; i<arr.length; i++) {
        var obj = arr[i]
        if (typeof obj==="string") {
          newArray.push(obj)
        }
      }
      return newArray
    }
  }
}
