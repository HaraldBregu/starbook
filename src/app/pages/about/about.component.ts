import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { isBrowser } from "angular2-universal";

export interface IMemberObject {
  fullname: string;
  headline: string;
  description: string;
  avatar_url?: string;
  email?: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})

export class AboutComponent implements OnInit {
  public memberObject: IMemberObject[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.memberObject.push(
    {
      fullname: "Harald Bregu",
      headline: "Software Architect",
      description: "Now Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
      avatar_url: "https://organicthemes.com/demo/profile/files/2012/12/profile_img.png",
      email: "harald.bregu@starbook.co"
    },
    {
      fullname: "Aleksandr Gorin",
      headline: "Software Developer",
      description: "Now Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
      avatar_url: "https://organicthemes.com/demo/profile/files/2012/12/profile_img.png",
      email: "aleksandr.gorin@gmail.com"
    })
    // console.log('member object: ' + JSON.stringify(this.memberObject));
  }

}
