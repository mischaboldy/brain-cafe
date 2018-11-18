import { Component } from '@angular/core';
import { AlertService } from '../shared/services/alert.service';
import { SuccessMessages } from '../shared/enums/messages/success-messages.enum';
import {
  trigger,
  state,
  style,
  animate,
  transition
  // ...
} from '@angular/animations';
import { ProgressService } from '../shared/services/progress.service';

@Component({
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        'background-color': '#99B1b9',
        'margin-bottom': '20px',
        'min-height': '350px'
      })),
      state('closed', style({
        'height': '150px',
        'margin-bottom': '20px',
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ])
    ])
  ]
})

export class EventsComponent {

  public constructor(private _alertService: AlertService,
                     private _progressService: ProgressService) {

  }

  public events = [{
    name: 'Effective altruism',
    expand: false,
    time: '12:00 - 15:00',
    image: 'broad-1',
    venue: 'LC, Groningen',
    text: 'Effective altruism is about answering one simple question: how can we use our resources to help others the most? ' +
      'Rather than just doing what feels right, we use evidence and careful analysis to find the very best causes to work on. ' +
      'But it\'s no use answering the question unless you act on it. Effective altruism is about following through. ' +
      'It\'s about being generous with your time and your money to do the most good you can.'
  }, {
    name: 'Public speaking',
    expand: false,
    time: '10:00 - 13:00',
    image: 'broad-2',
    venue: 'LC, Groningen',
    text: 'Self-esteem is the way people feel about themselves. We develop self-esteem during our childhoods through ' +
      'the way people, and especially our parents, treat us. Children who get lots of love and attention when they are' +
      ' young, and have people telling them they are clever and attractive usually have more self-esteem than children who' +
      ' are often told they are stupid or ugly, or ignored.'
  }, {
    name: 'Self esteem for effective communication',
    expand: false,
    time: '10:00 - 13:00',
    image: 'broad-3',
    venue: 'LC, Groningen',
    text: 'Think about a time that you had to stand in front of a bunch of people and tell them something. Maybe it was ' +
      'an oral report in grade school or a proposal at work. After gathering your materials and preparing what to say, ' +
      'you arrived at the podium and started talking. That, my friend, is public speaking, and it involves communicating ' +
      'information before a large audience. What makes public speaking different than, say, just talking to a crowd of people, ' +
      'is in the way information is conveyed. In public speaking, the information is purposeful and meant to inform, ' +
      'influence or entertain a group of listeners.'
  }];

  public signUp(event) {
    this._progressService.signUp(event);
    this._alertService.sendSuccess(SuccessMessages.SignupCompleted);
  }
}
