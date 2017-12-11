import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectContain'
})
export class ObjectContainPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (typeof args==="string" && args==="STRING_OBJECT_IN_ARRAY") {
      if (typeof value==="object") {
        var containstring = false
        for (let i=0; i<value.length; i++) {
          var obj = value[i]
          if (typeof obj==="string") {
            containstring = true
            break
          }
        }
        return containstring
      }
    }
    else if (typeof args==="string" && args==="CONTAIN_OBJECT_IN_ARRAY") {
      if (typeof value==="object") {
        var containobject = false
        for (let i=0; i<value.length; i++) {
          var obj = value[i]
          if (typeof obj==="object") {
            containobject = true
            break
          }
        }
        return containobject
      }
    }
    else if (typeof args==="string" && args==="ARRAY_HAVE_TITLE") {
      if (typeof value==="object") {
        var containobject = false
        for (let i=0; i<value.length; i++) {
          var obj = value[i]
          if (typeof obj==="object") {
            if (obj.type && obj.type==="TITLE") {
              containobject = true
              // console.log(obj.type)
              break
            }
          }
        }
        return containobject
      } else {
        return false
      }
    }
    return false
  }
}
