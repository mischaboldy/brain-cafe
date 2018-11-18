import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../shared/services/progress.service';

@Component({
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})

export class ProgressComponent implements OnInit {
  public progress;

  public constructor(private _progressService: ProgressService) {
  }

  public ngOnInit() {
    this.progress = this._progressService.courses;
    // this.progress = [{
    //   name: 'qdqwdqwdqwdqwdqwdwqdwqwdq',
    //   expand: false,
    //   image: 'broad-1',
    //   text: 'Effective altruism is about answering one simple question: how can we use our resources to help others the most? Rather than just doing what feels right, we use evidence and careful analysis to find the very best causes to work on. But it\'s no use answering the question unless you act on it. Effective altruism is about following through. It\'s about being generous with your time and your money to do the most good you can.',
    //   time: '12:00 - 15:00',
    //   venue: 'LC, Groningen'
    // }, {
    //   name: 'qdqwdqwdqwdqwdqwdwqdwqwdq',
    //   expand: false,
    //   image: 'broad-1',
    //   text: 'Effective altruism is about answering one simple question: how can we use our resources to help others the most? Rather than just doing what feels right, we use evidence and careful analysis to find the very best causes to work on. But it\'s no use answering the question unless you act on it. Effective altruism is about following through. It\'s about being generous with your time and your money to do the most good you can.',
    //   time: '12:00 - 15:00',
    //   venue: 'LC, Groningen'
    // }];
  }

  public getWidth() {
    return '10%';
  }

  public getClass(index) {
    if (index % 3 === 0) {
      return 'progress-bar progress-bar-striped';
    }
    if (index % 3 === 1) {
      return 'progress-bar  bg-success progress-bar-striped';
    }
    if (index % 3 === 2) {
      return 'progress-bar bg-info progress-bar-striped';
    }
  }
}
