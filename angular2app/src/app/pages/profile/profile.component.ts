import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../shared/profile.service';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { NavigationService } from '../../shared/navigation.service';

export interface IUserData {
  fullname?: string;
  email?: string;
  phone_number?: string;
  street_name?: string;
  street_number?: number;
  city?: string;
  postal_code?: number;
  province?: string;
  country?: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {
  public selectTab: string|boolean = false;
  public SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  public delta: number = 0;
  public tabs = [
    {name: 'Generali', selected: false, url: 'settings'},
    {name: 'Metodo di Pagamento', selected: false, url: 'payment'},
    {name: 'Condizioni', selected: false, url: 'conditions'},
    {name: 'Privacy', selected: false, url: 'privacy'},
    {name: 'Assistenza', selected: false, url: 'help'}
  ];

  public userData: IUserData = {
    fullname: '',
    email: '',
    phone_number: '',
    street_name: '',
    street_number: null,
    city: '',
    postal_code: null,
    province: '',
    country: ''
  };

  public activePopup = '';
  public changePasswordError = {
    currentPassword: false,
    passwordConfirm: false
  };
  public changePasswordData = {
    currentPassword: '',
    newPassword: '',
    passwordConfirm: ''
  };
  public formError: boolean|{title?: string, message: string, type?: string} = false;

  constructor(private profileService: ProfileService, private router: Router, private navigationService: NavigationService, private route: ActivatedRoute) { }

  ngOnInit() {
    if (localStorage.getItem('auth') !== null) {
      let authData = JSON.parse(localStorage.getItem('auth'));
      this.userData.fullname = authData.fullname;
      this.userData.email = authData.email;
    } else {
      // this.router.navigate(['/']);
      this.tabs = [
        {name: 'Condizioni', selected: false, url: 'conditions'},
        {name: 'Privacy', selected: false, url: 'privacy'},
        {name: 'Assistenza', selected: false, url: 'help'}
      ];
    }

    this.route.params.subscribe(params => {
      this.selectTab = params['page'];
      console.log(params['page']);
    });

    this.navigationService.updateMessage('Il mio account');
  }

  updateProfile() {
    this.profileService.updateProfile(this.userData)
      .then((data) => {
        if (data.success) {
          this.formError = {
            title: '',
            message: 'Hai aggiornato le tue informazioni con successo!',
            type: 'success'
          };
        }
      })
      .catch((error) => {
        console.log(error);
      });
    return false;
  }

  renderPage(page) {
    this.selectTab = page;
  }

  getPopup(type) {
    this.activePopup = type;
  }

  closePopup() {
    this.activePopup = '';
  }

  changePassword(currentPassword, newPassword, passwordConfirm) {
    this.closePopup();
    this.changePasswordData.currentPassword = '';
    this.changePasswordData.newPassword = '';
    this.changePasswordData.passwordConfirm = '';
    return false;
  }

  checkPassword(newPassword, passwordConfirm) {
    if (newPassword === passwordConfirm) {
      this.changePasswordError.passwordConfirm = false;
    } else {
      this.changePasswordError.passwordConfirm = true;
    }
  }

  swipe(action = this.SWIPE_ACTION.RIGHT, delta) {
    let calculateDelta = this.delta + delta;
    console.log(calculateDelta);
    let menuSize = 0;
    let allMenuItems = document.querySelectorAll('.left-navigate > div > a');
    for (let i = 0; i < allMenuItems.length; i++) {
      let menuItem: any = allMenuItems[i];
      menuSize += menuItem.offsetWidth;
    }
    console.log(menuSize);
    let menuBlockWidth = document.querySelector('.left-navigate').clientWidth;
    console.log(menuBlockWidth);
    let allowMargin = (menuSize) - menuBlockWidth;
    if (allowMargin >= 0) {
      allowMargin = -allowMargin;
      if (calculateDelta > 0) {
        this.delta = 0;
      } else {
        if (calculateDelta < allowMargin) {
          if (action === this.SWIPE_ACTION.LEFT && allowMargin !== 0) {
            this.delta = allowMargin;
          }
        } else {
          this.delta = calculateDelta;
        }
      }
    }
  }

}
