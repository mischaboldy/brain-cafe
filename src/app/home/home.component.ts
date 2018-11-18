import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  public constructor(public loginService: LoginService,
                     private _router: Router) {

  }

  public events = [{
    number: 1,
    image: 'thumb1',
    date: '21-12-2018'
  }, {
    number: 2,
    image: 'thumb2',
    date: '21-12-2018'
  }, {
    number: 3,
    image: 'thumb3',
    date: '21-12-2018'

  }];

  public navigateTo(event) {
    if (this.loginService.loggedIn) {
      this._router.navigate(['/event', event.number]);
    } else {
      this._router.navigate(['/login']);
    }
  }

}
