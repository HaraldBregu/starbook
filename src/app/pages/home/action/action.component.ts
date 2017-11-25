import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { CommonService } from '../../../shared/common.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
})
export class ActionComponent implements OnInit {
  @Input()
  post = null
  @Output()
  onPreviewPurchase: EventEmitter<any> = new EventEmitter<any>()
  @Output()
  onPreviewUpdate: EventEmitter<any> = new EventEmitter<any>()
  @Output()
  onSendQuotation: EventEmitter<any> = new EventEmitter<any>()

  public contacts = null
  public countContacts = 0
  public fragment = null

  constructor(private route: ActivatedRoute, public commonService: CommonService) {
    // console.log(JSON.stringify(this.post))
  }

  ngOnInit() {
    this.route.fragment.subscribe((fragment: string) => { this.fragment = fragment })

    // console.log(JSON.stringify(this.post['_id']))
    this.commonService.getMethod('posts/' + this.post['_id'] + '/contacts?type=count').then((data) => {
      this.countContacts = data.result
      // console.log(JSON.stringify(data.result))
    }).catch((error) => {
      this.countContacts = 0
    })
  }

  public previewPurchase(post: any): void {
    this.onPreviewPurchase.emit(post)
  }
  public previewUpdatePost(post: any): void {
    this.onPreviewUpdate.emit(post)
  }
  public sendQuotation(post: any): void {
    this.onSendQuotation.emit(post)
  }

}
