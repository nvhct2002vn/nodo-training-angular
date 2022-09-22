import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss']
})
export class RightSidebarComponent implements OnInit {
  layoutSub: Subscription;
  isOpen: boolean = false;

  @ViewChild('sidebar', {static: false}) sidebar!: ElementRef;
  constructor(
    private renderer: Renderer2,
    private layoutService: LayoutService,
    private modalService: NgbModal
  ) {
    this.layoutSub = layoutService.SidebarNotifyChangeEmitted.subscribe(
      value => {
        if (this.isOpen) {
          this.renderer.removeClass(this.sidebar.nativeElement, 'sidebar-open');
          this.isOpen = false;
        }
        else {
          this.renderer.addClass(this.sidebar.nativeElement, 'sidebar-open');
          this.isOpen = true;
        }
      }
    );
  }
  ngOnInit(): void {
  }
  ngOnDestroy(){
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
  }
  onClose(){
    this.renderer.removeClass(this.sidebar.nativeElement, 'sidebar-open');
    this.isOpen = false;
  }

  open(content:any) {
    this.modalService.open(content, {backdrop : 'static' , windowClass : 'modalCusSty' })
  }
}
