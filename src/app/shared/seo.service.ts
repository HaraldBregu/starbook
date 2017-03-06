import { Injectable, Inject } from '@angular/core';
import { DomAdapter } from '@angular/platform-browser/src/dom/dom_adapter';
import { __platform_browser_private__, DOCUMENT} from '@angular/platform-browser';

@Injectable()
export class SeoService {
  private _dom: DomAdapter = __platform_browser_private__.getDOM();
  constructor(@Inject(DOCUMENT) private _document: any) { }

  setTitle(title: string) {
    this._document.title = title;
  }

  setMetaElem(name: string, value: string) {
    let headTags = this._document.head.children as HTMLCollection;
    for (let i = 0; i < headTags.length; i++) {
      let elem = headTags[i] as HTMLElement;
      if (elem.tagName === 'meta') {
        let attr = elem['attribs'];
        if ('name' in attr) {
          if (attr.name === name) {
            this._dom.remove(elem);
          }
        }
      }

    }

    let el = this._dom.createElement('meta') as HTMLMetaElement;
    this._dom.setAttribute(el, 'name', name);
    this._dom.setAttribute(el, 'content', value);
    this._dom.appendChild(this._document.head, el);
  }

  setOgElem(name: string, value: string) {
    let headTags = this._document.head.children as HTMLCollection;
    for (let i = 0; i < headTags.length; i++) {
      let elem = headTags[i] as HTMLElement;
      if (elem.tagName === 'meta') {
        let attr = elem['attribs'];
        if ('property' in attr) {
          if (attr.property === name) {
            this._dom.remove(elem);
          }
        }
      }

    }

    let el = this._dom.createElement('meta') as HTMLMetaElement;
    this._dom.setAttribute(el, 'property', name);
    this._dom.setAttribute(el, 'content', value);
    this._dom.appendChild(this._document.head, el);
  }
}
