import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverEffectSidebar]',
})
export class HoverEffectSidebarDirective {
  constructor(private eleRef: ElementRef, private render: Renderer2){}

  @HostListener('mouseover') onHover() {
    if (window.innerWidth > 992) {
      document.querySelector('.main-sidebar-hide')?.classList.add('main-sidebar-open');
    }
  }
  @HostListener('mouseleave') onLeave() {
    if (window.innerWidth > 992) {
      document.querySelector('.main-sidebar-hide')?.classList.remove('main-sidebar-open');
    }
  }
}
