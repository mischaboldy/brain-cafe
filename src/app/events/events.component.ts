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
    name: '',
    text: '',
    image: 'broad-1',
    imageSuccess: ''
  }, {
    name: '',
    text: '',
    image: 'broad-2',
    imageSuccess: 'http://info.shine.com/media/images/228/3228/Young-Professional-_large.jpg'
  }, {
    name: '',
    text: '',
    image: 'broad-3',
    imageSuccess: 'http://info.shine.com/media/images/228/3228/Young-Professional-_large.jpg'
  }];

  public signUp() {
    this._alertService.sendSuccess(SuccessMessages.SignupCompleted);
  }
}
