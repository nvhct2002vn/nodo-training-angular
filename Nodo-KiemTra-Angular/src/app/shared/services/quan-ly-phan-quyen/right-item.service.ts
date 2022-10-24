import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {ToastrService} from 'ngx-toastr';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class RightItemService {

    constructor(
        private readonly apiService: ApiService,
    ) {
    }

    getRightItem() {
        return this.apiService.getAllRightItem();
    }

}
