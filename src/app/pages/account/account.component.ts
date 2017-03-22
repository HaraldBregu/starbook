import { Component, OnInit} from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { NavigationService } from '../../shared/navigation.service';
import { ProfileService } from '../../shared/profile.service';
import { isBrowser } from "angular2-universal";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {
  public page = '';
  public email_verification = {
    title: 'Verificando la tua email',
    spinner: {
      visible: false,
    },
    success: {
      visible: false,
    },
    button: {
      title : 'Torna alla home',
      visible: false
    }
  };
  public password_verification = {
    title: 'Verificando la nuova password',
    spinner: {
      visible: false,
    },
    success: {
      visible: false,
    },
    button: {
      title : 'Torna alla home',
      visible: false
    }
  };
  public new_password_creation = {
    title: 'Inserisci una password',
    spinner: {
      visible: false,
    },
    success: {
      visible: false,
    },
    password_field: {
      title:'Crea una password sicura',
      value: '',
      visible: true
    },
    button: {
      title : 'Crea password',
      visible: true
    },
    code: ''
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navigationService: NavigationService,
    private profileService: ProfileService) {
  }

  ngOnInit() {

  }

  ngAfterContentInit() {
    this.route.params.subscribe(params => {
      this.page = params['page']
      this.route.queryParams.subscribe((params: Params) => {
        if (this.page === 'login') {
          this.navigationService.updateMessage('Accedi al tuo account');

        } else if (this.page === 'signup') {
          this.navigationService.updateMessage('Crea un nuovo account');

        } else if (this.page === 'email_verification') {
          this.navigationService.updateMessage('Verifica della email');
          var code = params['code']
          if (!code) {
            // this.goToHomePage()
          } else {
            this.email_verification.spinner.visible = true;
            this.profileService.verifyEmail(code)
            .then((object) => {
              this.email_verification.title = 'Email verificato!';
              this.email_verification.spinner.visible = false;
              this.email_verification.success.visible = true;
              this.email_verification.button.visible = true;
            })
            .catch((error) => {
              this.email_verification.title = 'Errore verifica email!';
              this.email_verification.spinner.visible = false;
            });
          }
        } else
         if (this.page === 'password_verification') {
          this.navigationService.updateMessage('Verifica della nuova password');
          var code = params['code']
          if (!code) {
            this.goToHomePage()
          } else {
            this.password_verification.spinner.visible = true;
            this.profileService.verifyNewPassword(code)
            .then((object) => {
              this.password_verification.title = 'Nuova password verificata!';
              this.password_verification.spinner.visible = false;
              this.password_verification.success.visible = true;
              this.password_verification.button.visible = true;
            })
            .catch((error) => {
              this.password_verification.title = 'Errore verifica password!';
              this.password_verification.spinner.visible = false;
            });
          }
         } else if (this.page === 'create_new_password') {
           this.navigationService.updateMessage('Crea una nuova password');
           var code = params['code']
           if (!code) {
             this.goToHomePage()
             return;
           }
           this.new_password_creation.code = code;
         } else {
           // login
           // signup
           // show root or login or signin
          //  this.router.navigate(['/account/login']);
         }
      });
    })
  }
  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked');
  // }
  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked');
  // }

  createNewPassword(password) {
    this.new_password_creation.spinner.visible = true;
    this.profileService.createNewPassword(this.new_password_creation.code, password)
    .then((object) => {
      this.new_password_creation.title = 'Nuova password creata!';
      this.new_password_creation.spinner.visible = false;
      this.new_password_creation.success.visible = true;
      this.new_password_creation.button.visible = true;
    })
    .catch((error) => {
      this.new_password_creation.title = 'Errore creazione password!';
      this.new_password_creation.spinner.visible = false;
    });
  }

  goToHomePage() {
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    if (isBrowser) {
    }
  }
}
