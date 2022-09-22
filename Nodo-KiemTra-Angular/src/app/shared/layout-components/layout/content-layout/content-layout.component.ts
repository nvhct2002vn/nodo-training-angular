import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {SwitcherService} from 'src/app/shared/services/switcher.service';
import {Constants} from "../../../Constants";

@Component({
    selector: 'app-content-layout',
    templateUrl: './content-layout.component.html',
    styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit {
    readonly ROOT_SPINNER_NAME = Constants.ROOT_SPINNER.NAME;
    layoutSub!: Subscription;
    sidenavtoggled1: any;

    constructor(public SwitcherService: SwitcherService) {
    }

    ngOnInit() {
    }

    toggleSwitcherBody() {
        this.SwitcherService.emitChange(false);
    }

}
