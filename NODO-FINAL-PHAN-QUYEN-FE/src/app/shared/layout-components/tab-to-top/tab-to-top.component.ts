import {ViewportScroller} from '@angular/common';
import {Component, HostListener, OnInit} from '@angular/core';

@Component({
    selector: 'app-tab-to-top',
    templateUrl: './tab-to-top.component.html',
    styleUrls: ['./tab-to-top.component.scss']
})
export class TabToTopComponent implements OnInit {
    public show: boolean = false;

    constructor(private viewScroller: ViewportScroller) {
    }

    ngOnInit(): void {
    }

    @HostListener("window:scroll", [])
    onWindowScroll() {
        let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        this.show = number > 400;
    }

    taptotop() {
        this.viewScroller.scrollToPosition([0, 0]);
    }
}
