import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/login.service';

@Component({
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
  public registrationFormGroup: FormGroup;
  public registrationFormFields = {
    name: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required
    ]),
    skills: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ]),
    passwordRepeat: new FormControl('', [
      Validators.required
    ])
  };

  public constructor(private _formBuilder: FormBuilder,
                     private _router: Router,
                     private _loginService: LoginService,
                     private _location: Location) {
  }

  ngOnInit() {
    this.registrationFormGroup = this._formBuilder.group(this.registrationFormFields);
  }

  public backWithoutRegister() {
    this._location.back();
  }

  public register() {
    this._loginService.register(this.registrationFormGroup.value);
    this._router.navigate(['/login']);
  }
}
