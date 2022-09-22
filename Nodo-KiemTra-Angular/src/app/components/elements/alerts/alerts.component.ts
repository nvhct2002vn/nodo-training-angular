import { Component, OnInit } from '@angular/core';

interface Alert {
  id?: number;
  type: string;
  message: string;
  title: string;
  icon?: string;
}


@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  alerts:Alert[] = [
    {id: 1, type: 'primary', message: 'You successfully read this alert message.', title: 'Well done!'},
    {id: 2, type: 'secondary', message: 'You successfully read this alert message.', title: 'Well done!'},
    {id: 3, type: 'success', message: 'You successfully read this alert message.', title: 'Well done!'},
    {id: 4, type: 'danger', message: 'Change a few things up and try submitting again.', title: 'Oh snap!'},
    {id: 5, type: 'warning', message: "Better check yourself, you're not looking too good.", title: 'Warning!'},
    {id: 6, type: 'info', message: "This alert needs your attention, but it's not super.", title: 'Heads up!'},
  ]
  alertsOutline:Alert[] = [
    {id: 1, type: 'outline-primary', message: 'You successfully read this alert message.', title: 'Well done!'},
    {id: 2, type: 'outline-secondary', message: 'You successfully read this alert message.', title: 'Well done!'},
    {id: 3, type: 'outline-success', message: 'You successfully read this alert message.', title: 'Well done!'},
    {id: 4, type: 'outline-danger', message: 'Change a few things up and try submitting again.', title: 'Oh snap!'},
    {id: 5, type: 'outline-warning', message: "Better check yourself, you're not looking too good.", title: 'Warning!'},
    {id: 6, type: 'outline-info', message: "This alert needs your attention, but it's not super.", title: 'Heads up!'},
  ]
  alertsSolid:Alert[] = [
    {id: 1, type: 'solid-primary', message: 'You successfully read this alert message.', title: 'Well done!'},
    {id: 2, type: 'solid-secondary', message: 'You successfully read this alert message.', title: 'Well done!'},
    {id: 3, type: 'solid-success', message: 'You successfully read this alert message.', title: 'Well done!'},
    {id: 4, type: 'solid-danger', message: 'Change a few things up and try submitting again.', title: 'Oh snap!'},
    {id: 5, type: 'solid-warning', message: "Better check yourself, you're not looking too good.", title: 'Warning!'},
    {id: 6, type: 'solid-info', message: "This alert needs your attention, but it's not super.", title: 'Heads up!'},
  ]
  alertsIcons:Alert[] = [
    {id: 2, type: 'success', message: "This is a Primary alert—check it out that has an icon too!", title: 'Primary!', icon: 'check-square'},
    {id: 3, type: 'danger', message: 'This is a Success alert—check it out that has an icon too!', title: 'Success!', icon: 'thumbs-up'},
    {id: 4, type: 'warning', message: "This is a warning alert—check it out that has an icon too!", title: 'Warning!', icon: 'info'},
    {id: 5, type: 'info', message: "This is a info alert—check it out that has an icon too!", title: 'Info!', icon: 'bell'},
    {id: 6, type: 'danger', message: "This is a Danger alert—check it out that has an icon too!", title: 'Danger!', icon: 'slash'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
