import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute, Params } from '@angular/router';
import { NavigationService } from '../../shared/navigation.service';
import { ProfileService } from '../../shared/profile.service';

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


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navigationService: NavigationService,
    private profileService: ProfileService) {
  }

  ngOnInit() {
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
            this.goToHomePage()
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
        } else if (this.page === 'password_verification') {
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

          //  if (params['code']) {
           //
          //  }
          //  var queryKey = params['action']
           // console.log('Parameters: ' + JSON.stringify(params));
           // console.log(this.queryKey);

         } else {
           // login
           // signup
           // show root or login or signin
          //  this.router.navigate(['/account/login']);
         }
      });
    })
  }

  goToHomePage() {
    this.router.navigate(['/']);
  }
}
