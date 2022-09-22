import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LayoutService {
    IS_DARK_THEME: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor() {
    }

    //Sidebar Notification
    private emitSidebarNofitSource = new Subject<any>();
    SidebarNotifyChangeEmitted = this.emitSidebarNofitSource.asObservable();

    emitSidebarNotifyChange(change: any) {
        this.emitSidebarNofitSource.next(change);
    }

    //Sidebar
    private emitSwitcherSource = new Subject<any>();
    SwitcherChangeEmitted = this.emitSwitcherSource.asObservable();

    emitSwitcherChange(change: any) {
        this.emitSwitcherSource.next(change);
    }
}
