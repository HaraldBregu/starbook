import { Pipe, PipeTransform } from '@angular/core';
const PADDING = "000000";

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {
  private PREFIX: string
  private DECIMAL_SEPARATOR: string;
  private THOUSANDS_SEPARATOR: string;
  private SUFFIX: string

  constructor() {
    this.PREFIX = ''
    this.DECIMAL_SEPARATOR = ".";
    this.THOUSANDS_SEPARATOR = " ";
    this.SUFFIX = ' €'
  }

  transform(value: string, fractionSize: number = 2): string {
    let [ integer, fraction = "" ] = (value || "").toString().split(".");
    fraction = fractionSize > 0 ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize) : "";
    integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, this.THOUSANDS_SEPARATOR);
    var amount = this.PREFIX + integer + fraction;
    // var clear_amount = amount.replace(/\D/g,'');
    return amount;
  }

  parse(value: string, fractionSize: number = 2): string {
    let [ integer, fraction = "" ] = (value || "").replace(this.PREFIX, "").replace(this.SUFFIX, "").split(this.DECIMAL_SEPARATOR);
    integer = integer.replace(new RegExp(this.THOUSANDS_SEPARATOR, "g"), "");
    fraction = parseInt(fraction, 10) > 0 && fractionSize > 0 ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize) : "";
    var amount = integer + fraction;
    // amount = amount.replace(/\D/g,'');
    return amount;
  }

  // parseCents(value: string, fractionSize: number = 2): string {
  //   let [ integer, fraction = "" ] = (value || "").replace(this.PREFIX, "").replace(this.SUFFIX, "").split(this.DECIMAL_SEPARATOR);
  //   integer = integer.replace(new RegExp(this.THOUSANDS_SEPARATOR, "g"), "");
  //   fraction = parseInt(fraction, 10) > 0 && fractionSize > 0 ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize) : "";
  //   var amount = integer + fraction;
  //   // amount = amount.replace(/\D/g,'');
  //   return amount;
  // }
}
