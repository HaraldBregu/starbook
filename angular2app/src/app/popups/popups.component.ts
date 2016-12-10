import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { NavigationService } from '../shared/navigation.service';

@Component({
  selector: 'app-popups',
  templateUrl: './popups.component.html'
})
export class PopupsComponent implements OnInit {
  @Input() activePopup = '';
  @Output() close: EventEmitter<any> = new EventEmitter();

  public emailPattern;
  public auth;
  public loginData = {
    email: '',
    password: ''
  };
  public loginError = {
    email: false
  };
  public registrationData = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  };
  public registrationError = {
    email: false,
    password: false
  };
  public recoveryData = {
    email: ''
  };
  public recoveryError = {
    email: false
  };
  public formError: boolean|{title: string, message: string} = false;
  constructor(private authServics: AuthService, private navigationService: NavigationService) {
    this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  }
  getPopup(type: string) {
    this.closePopup(true);
    this.activePopup = type;
  }

  closePopup(isReopen = false) {
    this.activePopup = '';
    this.formError = false;
    if (!isReopen) {
      this.close.emit(true);
    }
  }

  login(email: string, password: string) {
    if (this.emailPattern.test(email)) {
      this.authServics.login(email, password)
        .then((data) => {
          this.auth = data;
          this.navigationService.updatePersonalMenu(data);
          this.closePopup();
        })
        .catch((error) => {
          switch (error) {
            case 404:
              this.formError = {
                title: 'Si è verificato un errore!',
                message: 'Non riusciamo a trovare un account con quell’indirizzo e-mail'
              };
              break;
            case 401:
              this.formError = {
                title: 'Si è verificato un errore!',
                message: 'La tua password non è corretta'
              };
              break;
            default:
              this.formError = false;
          }
        });
    } else {
      this.loginError.email = true;
    }
    return false;
  }

  checkEmail(type: string, email: string) {
    if (this.emailPattern.test(email)) {
      switch (type) {
        case 'login':
          this.loginError.email = false;
          break;
        case 'registration':
          this.registrationError.email = false;
          break;
      }
    } else {
      switch (type) {
        case 'login':
          this.loginError.email = true;
          break;
        case 'registration':
          this.registrationError.email = true;
          break;
      }
    }
  }

  checkPassword(password: string, passwordConfirm: string) {
    if (password !== passwordConfirm) {
      this.registrationError.password = true;
    } else {
      this.registrationError.password = false;
    }
  }

  registration(name: string, email: string, password: string, passwordConfirm: string) {
    if (this.emailPattern.test(email) && password === passwordConfirm) {
      this.authServics.signup(name, email, password)
        .then((data) => {
          this.auth = data;
          this.navigationService.updatePersonalMenu(data);
          this.closePopup();
        })
        .catch((error) => {
          switch (error) {
            case 409:
              this.formError = {
                title: 'Indirizzo e-mail già in uso.',
                message: `Hai indicato di essere un nuovo cliente ma è già 
                presente un account collegato all'indirizzo e-mail: mail@gmail.com`
              };
              break;
            default:
              this.formError = false;
          }
        });
    } else {
      if (!this.emailPattern.test(email)) {
        this.registrationError.email = true;
      }
      if (password !== passwordConfirm) {
        this.registrationError.password = true;
      }
    }
    return false;
  }

  recovery(email: string) {
    if (this.emailPattern.test(email)) {
      this.authServics.recovery(email)
        .then((status) => {
          this.getPopup('finish');
        })
        .catch((error) => {
          this.formError = {
            title: 'Si è verificato un problema!',
            message: `Ci dispiace. Impossibile identificare l'account con le informazioni fornite.`
          };
        });
    } else {
      this.recoveryError.email = true;
    }
    return false;
  }

  ngOnInit() {
    this.auth = this.authServics.authInit();
  }

}
