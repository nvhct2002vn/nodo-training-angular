import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appSidemenuToggle]'
})
export class SidemenuToggleDirective {
  private body:any = document.querySelector('body');
  constructor() { }

  @HostListener('click') toggleSidemenu(){
    if (window.innerWidth >= 992) {
      if (
        document.querySelector('body')?.classList.contains('main-sidebar-hide')
      ) {
        document.querySelector('body')?.classList.remove('main-sidebar-hide');
      } else {
        document.querySelector('body')?.classList.add('main-sidebar-hide');
      }
    }
    else{
      if(document.querySelector('body')?.classList.contains('horizontalmenu')){
        if (
          document.querySelector('body')?.classList.contains('main-navbar-show')
        ) {
          document.querySelector('body')?.classList.remove('main-navbar-show');
        } else {
          document.querySelector('body')?.classList.add('main-navbar-show');
        }
      }
      else{
        if (
          document.querySelector('body')?.classList.contains('main-sidebar-show')
        ) {
          document.querySelector('body')?.classList.remove('main-sidebar-show');
        } else {
          document.querySelector('body')?.classList.add('main-sidebar-show');
        }
      }
    }
  }
}
