import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})

export class EventComponent implements OnInit {
  public events = [];
  public event = {};

  public constructor(private _activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params) => {
      this.event = this.events[params.id];
    });
  }
}
