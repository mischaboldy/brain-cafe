import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';
import { AlertService } from '../shared/services/alert.service';
import { ErrorMessages } from '../shared/enums/messages/error-messages.enum';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  public email;

  public constructor(private _location: Location,
                     private _router: Router,
                     private _alertService: AlertService,
                     private _loginService: LoginService) {
  }

  public backWithoutRegister() {
    this._location.back();
  }

  public login() {
    if (this._loginService.logIn({email: this.email})) {
      this._router.navigate(['/events']);
    } else {
      this._alertService.sendError(ErrorMessages.LoginFailed);
    }
  }
}
