import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {
  private object;

  constructor() { }

  setObject(object) {
    this.object = object;
  }
  getObject() {
    return this.object;
  }

}
