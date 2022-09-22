import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SwitcherService } from 'src/app/shared/services/switcher.service';

@Component({
  selector: 'app-switcher-layout',
  templateUrl: './switcher-layout.component.html',
  styleUrls: ['./switcher-layout.component.scss']
})
export class SwitcherLayoutComponent implements OnInit {

  layoutSub!: Subscription;
  sidenavtoggled1: any;

  constructor(public SwitcherService : SwitcherService) { }
  ngOnInit() {}
  
  toggleSwitcherBody() {
    this.SwitcherService.emitChange(false);
  }

}
