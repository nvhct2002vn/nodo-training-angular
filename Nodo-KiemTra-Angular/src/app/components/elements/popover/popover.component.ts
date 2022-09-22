import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ngDoCheck() {
    let popoverLeft: any = document.querySelectorAll(
      'ngb-popover-window.popover[data-popper-placement="left"]'
    );
    let popoverRight: any = document.querySelectorAll(
      'ngb-popover-window.popover[data-popper-placement="right"]'
    );
    this.PopoverLeftisInViewport(popoverLeft);
    this.PopoverRightisInViewport(popoverRight);
  }
  PopoverLeftisInViewport(element: any) {
    const rect = element.forEach((el: any) => {
      let e = el.getBoundingClientRect();
      if (e.left < 0) {
        el.classList.add('popover-left-responsive');
      } else {
        el.classList.remove('popover-left-responsive');
      }
    });
  }
  PopoverRightisInViewport(element: any) {
    const rect = element.forEach((el: any) => {
      let e = el.getBoundingClientRect();
      if (e.right > innerWidth) {
        el.classList.add('popover-right-responsive');
      }
      else{
        el.classList.remove('popover-right-responsive');
      }
    });
  }
}
