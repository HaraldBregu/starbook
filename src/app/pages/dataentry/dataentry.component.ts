import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { NavigationService } from '../../shared/navigation.service';
import { isBrowser } from "angular2-universal";
import { AuthService } from '../../shared/auth.service';
import { CommonService } from '../../shared/common.service';

@Component({
  selector: 'app-dataentry',
  templateUrl: './dataentry.component.html',
})
export class DataentryComponent implements OnInit {
  public DataEntry = {
    title: null,
    description: null,
    details: [],
    firstname: "******",
    lastname: "********",
    email: "**************",
    phone: "*******",
    city: "",
    province: "",
    street: "Via *******",
  }
  public DataEntryState = {
    loading: false,
    error: null,
    success: null,
  }

  constructor(private route: ActivatedRoute, private router: Router, private navigationService: NavigationService, public commonService: CommonService, private authService: AuthService) {
    if (isBrowser) {
      let account = JSON.parse(localStorage.getItem('auth'))
      if (!account) {
        this.router.navigate(['/'])
      } else if (account._id!=="59e32613e587f27e7ecf8877") {
        this.router.navigate(['/'])
      }
    }
  }

  ngOnInit() {
  }

  saveNewPost(data) {
    this.DataEntryState.success = JSON.stringify(data)
  }
}
