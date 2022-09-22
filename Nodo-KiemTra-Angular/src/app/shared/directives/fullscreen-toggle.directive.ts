import { Directive, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/common";

@Directive({
  selector: '[appFullscreen]'
})
export class FullscreenDirective {


 

  // For simple code use below code
 public fullScreen: boolean = false;
  public elem: any;

  constructor(
    @Inject(DOCUMENT) private document: any
  ) { }

  ngOnInit(){
    this.elem = document.documentElement;
  }

  @HostListener('click')

  onClick(){
    this.fullScreen = !this.fullScreen;
    if (this.fullScreen) {
      if (this.elem.requestFullscreen) {
        this.elem.requestFullscreen();
      } else if (this.elem.mozRequestFullScreen) {
        /* Firefox */
        this.elem.mozRequestFullScreen();
      } else if (this.elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.elem.webkitRequestFullscreen();
      } else if (this.elem.msRequestFullscreen) {
        /* IE/Edge */
        this.elem.msRequestFullscreen();
      }
    } else {
      if (!this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }

}
