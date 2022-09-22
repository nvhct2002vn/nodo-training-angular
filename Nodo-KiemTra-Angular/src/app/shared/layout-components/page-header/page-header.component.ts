import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  @Input() title!: string;
  @Input() items!: any[];
  @Input() active_item!: string;
  constructor() { }

  ngOnInit(): void {
  }

  scrolled: boolean = false;
  
  @HostListener("window:scroll", [])
  onWindowScroll() {    
    this.scrolled = window.scrollY > 70;
  }
}
