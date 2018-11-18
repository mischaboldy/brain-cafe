import { Component } from '@angular/core';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent {

  constructor(public alertService: AlertService ) { }

  public getAlertClass(type: string) {
    return 'alert alert-' + type.toLowerCase() + ' alert-dismissible';
  }
}



