import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public isCollapsed = false;
  public isClosed = false;
  public isCollapsed1 = false;
  public isClosed1 = false;
  
  toggleClass = "fe fe-maximize";
  public fullScreen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
Collapsetoggle() {
    this.isCollapsed = !this.isCollapsed;
  }
  Closetoggle() {
    this.isClosed = true
  }
  Collapsetoggle1() {
    this.isCollapsed1 = !this.isCollapsed1;
  }
  Closetoggle1() {
    this.isClosed1 = true
  }
  fullScreenToggle() {
    if (this.toggleClass === "fe fe-maximize") {
      this.toggleClass = "fe fe-minimize";
    } else {
      this.toggleClass = "fe fe-maximize";
    }
  }
}
