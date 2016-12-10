import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../shared/profile.service';
import { Router } from '@angular/router';
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
  public tabs = [
    {name: 'Generali', selected: true},
    {name: 'Pagamento', selected: false},
    {name: 'Fatturazione', selected: false},
    {name: 'Impostazioni', selected: false}
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

  constructor(private profileService: ProfileService, private router: Router, private navigationService: NavigationService) { }

  ngOnInit() {
    if (localStorage.getItem('auth') !== null) {
      let authData = JSON.parse(localStorage.getItem('auth'));
      this.userData.fullname = authData.fullname;
      this.userData.email = authData.email;
    } else {
      this.router.navigate(['/']);
    }

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

}
