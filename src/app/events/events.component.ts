import { Component } from '@angular/core';
import { AlertService } from '../shared/services/alert.service';
import { SuccessMessages } from '../shared/enums/messages/success-messages.enum';

@Component({
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})

export class EventsComponent {

  public constructor(private _alertService: AlertService) {

  }

  public events = [{
    expand: false,
    time: '12:00 - 15:00',
    image: 'broad-1',
    venue: 'LC, Groningen'
  }, {
    expand: false,
    time: '10:00 - 13:00',
    image: 'broad-2',
    venue: 'LC, Groningen'
  }, {
    expand: false,
    time: '10:00 - 13:00',
    image: 'broad-3',
    venue: 'LC, Groningen'
  }];

  public signUp() {
    this._alertService.sendSuccess(SuccessMessages.SignupCompleted);
  }
}
