import { Directive, HostListener, ElementRef, OnInit } from "@angular/core";
import { CurrencyPipe } from "../pipes/currency.pipe";

@Directive({
  selector: '[appFormatter]'
})
export class FormatterDirective {
  private el: any;

  constructor(
    private elementRef: ElementRef,
    private currencyPipe: CurrencyPipe
  ) {
    this.el = this.elementRef.nativeElement;

  }

 ngOnInit() {
   this.el.value = this.currencyPipe.transform(this.el.value);
 }

 @HostListener("focus", ["$event.target.value"])
 onFocus(value) {
   this.el.value = this.currencyPipe.parse(value); // opossite of transform
  //  console.log('focus');
 }

 // @HostListener("focusout", ["$event.target.value"])
 // onFocusOut(value) {
 //   this.el.value = this.currencyPipe.parse(value); // opossite of transform
 //   console.log('focus out');
 // }

 @HostListener("blur", ["$event.target.value"])
 onBlur(value) {
   this.el.value = this.currencyPipe.transform(value);
  //  console.log('blur value');
 }
}
