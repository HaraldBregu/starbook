import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dynamicprice',
  templateUrl: './dynamicprice.component.html',
  // styleUrls: ['./dynamicprice.component.css']
})
export class DynamicpriceComponent implements OnInit {
  @Input()
  price = null
  @Output()
  onPriceCalculated: EventEmitter<any> = new EventEmitter<any>()

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  calcPrice(price) {
    this.onPriceCalculated.emit(499)
    return 499
  }

  getDecimalPartPrice(price) {
    // let price_contact = this.getPriceBasedOnBudget(post)/100
    return Math.trunc(price/100)
  }
  getFracPartPrice(price) {
    // var price_contact = this.getPriceBasedOnBudget(post)/100
    var price_contact = price/100
    var string_price_contact = price_contact.toFixed(2)
    let dec_number = String(string_price_contact).substr(String(string_price_contact).indexOf('.')+1)
    return dec_number
  }

  // getPriceBasedOnBudget(post) {
  //   if (post.budget.estimate_cost) {
  //     return post.budget.estimate_cost
  //   } else {
  //     return 0
  //   }
  // }

  // updateCountDownDate() {
  //   var now = new Date().getTime();
  //   var fromDate = new Date();
  //   fromDate.setHours(24,0,0,0);
  //   var toDate = fromDate.getTime();
  //   var distance = toDate - now;
  //   // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  //   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  //   var seconds = Math.floor((distance % (1000 * 60)) / 1000)
  //   this.CountDownDate.hours = hours
  //   this.CountDownDate.minutes = minutes
  //   this.CountDownDate.seconds = seconds
  // }
  // getCountDownHours(post) {
  //   let string_time = ""
  //   let hours = this.CountDownDate.hours
  //   string_time = hours.toString()
  //   if (hours<10) {
  //     string_time = "0" + hours.toString()
  //   }
  //   return string_time
  // }
  // getCountDownMinutes(post) {
  //   let string_time = ""
  //   let minutes = this.CountDownDate.minutes
  //   string_time = minutes.toString()
  //   if (minutes<10) {
  //     string_time = "0" + minutes.toString()
  //   }
  //   return string_time
  // }
  // getCountDownSeconds(post) {
  //   let string_time = ""
  //   let seconds = this.CountDownDate.seconds
  //   string_time = seconds.toString()
  //   if (seconds<10) {
  //     string_time = "0" + seconds.toString()
  //   }
  //   return string_time
  // }

}
